import React, { useId } from 'react'

export const MiComponente = () => {

    const id = useId()

  return (
    <div>
        <h1>Hook useID</h1>
        <input id={id} name="nombre" placeholder="Nombre" />
    </div>
  )
}
