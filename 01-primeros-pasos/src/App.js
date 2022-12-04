import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>   
        
        <div className='componentes'>
          {/* cargar MiComponente */}
          <MiComponente/>     
          <hr/>
          <SegundoComponente/>
          <hr/>
          <TercerComponente nombre="David" apellidos="Ramírez"/>
          <hr/>
          <EventosComponente/>
        </div>
        
      </header>

    </div>
  );
}

export default App;
