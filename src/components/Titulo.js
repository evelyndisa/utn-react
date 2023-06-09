import '../css/title.css'

function Title ({nombre}){
    //const nombre = 'eve';
    return(
        <h1 className='title'>
            Hola desde titulo {nombre}
        </h1>
    )
}

export default Title