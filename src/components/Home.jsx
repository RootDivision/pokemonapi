import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {
  const [pokemons, setPokemons] = useState()
  const [newPokemonName, setNewPokemonName] = useState()
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(url)
      const json = await response.json()
      setPokemons(json)
    }

    fetchPokemons()
  }, [url])

  const nextPage = () => {
    setUrl(pokemons.next)
  }

  const prevPage = () => {
    setUrl(pokemons.next)
  }

  const deletePokemon = (name) => {
    const { results } = pokemons

    // results is mijn array met pokemons
    // ik ga hier een filter functie op toepassen, om 1 pokemon te verwijderen.
    // array.Filter maakt een copy je array, wist items uit je array en geef een array terug

    const newResults = results.filter((pokemon) => {
      // hier moet je controleren welke waarde je wil wissen.
      // wij willen bulbasaur wissen.
      // dus moeten pokemon.name vergelijken met "bulbasaur"
      // als het bulbasaur is, moet die weg.
      // maw, true blijft in de array, en false verwijdert uit de array
      // je moet dus een true / false returnen
      if (pokemon.name === name) {
        return false
      }
      return true
    })

    // we updaten de state terug met onze nieuwe results
    // pokemons is een object, en in het object zit de array results
    // we moeten dus eerst ons origineel object terug erinsteken
    // daarna vervangen we results

    setPokemons({ ...pokemons, results: newResults })
  }


  const handleName = (event) => {
    // event komt uit mijn textInput, daar stuur ik mijn event door.
    // ik gebruik event.target.name om de naam van het element bij te houden
    // event.target.value gebruik ik om de inhoud van het textInput door te geven

    // ik zet de inhoud van textInput in mijn state
    setNewPokemonName(event.target.value)
  }

  const addPokemon = () => {
    // de newPokemon name die ik in handleName in state heb gezet, moet ik nu toevoegen aan mijn array pokemon.results
    // results.push( { name: 'blastoise', url: 'www.google.be' })

    const { results } = pokemons
    const newResults = [...results, { name: newPokemonName, url: 'www.google.be' }]

    // ik zet mijn nieuwe results, in pokemon.results
    // ... heet spread operator, dus alles wat in pokemons zit, steek je opnieuw in het object
    // results vervang je met de NEW results
    setPokemons({ ...pokemons, results: newResults })
  }

  return (
    <>
      <h1>Pokemon</h1>
      {
        pokemons ? (
          <table>
            {
              pokemons.results.map(
                ({ name }) => (
                  <tr key={name}>
                    <td><Link to={name}>{name}</Link></td>
                    <td><a href={url}>{url}</a></td>
                    <td><button onClick={() => deletePokemon(name)}> - </button></td>
                  </tr>
                )
              )
            }
          </table>
        ) : (
          <p>
            bezig met laden
          </p>
        )
      }

      <div>
        <button onClick={() => prevPage()}>Prev</button>
        <button onClick={() => nextPage()}>Next</button>
      </div>




      <div>
        <h3>Add Pokemon</h3>
        <label>
          Name:
          <input name="name" onChange={(event) => handleName(event)} />
        </label>
        <label>
          url:
          <input name="url" />
        </label>

        <button onClick={() => addPokemon()}>Add</button>

      </div>

    </>
  )
}

export default Home
