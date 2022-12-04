import React, {useState} from 'react'
import propTypes from "prop-types"

export const EjercicioComponents = ({year}) => {

    const [yearNow, setYearNow] = useState(year);
    
    const siguiente = e => {
        setYearNow(yearNow+1)
    }
    
    const anterior = e => {
        setYearNow(yearNow-1)
    }
    
    const cambiarYear = e => {
        let dato = parseInt(e.target.value);
        
        if(Number.isInteger(dato)){
            setYearNow(dato);
        }else{
            setYearNow(year)
        }
    }

  return (
    <div>
        <h2>Ejercicio con Eventos y useState</h2>
        <strong>
            {yearNow}
        </strong>
        <p>
            <button onClick={siguiente}>SIGUIENTE</button>
            &nbsp;
            <button onClick={anterior}>ANTERIOR</button>
        </p>
        <p>Cambiar año:</p>
        <input type="text" onChange={cambiarYear} placeholder='Cambiar el año'/>
    </div>
  )
}

EjercicioComponents.propTypes = {
    year: propTypes.number.isRequired
}
