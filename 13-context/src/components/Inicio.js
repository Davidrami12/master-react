import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {

  const {usuario, setUsuario} = useContext(PruebaContext)

  return (
    <div>
        <h1>Inicio</h1>
        <p>Página de inicio</p>
        <p>Nombre: <strong>{usuario.nombre} {usuario.web}</strong></p>
    </div>
  )
}
