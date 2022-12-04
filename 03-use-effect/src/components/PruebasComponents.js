import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent'

export const PruebasComponents = () => {

    const [usuario, setUsuario] = useState("David Ramírez")
    const [fecha, setFecha] = useState("01-01-1900")
    const [contador, setContador] = useState(0)

    const modUsuario = e => {
        setUsuario(e.target.value)
        console.log("Ha habido un cambio en usuario")
    }

    //este useEffect solo se ejecuta una vez por el []
    useEffect(() => {
        console.log("Has cargado el componente PruebasComponent!!")
    }, []) //se ejecuta una vez porque le paso el array vacío

    //este useEffect solo se ejecuta si cambio el usuario
    useEffect(() => {
        console.log("Has cargado el componente PruebasComponent!!")
        setContador(contador+1)
        console.log("Has modificado el usuario:"+contador)
    }, [usuario]) //se ejecuta cuando se cambia el usuario

  return (
    <div>
        <h1>El efecto - Hook useEffect</h1>
        <strong className={contador >= 10 ? 'label label-green' : 'label'}>{usuario}</strong>

        <form>
            <input type="text" onChange={modUsuario} placeholder="Cambia el nombre"/>
        </form>
        {usuario == "DAVID" && <AvisoComponent/>}

    </div>
  )
}
