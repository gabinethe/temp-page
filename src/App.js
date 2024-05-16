import "./App.css";
import Titulo from "./Components/Título/Titulo";
import Card from "./Components/Card/Card";
import {useState, useEffect} from "react";

function App() {
  const diasSemana = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];
  
  let [contadorEstado, setContadorEstado] = useState(0);
  let contador = 0;

  const contaClique = () => {
    console.log (contador = contador + 1);

  }

  return (
    <div className="App">
      <button onClick={() =>{setContadorEstado(contadorEstado = contadorEstado + 1)}}> Clique Aqui </button>
      <h1>{contadorEstado}</h1>
      <button onClick={contaClique}>Clique aqui</button>
      <h1>{contador}</h1>
      <Titulo descricao="Previsão do tempo para os próximos 7 dias"></Titulo>

      {diasSemana.map((dia) => {
        return <Card diaDaSemana={dia}></Card>;
      })}
    </div>
  );
}

export default App;



