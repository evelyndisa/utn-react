import { useEffect, useState } from "react";

export default function Pokemon() {
    const [loading, setLoading] = useState(true); 
    const [pokemon, setPokemon] = useState({});


    useEffect(() => {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }
        const random = (getRandomInt(1,1000))
        const endpoint = `https://pokeapi.co/api/v2/pokemon/${random}`;


        // con async habilitamos el uso de promesas
        const fetchPokemon = async () => {
            //fetch(endpoint).then((res) => {
            const res = await fetch(endpoint);
            if (res.ok){
                //res.json().then((data) => {
                    const data = await res.json()
                    setPokemon(data)
                    setLoading(false)
            }
        }
        fetchPokemon()

    }, []);

    if (loading === true) {
        return (
            <h1>Cargando pokemones...</h1>
        )
    }

    return (
        <>
            <h1>Pokemon: {pokemon.name}</h1>
            <p>El peso de {pokemon.name} es {pokemon.weight}kg</p>
            {pokemon.sprites &&
                <img src={pokemon.sprites.front_default} alt="" />
            }
        </>
    )
}