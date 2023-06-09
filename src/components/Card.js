import '../css/card.css'

export default function Card () {

    const producto = {
        imagen: "imagenes/gatitos.webp",
        titulo: 'Fotos de Chipannoli',
        descripcion: 'Descripcion de las fotos de Chipannoli',
        precio: 94629,
        envio: true
    }

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