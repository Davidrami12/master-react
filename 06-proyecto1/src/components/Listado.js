import React, { Fragment, useEffect, useState } from 'react'

export const Listado = () => {

    // const [listadoState, setListadoState] = useState([]) //lo inicializamos a un array vacío
    
    useEffect(() => {
        console.log("Componente del listado de películas")
        conseguirPeliculas()
    }, [])

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"))
        console.log(peliculas)

        setListadoState(peliculas)
    }

    

  return (
    <Fragment>
        {listadoState != null ?
            listadoState.map( peli => {
                return(
                    <article key={peli.id} className="peli-item">
                        <h3 className="title">{peli.titulo}</h3>
                        <p className="description">{peli.descripcion}.es</p>

                        <button className="edit">Editar</button>
                        <button className="delete">Borrar</button>
                    </article>
                );
            })
        : <h2> ¡Todavía no hay películas para mostrar! Añade alguna para mostrar</h2>
        }
        
    </Fragment>
  )
}
