import { useState } from "react"

export default function EjemploEventos () {

    const sumar = ()=>{
        const nuevoNum = num + 10 
        setNum(nuevoNum)
    }

   const [num, setNum] = useState(45)
   const [mostrar, setMostrar] = useState(false)

    return (
        <div>
            <h2>el numero es: {num}</h2>
            <button onClick={sumar}>boton numerico</button>
            <button onClick={()=>{setMostrar(!mostrar)}}>
                Mostrar magia ✨
            </button>
            {mostrar && 
                <p>Esta es la magia 🧙</p>
            }
        </div>
        )
}

const num2 = 10;
function sumar2 (){
    const nuevoNum2 = num2 + 10 
        return nuevoNum2
}
console.log(sumar2())