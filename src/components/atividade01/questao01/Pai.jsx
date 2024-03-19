import Filho from "./Filho";

export default function Pai(props) {
    return(
        <>
            <Filho altura={props.alturaFilho} peso={props.pesoFilho}></Filho>
        </>
    )
};

