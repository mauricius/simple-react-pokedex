import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import moxios from 'moxios';

describe('test App', function () {

  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('fetches the list of pokemon', () => {
    moxios.wait(function () {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: {
          results: []
        }
      }).then(function () {
        expect(sessionStorage.key('pokemon')).toBeTruthy()
        done()
      })
    });

    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
