import React, { useEffect, useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [nombre, setNombre] = useState("") // por defecto no va a tener ningún nombre de gestor
    // const gestorInput = useRef()

    const asignarGestor = e => {
        setNombre(e.target.value)
    }

    useEffect(() => {

    })

  return (
    <div>
        <h1>Nombre del gestor: {nombre}</h1>
        <input type="text" onChange={asignarGestor} placeholder="Introduce el nombre del gestor"/>
        
        <h2>Listado de empleados:</h2>
        <p>Los usuarios son gestionados por {nombre} vienen de jsonplaceholder...</p>
        <Empleados/>
    </div>
  )
}
