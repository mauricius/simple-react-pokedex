import React, { Component } from 'react'
import axios from 'axios'

import Spinner from './components/Spinner'
import PokemonCard from './components/PokemonCard'

function fetchPokemon(id) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
}

function fetchPokemonFromStorage(id) {
  const key = `pokemon.${id}`

  if (! sessionStorage.getItem(key)) {
    return fetchPokemon(id)
      .then((response) => {
        sessionStorage.setItem(key, JSON.stringify(response.data))

        return new Promise((resolve, reject) => {
          resolve(response.data)
        });
      });
    } else {
      const pokemon = JSON.parse(sessionStorage.getItem(key))

      return new Promise((resolve, reject) => {
        resolve(pokemon)
      });
    }
}

class PokemonPage extends Component {

  state = {
    id: null,
    pokemon : null
  }

  componentDidMount() {
    const id = this.props.match.params.id

    fetchPokemonFromStorage(id)
      .then((pokemon) => {
        this.setState({ id, pokemon })
      })
      .catch(error => {
        console.log(error)
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.state.id) {
      const id = nextProps.match.params.id

      this.setState({ pokemon: null })

      fetchPokemonFromStorage(id)
        .then((pokemon) => {
          this.setState({ id, pokemon })
        });
    }
  }

  render() {
    const { pokemon } = this.state

    return (
      <div className="p-4 p-10 flex justify-center">
        {
          pokemon
          ? (
            <PokemonCard pokemon={pokemon} />
          )
          : (
            <Spinner />
          )
        }
      </div>
    );
  }
}

export default PokemonPage