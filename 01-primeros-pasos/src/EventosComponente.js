import React from 'react'

export const EventosComponente = () => {

  const hasDadoClick = (e) => {
    alert("Has dado click al botón !");
  } 
  
  function hasDadoDobleClick(e){
    alert("Has dado docle click")
  }

  return (
    <div>
        <h1>Eventos en React</h1>
        <p>
            {/*Evento click*/}
            <button onClick={ hasDadoClick }>Dame click</button>
        </p>
        <p>
            {/*Evento doble click*/}
            <button onDoubleClick={ hasDadoDobleClick }>Dame doble click</button>
        </p>
        
    
    </div>
  )
}
