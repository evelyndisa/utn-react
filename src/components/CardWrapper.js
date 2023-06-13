import Card from './Card'
import '../css/cardWrapper.css'

export default function CardWrapper () {
    const product = {
        imagen: "imagenes/gatitos.webp",
        titulo: 'Fotos de Chipannoli',
        descripcion: 'Descripcion de las fotos de Chipannoli',
        precio: 94629,
        envio: true
    }
    return (
        <div className='wrapper'>
            <h2>Variedad de gatitos</h2>
            <div className='grilla'>

            {/*producto es el nombre del dato que vamos a enviar: objeto producto */}
                <Card producto = {product}/>
            </div>
        </div>
    )
}