import React from 'react'
import PokemonType from './PokemonType'
import { capitalize } from '../utils'

const PokemonCard = (props) => (
  <div className="max-w-sm overflow-hidden shadow-lg">
    <img className="w-full" src={'https://img.pokemondb.net/artwork/' + props.pokemon.name + '.jpg'} alt="{props.pokemon.name}" />
    <div className="px-6 py-4 border-t-2">
      <div className="font-bold text-xl mb-2">{capitalize(props.pokemon.name)} #{props.pokemon.id}</div>
      <p className="text-grey-darker text-base">
        <b>{capitalize(props.pokemon.name)}</b> is a Pokemon that weights <b>{props.pokemon.weight}</b> pounds. Its base experience is <b>{props.pokemon.base_experience}</b> points.
      </p>
    </div>
    <div className="px-6 py-4">
      {
        props.pokemon.types.map(type => (<PokemonType key={type.slot} type={type} />))
      }
    </div>
  </div>
)

export default PokemonCard