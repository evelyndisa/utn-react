import './App.css';
import Titulo from './components/Titulo';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
        <Titulo
        nombre='eve'
        />
        <Card/>
    </div>
  );
}

export default App;