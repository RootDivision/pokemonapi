import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
    const params = useParams();
    const { name } = params

    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const [pokemon, setPokemon] = useState()

    useEffect(() => {

        setUrl(name)

        const fetchPokemon = async () => {
            const response = await fetch(url)
            const json = await response.json()
            setPokemon(json)
        }
        fetchPokemon()
    }, [url, name])


    return (
        <>
            <h1>{name}</h1>
            {
                pokemon ?
                    (
                        <>
                            <div>base experience: {pokemon.base_experience}</div>
                            <h3>Abilities</h3>
                            {
                                pokemon.abilities.map((ab) => (
                                    <>
                                        <p>ability: {ab.ability.name}</p>
                                        <p>ability: {ab.slot}</p>
                                    </>
                                )

                                )
                            }
                            <h3>Foms</h3>
                            {
                                pokemon.forms.map((form) => (
                                    <>
                                        <p>name: {form.name}</p>
                                        <p>url: {form.url}</p>
                                    </>
                                )
                                )
                            }
                        </>
                    )
                    : (
                        <div>Loading...</div>
                    )

            }


        </>
    )
}

export default PokemonDetail;