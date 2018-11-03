## Simple Pokédex

Inspired by [this Gist](https://gist.github.com/solilokiam/7b5ea2f9d22103c4bbf689ffce332633) and [Pokédex.org](https://github.com/nolanlawson/pokedex.org). This is a very simple version of a Pokédex build with [React](https://reactjs.org/) and [Tailwind.css](https://tailwindcss.com/).

I decided to use the RESTful Pokémon API instead of the Marvel API because it doesn't require registration.

### Stack

* [create-react-app](https://github.com/facebook/create-react-app)
* [react-router](https://reacttraining.com/react-router/)
* [axios](https://github.com/axios/axios)
* [Pokéapi](https://pokeapi.co/) - The RESTful Pokémon API
* [img.pokemondb](https://img.pokemondb.net)
* [tailwind.css](https://github.com/tailwindcss/tailwindcss)

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`

Launches the test runner in the interactive watch mode.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

#### `npm run tailwind:normalize`

`tailwind build src/normalize.src.css -o public/normalize.css`

Uses the Tailwind CLI tool to process the [normalize CSS](https://github.com/tailwindcss/tailwindcss/blob/master/css/preflight.css) in the `public` folder.

#### `npm run tailwind`

`tailwind build src/App.css -o src/index.css`

Uses the Tailwind CLI tool to process the Application CSS in the `public` folder.

#### `npm run purgecss`

Finally uses [PurgeCSS](https://www.purgecss.com/) to remove unused CSS from the Tailwind build for a lighter file.

### License

[MIT license](LICENSE)