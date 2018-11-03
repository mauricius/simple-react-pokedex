import React from 'react'

const PokemonType = (props) => (
  <span className="inline-block bg-grey-lighter border border-grey rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{props.type.type.name}</span>
)

export default PokemonType
