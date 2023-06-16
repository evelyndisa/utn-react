import { useState } from "react";

export default function Contador (){
/*
    informacion general: 
        -cantidad
        -precio unitario
        -total

    info fija:
        -precio unitario

    predeterminados:
        -cantidad: 0
        -precio unitario:500
        -total: 0

*/
    const precioUnitario = 500;

    const sumar = ()=>{
        setCantidad(cantidad + 1)
    }
    const restar = ()=>{
        if(cantidad > 0){
            setCantidad(cantidad - 1)
        }
    }

    const [cantidad, setCantidad] = useState(1)

    return(
        <div>
            <p>Precio unitario: ${precioUnitario}</p>
            <div>
                <button onClick={restar}>Restar -</button>
                <p>{cantidad}</p>
                <button onClick={sumar}>Sumar +</button>
            </div>
            <p>Total: ${cantidad * precioUnitario}</p>
        </div>
    )
}