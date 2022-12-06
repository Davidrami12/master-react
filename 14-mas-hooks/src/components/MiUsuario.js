import React, { useState } from 'react'
import { useAjax } from '../hooks/useAjax'

export const MiUsuario = () => {

    const {datos, cargando} = useAjax()

    const getId = e => {
        let id = parseInt(e.target.value)
        let url = "https://reqres.in/api/users/"+id
        
        getUsuario(url)
    }

  return (
    <div>
        <h1>Mi usuario: </h1>
        <p>Datos del usuario: {usuario?.datos?.first_name} {usuario?.datos?.last_name}</p>
        <input type="number" name="id" onChange={getId} />

    </div>
  )
}
