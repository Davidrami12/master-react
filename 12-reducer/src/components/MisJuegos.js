import React, {useEffect, useReducer} from 'react'
import { JuegoReducer } from '../reducers/JuegoReducer'

const init = () => {
    return JSON.parse(localStorage.getItem("juegos")) || [];
}

export const MisJuegos = () => {

    const [juegos, dispatch] = useReducer(JuegoReducer, [], init)
    
    useEffect(() => {
        localStorage.setItem("juegos", JSON.stringify(juegos))
    }, [juegos])

    const conseguirDatosForm = e => {
        e.preventDefault()

        let juego = {
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value
        }
        
        console.log(juego)

        const accion = {
            type: "crear",
            payload: juego
        }

        dispatch(accion)

        console.log(juegos)

    }

    const borrarJuego = id => {
        const accion = {
            type: "borrar",
            payload:id
        }

        dispatch(accion)
    }

    const editarJuego = (e, id) => {
        
        let juego = {
            id,
            titulo: e.target.value,
            descripcion: e.target.value
        }

        const accion = {
            type: "editar",
            payload: juego
        }

        dispatch(accion)
    }

  return (
    <div>
        <h1>Estos son mis videojuegos</h1>
        <p>Número de videojuegos: {juegos.length}</p>
        <ul>
            {
                juegos.map(juego => (
                    <li key={juego.id}>
                        {juego.titulo}
                        &nbsp;<button onClick={ e => borrarJuego(juego.id)}>X</button>
                        <input type="text" onKeyDown={ e => editarJuego(e, juego.id)} />
                    </li>
                ))
            }
        </ul>

        <h3>Agregar juego</h3>
        <form onSubmit={conseguirDatosForm}>
            <input type="text" name="titulo" placeholder='Título'/>
            <br/>
            <textarea name="descripcion" placeholder='Descripción'></textarea>
            <br/>
            <input type="submit" value="Guardar"/>
        </form>
    </div>
  )
}
