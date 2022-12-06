import React, { useContext } from 'react'
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom'
import { Acerca } from '../components/Acerca'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Inicio } from '../components/Inicio'
import { Login } from '../components/Login'
import { PruebaContext } from '../context/PruebaContext'

export const AppRouter = () => {

    const {usuario, setUsuario} = useContext(PruebaContext)

  return (
    <BrowserRouter>
        <header className='header'>
            <nav>
                <div className="logo">
                    <h2>Aprendiendo React Context</h2>
                </div>
                <ul>
                    <li>
                        <NavLink to="/inicio">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/acerca">Acerca de</NavLink>
                    </li>
                    <li>
                        <NavLink to="/articulos">Artículos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto">Contacto</NavLink>
                    </li>
                    
                        {usuario.hasOwnProperty("nick") && usuario.nick !== null ? (
                            <>
                                <li>
                                    <NavLink to="/">{usuario.nick}</NavLink>
                                </li>
                                <li>
                                    <a href="#" onClick={e => {
                                        e.preventDefault();
                                        setUsuario({})
                                    }}>Cerrar sesión</a>
                                </li>
                            </>
                            
                        ):(
                            <li>
                                <NavLink to="/login">Identifícate</NavLink>
                            </li>
                            
                        )}
                    
                </ul>
            </nav>
        </header>

        <section className='content'>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/inicio" element={<Inicio/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path="/acerca" element={<Acerca/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/articulos" element={<Articulos/>}/>
                <Route path="*" element={(<div><h1>ERROR ESTA PÁGINA NO EXISTE</h1></div>)}/>
            </Routes>
        </section>
        
    </BrowserRouter>
  )
}
