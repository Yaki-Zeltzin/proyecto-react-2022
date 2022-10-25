import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './components/App'
import CriptoPage from './components/cripto/CriptoPage'
import Cuadricula from './components/Cuadricula'
import Home from './components/Home'
import "./main.css"
import {UserContextProvider} from './components/context/UserContext'
import Perfil from './components/usuarios/Perfil'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='perfil' element={<Perfil/>} />
        </Route>
        <Route path='/criptomonedas' element={<App />}>
          <Route index element={<Cuadricula />}/>
          <Route path=':id' element={<CriptoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
)
