import React, { Fragment, useEffect, useState } from 'react'
import { Editar } from './Editar'

export const Listado = ({listadoState, setListadoState}) => {

    // const [listadoState, setListadoState] = useState([]) //lo inicializamos a un array vacío

    const [editar, setEditar] = useState(0)
    
    useEffect(() => {
        console.log("Componente del listado de películas")
        conseguirPeliculas()
    }, [])

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"))

        setListadoState(peliculas)

        return peliculas
    }

    const borrarPeli = (id) => {

        // Conseguir películas almacenadas
        let pelis_almacenadas = conseguirPeliculas()

        // Filtrar esas películas para que elimine del array la que no quiero
        let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id))
        // el método filter() devuelve un array con los elementos que cumplen la condición

        // Actualizar el estado del listado
        setListadoState(nuevo_array_pelis)


        // Actualizar los datos del LocalStorage
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis))

    }

    

  return (
    <Fragment>
        {listadoState != null ?
            listadoState.map( peli => {
                return(
                    <article key={peli.id} className="peli-item">
                        <h3 className="title">{peli.titulo}</h3>
                        <p className="description">{peli.descripcion}.es</p>

                        <button className="edit" onClick={ () => setEditar(peli.id)}>Editar</button>
                        <button className="delete" onClick={ () => borrarPeli(peli.id)}>Borrar</button>

                        {/*aparece formulario de editar*/}
                        {editar == peli.id &&(
                            <Editar peli={peli} conseguirPeliculas={conseguirPeliculas} setEditar={setEditar} setListadoState={setListadoState} />
                        )}
                    </article>
                );
            })
        : <h2> ¡Todavía no hay películas para mostrar! Añade alguna para mostrar</h2>
        }
        
    </Fragment>
  )
}
