import './App.css';
import Pai from './components/atividade01/questao01/Pai';
import * as PC from './components/atividade01/questao02/MeuPC';
import { Arena, World } from './components/atividade01/questao03/Batalha';
import FunctionContextA from './components/atividade02/questao01/06_context/FunctionContextA';
import ComponenteAvo from './components/atividade02/questao02/ComponenteAvo';

function App() {
  return (
    <>
      <h1>Atividade 01</h1>
      <hr />

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

      <br />
      <br />
      <hr />
      <hr />
      <br />
      <br />

      <h1>Atividade 02</h1>
      <hr />

      <FunctionContextA />

      <br /><hr />

      <ComponenteAvo />
    </>
  );
}

export default App;
