import './card.css'

function Card(props){
    return(
        <div className='diaTemp'>
            <h2>{props.diaDaSemana}</h2>
            <h3>São Paulo</h3>
            <h1>16ºC</h1>
            <p>nublado</p>
        </div>

    )


}

export default Card;

