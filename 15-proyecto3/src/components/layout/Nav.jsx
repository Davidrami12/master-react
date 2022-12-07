import React from 'react'
import  { NavLink } from "react-router-dom"

export const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li><NavLink to="/inicio">Inicio</NavLink></li>
        <li><NavLink to="/articulos">Artículos</NavLink></li>
        <li><NavLink to="/crear-articulos">Crear artículos</NavLink></li>
        <li><NavLink to="/inicio">Contacto</NavLink></li>
      </ul>
    </nav>

  )
}
