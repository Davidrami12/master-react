import React from 'react'
import { useState, useEffect } from 'react'
import { Peticion } from '../../helpers/Peticion'
import { Global } from '../../helpers/Global'
import { Listado } from './Listado'
import { useParams } from 'react-router-dom'

export const Busqueda = () => {

  const [articulos, setArticulos] = useState([])
  const [cargando, setCargando] = useState(true)
  const params = useParams()

  useEffect(() => {
    conseguirArticulos()
  }, [])

  useEffect(() => {
    conseguirArticulos()
  }, [params])

  const conseguirArticulos = async () => {

    const { datos, cargando } = await Peticion(Global.url + "buscar/"+params.busqueda, "GET")

    if (datos.status === "success") {
      setArticulos(datos.articulos)
    }

    setCargando(false)

  }

  return (
    <>
      {cargando ? "Cargando..." :
        (
          articulos.length >= 1 ? <Listado articulos={articulos} setArticulos={setArticulos}/> 
          : (<h1>No hay artículos</h1>)
        )
      }
    </>
  )
}
