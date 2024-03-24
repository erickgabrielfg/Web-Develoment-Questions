import ComponenteNeto from "./ComponenteNeto"
import Integer from "./Integer"

const ComponenteFilho = () =>{
    return(
        <Integer.Consumer>
            {
                (value) => {
                    return(
                        <div>
                            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ value + ".png"} style={{height: "200px", width: "200px"}} alt=""/>
                            <Integer.Provider value={value+1}>
                                <ComponenteNeto/>   
                            </Integer.Provider>
                        </div>
                    )
                }
            }
        </Integer.Consumer>
    )
}

export default ComponenteFilho