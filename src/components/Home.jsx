import { useEffect, useState } from "react"

const Home = () => {
  const [pokemons, setPokemons] = useState()
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')

  const fetchPokemon = async () => {
    const response = await fetch(url)
    const json = await response.json()
    setPokemons(json)
  }

  useEffect(() => {
    fetchPokemon()
  }, [url])

  const nextPage = () => {
    setUrl(pokemons.next)
  }
  
  const prevPage = () => {
    setUrl(pokemons.next)
  }

  return (
    <>
      <h1>Hello World</h1>
      <h1>Pokemon</h1>
      {
        pokemons ? (
          <ul>
            {
              pokemons.results.map((pokemon) => {
                const { name } = pokemon
                return (
                  <li key={name}>{name}</li>
                )
              })
            }
          </ul>
        ) : (
          <p>
            bezig met laden
          </p>
        )
      }

      <div>
        <button onClick={() => prevPage()}>prev</button>
        <button onClick={() => nextPage()}>next</button>
      </div>
    </>
  )
}

export default Home
