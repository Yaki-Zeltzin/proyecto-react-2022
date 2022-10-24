import { NavLink } from "react-router-dom";
import "./Menu.css"

const Menu = () => {
    return (
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Menú</NavLink></li>
                <li><NavLink to="/criptomonedas">Lista de Criptos</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu;