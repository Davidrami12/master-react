import logo from './logo.svg';
import './App.css';
import { PruebasComponents } from './components/PruebasComponents';
import { AjaxComponent } from './components/AjaxComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <PruebasComponents/>
        
        <AjaxComponent/>
      </header>
    </div>
  );
}

export default App;
