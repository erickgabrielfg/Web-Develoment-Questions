import './App.css';
import Pai from './components/atividade01/questao01/Pai';
import * as PC from './components/atividade01/questao02/MeuPC';
import { Arena, World } from './components/atividade01/questao03/Batalha';

function App() {
  return (
    <>
      <Pai alturaFilho={1.80} pesoFilho={90} />

      <br /><hr />

      <PC.PlacaDeVideo nome={"Nvidea"} preço={"R$ 600,00"} />
      <br></br>
      <PC.PlacaMae nome={"Gigabyte"} preço={"R$ 1700,00"} />
      <br></br>
      <PC.Memoria nome={"16 GB"} preço={"R$ 450,00"} />

      <br /><hr />

      <World>
        <Arena />
        <Arena />
        <Arena />
      </World>
    </>
  );
}

export default App;
