import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import HomePage from './HomePage'
import Sidebar from './components/Sidebar'
import PokemonPage from './PokemonPage'
import logo from './pokeball.png'
import { capitalize } from './utils'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pokemon : null,
      sidebar: false
    }

    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  componentDidMount() {
    if (! sessionStorage.getItem('pokemon')) {
      axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
        .then((response) => {
          const pokemon = response.data.results.map(data => {
           return {
             id: data.url.split('/').filter((token => token.length)).pop(),
             url: data.url,
             name: capitalize(data.name)
           }
          })

          sessionStorage.setItem('pokemon', JSON.stringify(pokemon))

          this.setState({ pokemon })
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      const pokemon = JSON.parse(sessionStorage.getItem('pokemon'))

      this.setState({ pokemon })
    }
  }

  toggleSidebar() {
    this.setState(prevState => ({
      sidebar: !prevState.sidebar
    }))
  }

  render() {
    const { pokemon, sidebar } = this.state

    return (
      <Router>
        <div>
          <Sidebar pokemon={pokemon} show={sidebar} changingPokemon={this.toggleSidebar} />
          <div className="md:ml-80">
            <div className="fixed w-full z-20">
              <div className="pin-t bg-white md:hidden relative border-b border-grey-light h-12 flex items-center">
                <div className="absolute pin-l pin-y px-4 flex items-center" onClick={this.toggleSidebar}>
                  <svg className="fill-current w-4 h-4 cursor-pointer text-grey" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </div>
                <a href="/" className="mx-auto inline-flex items-center">
                  <img src={logo} alt="logo" width="50" />
                </a>
                <div className={sidebar ? '' : 'hidden'} onClick={this.toggleSidebar}>
                  <div className="flex items-center absolute pin-r pin-y px-4">
                    <svg className="fill-current w-4 h-4 cursor-pointer text-grey" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 pt-8 w-full max-w-lg mx-auto">
              <Route path="/" exact={true} component={HomePage} />
              <Route path="/pokemon/:id" component={PokemonPage} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
