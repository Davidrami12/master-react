import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Login = () => {

  const { usuario, setUsuario } = useContext(PruebaContext)

  const guardarDatos = e => {
    e.preventDefault()

    let usuario_identificado = {
      nick: e.target.nick.value,
      nombre: e.target.nombre.value,
      web: e.target.web.value
    }

    setUsuario(usuario_identificado)

  }

  return (
    <div>
        <h1>Login</h1>
        <p>Página de login</p>

        <form className='login' onSubmit={guardarDatos}>
          <input type="text" name="nick" placeholder='Nickname'/>
          <input type="text" name="nombre" placeholder='Nombre'/>
          <input type="text" name="web" placeholder='web'/>
          <input type="submit" value="Enviar"/>

        </form>
    </div>
  )
}
