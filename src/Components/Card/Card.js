import './card.css'

function Card(props){
    return(
        <div className='diaTemp'>
            
            <div id="infos">
            
            <h2>{props.diaDaSemana}</h2>
            <h3>{props.cidade}</h3>
            <h1>{props.temperatura}</h1>
            <h3>{props.descricao}</h3>
            </div>
            
        </div>

    )
}

export default Card;

