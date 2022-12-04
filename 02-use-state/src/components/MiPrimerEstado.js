import React, {useState} from 'react'

export const MiPrimerEstado = () => {

    const [nombre, setNombre] = useState("David Ramírez");
    
    const cambiarNombre = (e,nombreFijo) => {
        setNombre(nombreFijo)
        console.log(e.target)
    }
  
  return(
    <div>
      <h3>Componente: MiPrimerEstados</h3>
      <strong>
           {nombre}
      </strong>
      
      &nbsp;
      <button onClick={ e => cambiarNombre(e, "Isaías") }>Cambiar nombre</button>
      
      &nbsp;
      <input type="text" placeholder="Cambia el nombre" onKeyDown={e => cambiarNombre(e, e.target.value)}/>
      
    </div>
    )
}
