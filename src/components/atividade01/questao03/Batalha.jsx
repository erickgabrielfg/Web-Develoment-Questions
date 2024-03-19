
function Hero(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <img src="https://observatoriodoaudiovisual.com.br/wp-content/uploads/2020/08/baki-1-740x416.jpg" alt="" />
        </div>
    )
}

function Enemy(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <img src="https://pm1.aminoapps.com/8200/56b06462c60316744a5263c21c53c11a9041073cr1-736-675v2_hq.jpg" alt="" />
        </div>
    )
}

function Arena(){
    return(
        <div>
            <Hero name = {"Baki"}/>
            <Enemy name = {"Yujiro"}/>
        </div>
    )
}

function World(props){
    return(
        <>
            {props.children}
        </>
    )
}

export {Arena, World}