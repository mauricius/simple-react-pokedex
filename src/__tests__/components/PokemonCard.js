import React from 'react'
import PokemonCard from '../../components/PokemonCard'
import renderer from 'react-test-renderer'

describe('test PokemonCard component', function () {

  it('renders correctly', () => {
    const pokemon = {
      id: 1,
      name: 'Bulbasaur',
      weight: 56,
      base_experience: 44,
      types: []
    }

    const component = renderer
      .create(<PokemonCard pokemon={pokemon} />)
      .toJSON()

    expect(component).toMatchSnapshot()
  });
});
