import { useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";

function App() {
  const [stateTemperatura, setStateTemperatura] = useState();
  const [descricao, setDescricao] = useState("");
  const [cidade, setCidade] = useState("");
  const [previsao, setPrevisao] = useState([]);
  const diasSemana = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado","Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado",];
  const now = new Date();
  const currentDay = now.getDay();

  const callApi = () => {
    // api openweather
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=afb5fd1ea152ce949db3fa511fc4ce34`
    )
      .then((resposta) => {
        return resposta.json();
      })
      .then((dadoTemperatura) => {
        // console.log(temperatura);
        setDescricao(dadoTemperatura.weather[0].description);
        setStateTemperatura(dadoTemperatura.main.temp);
      })
      .catch(() => {
        alert("Cidade não encontrada");
      });

    //api forecast
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&lang=pt_br&units=metric&appid=afb5fd1ea152ce949db3fa511fc4ce34`
    )
      .then((resposta) => {
        return resposta.json();
      })
      .then((dadoPrevisao) => {
        console.log(dadoPrevisao);
        const tempList = [];
        for (let i = 7; i < 40; i += 8) {
          tempList.push({
            temp: Math.round(dadoPrevisao.list[i].main.temp),
            clima: dadoPrevisao.list[i].weather[0].description,
          });
        }
        setPrevisao(tempList);
        console.log(tempList);
      })
      .catch(() => alert("Cidade não encontrada"));
  };

  const dadoEntrada = (evento) => {
    setCidade(evento.target.value);
  };

  return (
    <div className="App">
      <header>
      <h1>Clima Tempo</h1>
      </header>
      <div id="barra">
        <h2>Digite abaixo o nome da cidade que deseja buscar</h2>
      <input type="text" placeholder="Buscar Cidade" onChange={dadoEntrada}></input>
      <button onClick={callApi}>Buscar</button>
      </div>
      <h1>Temperatura atual</h1>
      <Card diaDaSemana={"Hoje"} cidade={cidade} temperatura={stateTemperatura + "°"} descricao={descricao}></Card>
      <h1>Próximos cinco dias</h1>
      <div style={{ display: "flex" }}>
        {[...Array(5)].map((_, index) => {
          return (
            <Card
              key={index}
              diaDaSemana={diasSemana[currentDay + index + 1]}
              cidade={cidade}
              temperatura={previsao[index] ? previsao[index].temp + "°" : ""}
              descricao={previsao[index] ? previsao[index].clima : ""}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}
export default App;