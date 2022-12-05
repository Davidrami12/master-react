import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className="logo">
            <span>D</span>
            <h3>David Ramírez Rodríguez</h3>
        </div>
        
        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio" className={({isActive}) => isActive == true ? "active" : ""}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/portafolio" className={({isActive}) => isActive == true ? "active" : ""}>Portafolio</NavLink>
                </li>
                <li>
                    <NavLink to="/servicios" className={({isActive}) => isActive == true ? "active" : ""}>Servicios</NavLink>
                </li>
                <li>
                    <NavLink to="/curriculum" className={({isActive}) => isActive == true ? "active" : ""}>Curriculum</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto" className={({isActive}) => isActive == true ? "active" : ""}>Contacto</NavLink>
                </li>
                
            </ul>
        </nav>
    </header>
  )
}
