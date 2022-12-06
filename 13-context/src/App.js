import './App.css';
import { useState, useEffect } from 'react';
import { AppRouter } from './routing/AppRouter';
import { PruebaContext } from './context/PruebaContext'

function App() {

  const [usuario, setUsuario] = useState({})

  useEffect(() => {
    // La primera vez que se cargue el componente
    let usuario_local = JSON.parse(localStorage.getItem("usuario"))
    setUsuario(usuario_local)
  }, [])

  useEffect(() => {
    // Cada vez que se actualice el estado usuario se guarda en el localStorage
    localStorage.setItem("usuario", JSON.stringify(usuario))
  }, [usuario])

  const curso = {
    id: 1,
    titulo: "Máster en React",
    contenido: "Muchas horas de contenido",
  }

  return (
    <div className="App">
        <PruebaContext.Provider value={{
          usuario,
          setUsuario
        }}>
          <AppRouter />
        </PruebaContext.Provider>
    </div>
  );
}

export default App;
