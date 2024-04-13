import React from 'react'
import "./Navbar.css"
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink>Inicio</NavLink></li>
                    <li><NavLink>La biblioteca</NavLink></li>
                    <li><NavLink>Catálogo</NavLink></li>
                    <li><NavLink>Proyectos</NavLink></li>
                    <li><NavLink>Contacto</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar