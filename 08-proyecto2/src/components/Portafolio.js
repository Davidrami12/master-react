import React from 'react'
import { trabajos } from '../data/trabajos'
import { Link } from 'react-router-dom'

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>
      {
        trabajos.map(trabajo => {
          return(
            <article key={trabajo.id}>
              <span>{trabajo.categorias}</span>
              <h2><Link to={"/https://github.com/Davidrami12"}>{trabajo.nombre}</Link></h2>
              <a href={"https://github.com/Davidrami12"}>Ir al proyecto</a>
              <h3>{trabajo.tecnologias}</h3>
            </article>
          )
          
        }) 
      }
    </div>
  )
}
