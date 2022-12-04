import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { EjercicioComponents } from './components/EjercicioComponents';

function App() {

  const fecha = new Date();
  const yearActual = fecha.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>El estado en React - Hook useState</h1>
        <MiPrimerEstado/>
        <hr/>
        <EjercicioComponents year={yearActual}/>
      
      </header>
    </div>
  );
}

export default App;
