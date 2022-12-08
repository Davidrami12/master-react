import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Peticion } from '../../helpers/Peticion'
import { Global } from '../../helpers/Global'
import { Listado } from './Listado'

export const Articulo = () => {

  const [articulo, setArticulo] = useState({})
  const [cargando, setCargando] = useState(true)
  const params = useParams()

  useEffect(() => {
    conseguirArticulo()
  }, [])

  const conseguirArticulo = async () => {

    const { datos, cargando } = await Peticion(Global.url + "articulo/" + params.id, "GET")

    if (datos.status === "success") {
      setArticulo(datos.articulo)
    }
    setCargando(false)

  }

  return (
    <div className='jumbo'>
      {cargando ? "Cargando..." :
        <>
          <div className='mascara'>
            {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen} />}
            {articulo.imagen == "default.png" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" />}
          </div>
          <h1>{articulo.titulo}</h1>
          <span>{articulo.fecha}</span>
          <p>{articulo.contenido}</p>
        </>

      }
    </div>
  )
}
