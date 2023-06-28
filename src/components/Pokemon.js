import { useEffect, useState } from "react";

export default function Pokemon() {
    const [loading, setLoading] = useState(true);
    // Ya sabemos que va a ser un objeto, asi que de manera predeterminada usamos {}
    const [pokemon, setPokemon] = useState({});

    // Los hooks siempre antes del return
    useEffect(() => {
        // Sacado de mdn, numero entero aleatorio entre X e Y
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }
        const random = (getRandomInt(1,1000))
        



        const endpoint = `https://pokeapi.co/api/v2/pokemon/${random}`;

        fetch(endpoint)
            .then((res) => {
                console.log(res);
                if (res.ok === true) {
                    // Todo ok!
                    res.json()
                        .then((data) => {
                            // Tenemos al Pokemon!
                            console.log(data);
                            // Guardo al pokemon en la memoria de data
                            setPokemon(data)
                            // Seteamos a falso el loading
                            setLoading(false)

                        });
                } else {
                    console.error("Oops,", res.statusText);
                }
            });

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