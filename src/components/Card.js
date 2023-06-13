import '../css/card.css'



export default function Card ({producto}) {
    // const producto = props.producto
    // const {mensaje} = props
    return (
        <div className="card">
            <img src={producto.imagen} alt="" />
            <div className="card-info">
                <h2>{producto.titulo}</h2>
                <p className='descripcion'>{producto.descripcion}</p>
                <div className="card-info-detalles">
                    <p>${producto.precio}</p>
                    {producto.envio &&
                        <p>Envio gratis!</p>
                    }
                    {!producto.envio &&
                        <p>Envio pago</p>
                    }
                </div>
            </div>
        </div>
    )
}