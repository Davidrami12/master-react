import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>PANEL DE CONTROL</h1>
        <p>Elige una de estas opciones</p>
        <nav>
            <ul>
                <li>
                    <NavLink to="/panel/inicio">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/crear-articulos">Crear artículos</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/gestion-usuario">Gestión usuario</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/acerca-de">Acerca de</NavLink>
                </li>
            </ul>
        </nav>
        <div>
            {/* Aquí cargo los componentes de las subrutas o rutas anidadas */}
            <Outlet />
        </div>
    </div>
  )
}
