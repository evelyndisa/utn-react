import Card from './Card'
import data from '../data_tarjetas.json'
import '../css/cardWrapper.css'

export default function CardWrapper() {
    return (
        <div className='wrapper'>
            <h2>Variedad de gatitos</h2>
            <div className='grilla'>
                {data.map(elemento => (
                    <Card key={elemento.id} producto={elemento} />
                ))}
            </div>
        </div>
    )
}