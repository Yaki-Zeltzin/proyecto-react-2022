import { useEffect, useState } from "react";
import axios from "axios";

function App() {
 
  const API_URL = 'https://api.coincap.io/v2/';

  const [criptos, setCriptos] = useState();

  useEffect(()=>{
    axios.get(`${API_URL}assets`)
    .then((data) =>{
      setCriptos(data.data.data);
    })
    .catch(()=>{
      console.error('La petición falló')
    });
  },[]);
  

  if(!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        {
          criptos.map(({id,name, priceUsd}) => (
          <li key={id}>Nombre: {name} Precio: {priceUsd} </li>
        ))
         }
      </ol>
    </>
  )
};

export default App;
