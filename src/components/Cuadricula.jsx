import { useEffect, useState } from "react";
import axios from "axios";
import Criptos from "./cripto/Criptos";
import "./Cuadricula.css"

function Cuadricula() {

  const API_URL = 'https://api.coincap.io/v2/';

  const [criptos, setCriptos] = useState();

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        setCriptos(data.data.data);
      })
      .catch(() => {
        console.error('La petición falló')
      });
  }, []);


  if (!criptos) return <span>Cargando...</span>

  return (
    <div className="app-container">
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
