import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import SayMyName from './components/SayMyName';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <Frase/>
      <SayMyName nome="Gabriel Roberto"/>
    </div>
  );
}

export default App;
