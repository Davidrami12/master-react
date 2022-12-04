import React from 'react'
import PropTypes from "prop-types";

export const TercerComponente = (props) => {

    console.log(props);


  return (
    <div>
        <h1>Comunicación entre componentes</h1>
        <p>Pasar datos de un componentes a otro usando las props</p>
        <ul>
            <li>{props.nombre}</li>
        </ul>
    </div>
  )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string,
    ficha: PropTypes.object
    
}