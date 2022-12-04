import React from 'react'

export const AvisoComponent = () => {
  return (
    <div>
        <hr/>
        <h3>Saludos !!</h3>
        <button onClick={e => {
            alert("Bienvenido")
        }}>Mostrar alerta</button>

    </div>
  )
}
