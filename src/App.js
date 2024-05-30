import "./App.css";
import { useState } from "react";
// import Background from "./Assets/Images/Mário Mundi.png";
// import Card from "./Components/Card/Card";

function App() {
  const [stateTemperatura, setStateTemperatura] = useState(30);
  const [descricao, setDescricao] = useState("");
  const [cidade, setCidade] = useState("São Paulo");

  const callApi = () => {
    //api openweather

    console.log("vai dar um salve na Api Temperatura");
    fetch(
      `"https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=5c3a255d1b982d430759586a662da1f1&units=metric"`
    )
      .then((resposta) => {
        return resposta.json();
      })
      .then((dadoTemperatura) => {
        setDescricao(dadoTemperatura.weather[0].description);
        setStateTemperatura(dadoTemperatura.main.temp);
        //console.log(dadoTemperatura.main.temp);
      })
      .catch(() => {
        alert("cidade não encontrada");
      });
  };
  const dadoEntrada = (evento) => {
    setCidade(evento.target.value); // consigo pegar a tecla
  };

  return (
    <div className="App">
      <div className="search">
        <input
          className="barra"
          placeholder="Buscar Local"
          type="text"
          onChange={dadoEntrada}
        ></input>
        <button className="Butao" onClick={callApi}>
          Buscar
        </button>
      </div>
      <div className="temp">
        <p>{cidade}</p>
        <p>{stateTemperatura}</p>
        <p>{descricao}</p>
      </div>
    </div>
  );
}

export default App;

// const diasSemana = [
//   "Domingo",
//   "Segunda-Feira",
//   "Terça-Feira",
//   "Quarta-Feira",
//   "Quinta-Feira",
//   "Sexta-Feira",
//   "Sábado",
// ];

// let [contadorEstado, setContadorEstado] = useState(0);
// let contador = 0;

// const contaClique = () => {
//   console.log (contador = contador + 1);

// }

// return (
//   <div className="App">
//     <button onClick={() =>{setContadorEstado(contadorEstado = contadorEstado + 1)}}> Clique Aqui </button>
//     <h1>{contadorEstado}</h1>
//     <button onClick={contaClique}>Clique aqui</button>
//     <h1>{contador}</h1>
//     <Titulo descricao="Previsão do tempo para os próximos 7 dias"></Titulo>

//     {diasSemana.map((dia) => {
//       return <Card diaDaSemana={dia}></Card>;
//     })}
//   </div>
// );
