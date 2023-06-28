import './App.css';
import Titulo from './components/Titulo';
import CardWrapper from './components/CardWrapper';
import EjemploEventos from './components/EjemploEventos'
import Contador from './components/Contador';
import Pokemon from './components/Pokemon';

function App() {
  const numeros = [23,34,35,56]
  return (
    <div className="App">
      
      <EjemploEventos />
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
        <Contador />
        <Pokemon/>
      
    </div>
  );
}

export default App;