import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = "Editar película"

    const guardarEdicion = (e, id) => {
        
        e.preventDefault();

        // Conseguir el target del evento
        let target = e.target

        // Buscar el índice del objeto a actualizar
        const pelis_almacenadas = conseguirPeliculas()
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id) // devuelve true o false

        // Crear objeto con ese índice, título y descripción del formulario editar
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        // Actualizar el elemento con ese índice
        pelis_almacenadas[indice] = peli_actualizada

        // Guardar el nuevo array de objetos en el LocalStorage
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas)) // el nuevo objeto sobrescribe al anterior

        // Actualizar estados
        setListadoState(pelis_almacenadas)
        setEditar(0) // 0 para que cierre el formulario


    }



  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}: {peli.titulo}</h3>
        <form onSubmit={ e => guardarEdicion(e, peli.id)}>
            <input type="text" name="titulo" className="titulo_editado" defaultValue={peli.titulo} />
            <textarea name="descripcion" className="descripcion_editada" defaultValue={peli.descripcion}/>
            <input type="submit" className="editar" value="Actualizar"/>
        </form>
    </div>
  )
}
