import React from 'react'
import PokemonType from '../../components/PokemonType'
import renderer from 'react-test-renderer'

describe('test PokemonType component', function () {

  it('renders correctly', () => {
    const type = {
      type : {
        name: 'grass'
      }
    }

    const component = renderer
      .create(<PokemonType type={type} />)
      .toJSON()

    expect(component).toMatchSnapshot()
  });
});
