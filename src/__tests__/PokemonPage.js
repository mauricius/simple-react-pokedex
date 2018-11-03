import React from 'react'
import ReactDOM from 'react-dom'
import PokemonPage from '../PokemonPage'
import moxios from 'moxios'
import { shallow } from 'enzyme'

describe('test PokemonPage', function () {

  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  const pokemon = {
    id: 1,
    name: 'bulbasaur',
    types: []
  }

  it('is should fetch the pokemon from APIs if not in sessionStorage', () => {
    const match = {
      params : {
        id: 1
      }
    }

    moxios.wait(function () {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: {
          results: pokemon
        }
      }).then(function () {
        expect(sessionStorage.key('pokemon.1')).toBeTruthy()
        done()
      })
    })

    const div = document.createElement('div')
    ReactDOM.render(<PokemonPage match={match} />, div)
  })

  it('is should fetch the pokemon from sessionStorage if it is present', () => {
    const match = {
      params : {
        id: 1
      }
    }

    sessionStorage.setItem('pokemon.1', JSON.stringify(pokemon))

    moxios.wait(function () {
      expect(moxios.requests.count()).toBe(0)
      done()
    })

    const div = document.createElement('div')
    ReactDOM.render(<PokemonPage match={match} />, div)
  })
})
