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
                            <h3>Abilities</h3>
                            {
                                pokemon.abilities.map((ab) => (
                                    <table>
                                        <tr>
                                            <td>
                                                ability:
                                            </td>
                                            <td>
                                                {ab.ability.name}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                slot
                                            </td>
                                            <td>
                                                {ab.slot}
                                            </td>
                                        </tr>
                                    </table>
                                )

                                )
                            }
                            <h3>Foms</h3>
                            {
                                pokemon.forms.map((form) => (
                                    <table>
                                        <tr>
                                            <td>
                                                name
                                            </td>
                                            <td>
                                                {form.name}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                url
                                            </td>
                                            <td>
                                                {form.url}
                                            </td>
                                        </tr>
                                    </table>
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