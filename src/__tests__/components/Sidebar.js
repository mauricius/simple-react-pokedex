import React from 'react'
import { MemoryRouter as Router, withRouter } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'

describe('test Sidebar component', function () {

  it('renders correctly without pokemon', () => {
    const component = renderer
      .create(<Router><Sidebar show={true} /></Router>)
      .toJSON()

    expect(component).toMatchSnapshot()
  })

  it('renders correctly with a list of pokemon', () => {
    const pokemon = [
      {
        id: 1,
        name: 'bulbasaur'
      }, {
        id: 2,
        name: 'ivysaur'
      }
    ]

    const component = renderer
      .create(<Router><Sidebar show={true} pokemon={pokemon} /></Router>)
      .toJSON()

    expect(component).toMatchSnapshot()
  })

  it('renders an empty <Sidebar /> components', () => {
    const wrapper = shallow(<Sidebar show={true} pokemon={[]} />);
    expect(wrapper.contains(<ul></ul>)).toBeTruthy
  })

  it('filters Pokemon on <Sidebar /> component if a query is typed in the search input', () => {
    const pokemon = [
      {
        id: 1,
        name: 'bulbasaur'
      }, {
        id: 2,
        name: 'ivysaur'
      }
    ]

    const wrapper = shallow(<Sidebar show={true} pokemon={pokemon} />);

    expect(wrapper.find('.mb-3').length).toEqual(2)
    wrapper.find('[type="search"]').simulate('change', { target: { value: 'bulba' }})
    expect(wrapper.find('.mb-3').length).toEqual(1)
  })
})
