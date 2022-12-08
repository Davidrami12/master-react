import React from 'react'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'

export const Listado = ({articulos, setArticulos}) => {

  const eliminar = async(id) => {
    let {datos} = await Peticion(Global.url+"articulo/"+id, "DELETE")
    
    if(datos.status === "success"){
      //Actualizar listado de artículos
      let articulosActualizados = articulos.filter(articulo => articulo._id !== id)
      setArticulos(articulosActualizados)
    }
  }

  return (
    articulos.map(articulo => {
        return (
          <article key={articulo._id} className="articulo-item">
            <div className='mascara'>
              {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen} />}
              {articulo.imagen == "default.png" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" />}
            </div>
            <div className='datos'>
              <h3 className="title">{articulo.titulo}</h3>
              <p className="description">{articulo.contenido}</p>

              <button className="edit">Editar</button>
              <button className="delete" onClick={() => {
                eliminar(articulo._id)
              }}>Borrar</button>
            </div>
          </article>
        )
        })
  )
}
