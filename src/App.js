import './App.css';
import Titulo from './components/Titulo';
import CardWrapper from './components/CardWrapper';

function App() {
  const numeros = [23,34,35,56]
  return (
    <div className="App">
        <Titulo
        nombre='eve'
        />
        <CardWrapper />

        {numeros.map(numero => {
        const precio = numero * 0.9;
        const id = Math.random()

        return (
          <p key={id}>El precio con 10% off es: {precio}</p>
        )
      })}
    </div>
  );
}

export default App;