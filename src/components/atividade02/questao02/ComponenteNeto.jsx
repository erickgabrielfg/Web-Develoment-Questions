import Integer from "./Integer"

const ComponenteNeto = () =>{
    return(
        <Integer.Consumer>
        {
            (value) => {
                return(
                    <div>
                        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + value + ".png"} style={{height: "200px", width: "200px"}} alt=""/>
                    </div>
                )
            }
        }
    </Integer.Consumer>
    )
}

export default ComponenteNeto