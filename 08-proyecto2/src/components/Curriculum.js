import React from 'react'

export const Curriculum = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Currículum</h1>

      <section className='services'>
        <article className='service'>
          <h2>Experiencia</h2>
          <ul>
            <li>1 año de experiencia trabajando en Indra Sistemas como QA Tester</li>
          </ul>
        </article>

        <article className='service'>
          <h2>Conocimientos</h2>
          <h3>Front-End</h3>
          <ul>
            <li>HTML 5</li>
            <li>CSS 3 y Sass</li>
            <li>Bootstrap</li>
          </ul>
          <h3>Back-End</h3>
          <ul>
            <li>Java</li>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>MySQL y PHPMyAdmin</li>
          </ul>
        </article>

        <article className='service'>
          <h2>Educación</h2>
          <ul>
            <li>Desarrollo de Aplicaciones WEB</li>
            <li>Master en React</li>
          </ul>
        </article>

        <article className='service'>
          <h2>Proyectos personales</h2>
          <ul>
            <li>Trabajo de Fin de Grado (DAW) en 2022 - AulaVirtual</li>
          </ul>
        </article>

      </section>
    </div>
  )
}
