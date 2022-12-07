import { useState } from 'react'
import { Articulos } from './components/pages/Articulos'
import { Crear } from './components/pages/Crear'
import { Inicio } from './components/pages/Inicio'
import { Rutas } from './routing/Rutas'


function App() {
  return (
    <div className="layout">

      <Rutas/>

    </div>
  )
}

export default App
