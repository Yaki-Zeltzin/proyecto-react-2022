import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './components/App'
import CriptoPage from './components/cripto/CriptoPage'
import Cuadricula from './components/Cuadricula'
import Home from './components/Home'
import Pag404 from './components/Pag404'
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}>
            <Route index element={<Home />}/>
        </Route>
        <Route path='/criptomonedas' element={<App/>}>
            <Route index element={<Cuadricula/>}/>
            <Route path=':id' element={<CriptoPage/>}/>
        </Route>
            <Route path='*' element={<Pag404 />}/>
    </Routes>
   </BrowserRouter>
)
