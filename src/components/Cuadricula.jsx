import Criptos from "./cripto/Criptos";
import "./Cuadricula.css"
import usePetition from "./hocks/usePetition";

function Cuadricula() {

  const API_URL = 'https://api.coincap.io/v2/';

  const criptos = usePetition('assets');


  if (!criptos) return <span>Cargando...</span>

  return (
    <div className="grid-container">
      <h1>Lista de criptomonedas</h1>
      <div className="cripto-container">
        {
          criptos.map(({ id, name, priceUsd, symbol, changePercent24Hr }) => (
            <Criptos
              name={name}
              key={id}
              priceUsd={priceUsd}
              symbol={symbol}
              changePercent24Hr={changePercent24Hr}
              id={id}
            />
          ))
        }
      </div>
    </div>
  )
};

export default Cuadricula;
