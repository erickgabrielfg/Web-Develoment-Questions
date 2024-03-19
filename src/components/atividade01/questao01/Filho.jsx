export default function Filho(props) {

    function tipoIMC(imc){
        if(imc < 18)
            return <h3>Abaixo do peso</h3>
        else if(imc > 25)
            return <h3>Acima do peso</h3>
        return <h3>Peso ideal</h3>
    }

    function calcularIMC(peso, altura){
        return peso / (altura**2)
    } 

    let imc = calcularIMC(props.peso, props.altura).toFixed(2)

    return(
        <>
            <h3>O IMC do filho é igual a {imc}</h3>
            <br />
            <h3>O filho está: </h3>{tipoIMC(imc)}
        </>
    )
};
