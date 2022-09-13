import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {
  const [pokemons, setPokemons] = useState()
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(url)
      const json = await response.json()
      setPokemons(json)
    }

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
              pokemons.results.map(
                ({ name }) => (
                  <li>
                    <Link key={name} to={name}>{name}</Link>
                  </li>
                )
              )
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
