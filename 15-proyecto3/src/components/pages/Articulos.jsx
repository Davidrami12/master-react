import React from 'react'
import { useState, useEffect } from 'react'
import { Peticion } from '../../helpers/Peticion'
import { Global } from '../../helpers/Global'

export const Articulos = () => {

  const [articulos, setArticulos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    conseguirArticulos()
  }, [])

  const conseguirArticulos = async () => {

    const {datos, cargando} = await Peticion(Global.url+"articulos", "GET")

    /*
    let peticion = await fetch(url, {
      method: "GET"
    })

    let datos = await peticion.json()
    */

    if (datos.status === "success") {
      setArticulos(datos.articulos)
    }

    setCargando(false)

  }

  return (
    <>
      {cargando ? "Cargando..." : 
        (
          
            articulos.length >= 1 ? (
              articulos.map(articulo => {
                return (
                  <article key={articulo._id} className="articulo-item">
                    <div className='mascara'>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" />
                    </div>
                    <div className='datos'>
                      <h3 className="title">{articulo.titulo}</h3>
                      <p className="description">{articulo.contenido}</p>
    
                      <button className="edit">Editar</button>
                      <button className="delete">Borrar</button>
                    </div>
                  </article>
                )
                })
          ):(
            <h1>No hay artículos</h1>
          )
        
        )
        }
      
    </>
  )
}
