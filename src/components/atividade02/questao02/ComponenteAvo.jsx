import { useState } from "react"
import ComponenteFilho from "./ComponenteFilho"
import Integer from "./Integer"

const ComponenteAvo = () =>{
    // UseState para a questão 3
    const [number, setNumber] = useState(1)

    return(
        <div>
            <div>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + number + ".png"} style={{height: "200px", width: "200px"}} alt=""/>
            </div>
            <Integer.Provider value={number + 1}>
                <ComponenteFilho/>
            </Integer.Provider>
            <button onClick={() => setNumber(number + 1)}>incrementar</button>
            <button onClick={() => setNumber(number - 1)}>decrementar</button>
        </div>
    )
}

export default ComponenteAvo