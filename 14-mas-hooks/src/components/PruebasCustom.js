import React, { useState } from 'react'
import { useMayus } from '../hooks/useMayus'

export const PruebasCustom = () => {

    const {estado, mayusculas, minusculas, concatenar} = useMayus("David Ramírez")

  return (
    <div>
        <h1>Probando componentes personalizados</h1>
            <h2>{estado}</h2>

        <button onClick={ mayusculas }>Poner en mayúsculas</button>
        <button onClick={ minusculas }>Poner en minúsculas</button>
        <button onClick={ e => concatenar("- Probando Hooks Personalizados") }>Concatenar</button>
    </div>
  )
}
