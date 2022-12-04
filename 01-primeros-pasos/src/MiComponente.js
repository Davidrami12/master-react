// importar modulos de react / dependencias
import React, {Fragment} from "react";

// funcion del componente
function MiComponente(){
    
    const nombre = "David";
    const web = "victorroblesweb.es";
    
    let usuario = {
        nombre: "David",
        apellidos: "Ramírez Rodríguez",
        web: "victorroblesweb.es"   
    };

    return (
        <div class="mi-componente"> 
          <hr/>
          <h2>Componente creado</h2>
          <h3>Datos del usuario:</h3>
          <ul>
            <li>Nombre: {usuario.nombre}</li>
            <li>Apellidos: {usuario.apellidos}</li>
            <li>Web: {usuario.web}</li>
          </ul>
          <p>Este es mi primer componente</p>
          <ul>
            <li>React</li>
            <li>Angular</li>
            <li>Vue</li>
          </ul>
        </div>
      
    );
}

// export
export default MiComponente;