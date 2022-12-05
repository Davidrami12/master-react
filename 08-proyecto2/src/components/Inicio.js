import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy <strong>David Ramírez</strong> y soy Desarrollador FullStack en Madrid, 
        y ofrezco mis servicios de <strong>programación y desarrollo</strong> en todo 
        tipo de proyectos web.
      </h1>
      <h2>
        Como programador web puedo ofrecer a la empresa crear su sitio o aplicación web,
        tener más visibilidad y relevancia en Internet. <Link to="/contacto">Contacta conmigo.</Link>
      </h2>
      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos:</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>
        
        <div className='works'>

        </div>
      </section>
    </div>
  )
}
