import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusquedaState] = useState('')
  const [noEncontrado, setNoEncontrado] = useState(false) // Por defecto sí habrá una coincidencia

    const buscarPeli = (e) => {
      // Crear estado y actualizarlo
      setBusquedaState(e.target.value)

      // Filtrar para buscar cualquier coincidencia
      let pelis_encontradas = listadoState.filter(peli => {
        return peli.titulo.toLowerCase().includes(busqueda.toLowerCase())
      })

      // Comprobar si hay un resultado
      if(busqueda.length <= 1 || pelis_encontradas <= 0){
        pelis_encontradas = JSON.parse(localStorage.getItem("pelis"))
        setNoEncontrado(true)
      }else{
        setNoEncontrado(false)
      }

      // Actualizar estado del listado principal con lo que he filtrado
      setListadoState(pelis_encontradas)
    }

  return (
    <div className="search">
        <h3 className="title">Buscador: {busqueda}</h3>
        {(noEncontrado == true && busqueda.length > 1) && (
          <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
        )}  
        
        <form>
            <input type="text" id="search_field" name="busqueda" autoComplete='off' value={busqueda} onChange={buscarPeli}/>
            <button id="search">Buscar</button>
        </form>
    </div>
  )
}
