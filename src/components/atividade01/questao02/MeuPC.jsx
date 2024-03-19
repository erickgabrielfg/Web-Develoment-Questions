
function PlacaMae(props){
    return <h1>Placa Mãe: {props.nome} <br /> Preço: {props.preço}</h1>
}

function Memoria(props){
    return <h1>Memória: {props.nome} <br /> Preço: {props.preço}</h1>
}

function PlacaDeVideo(props){    
    return <h1>Placa de Vídeo: {props.nome} <br /> Preço: {props.preço}</h1>
}

export {PlacaMae, Memoria, PlacaDeVideo}