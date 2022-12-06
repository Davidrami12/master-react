import React, { useRef } from 'react'

export const Formulario = () => {

    const nombreValue = useRef()
    const apellidosValue = useRef()
    const correoValue = useRef()

    const miCaja = useRef()

    const mostrar = (e) => {
        e.preventDefault();

        console.log(nombreValue.current.value)
        console.log(apellidosValue.current.value)
        console.log(correoValue.current.value)

        // mi caja
        miCaja.current.innerHTML = "Formulario enviado";

    }
  return (
    <div>
        <h1>Formulario</h1>
        <div ref={miCaja}>
            <h2>Pruebas con useRef</h2>
        </div>
        <form onSubmit={mostrar}>
            <input type="text" placeholder='Nombre' ref={nombreValue}/><br/>
            <input type="text" placeholder='Apellidos' ref={apellidosValue}/><br/>
            <input type="email" placeholder='Correo electrónico' ref={correoValue}/><br/>
            
            <input type="submit" value="Enviar" />
        </form>
    </div>

    )
}
