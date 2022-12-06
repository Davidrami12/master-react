import React, { useEffect, useLayoutEffect } from 'react'

export const EjemeploComponents = () => {

    {/* useLayoutEffect se ejecuta antes de que se pinte nada por pantalla y el useEffect se ejecuta después de pintar por pantalla*/}
    let caja = document.querySelector("#caja")

    useLayoutEffect(() => {
      console.log("useLayoutEffect: Componente cargado !!!")  
      console.log(caja.getBoundingClientRect())
    }, [])

    useEffect(() => {
        console.log("useEffect: Componente cargado !!!")
        console.log(caja.getBoundingClientRect())
    }, [])

  return (
    <div>
        <h1>Ejemplo </h1>
        <div id="caja"></div>
    </div>
  )
}
