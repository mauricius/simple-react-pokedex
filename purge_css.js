const Purgecss = require('purgecss')
const purgeHtml = require('purgecss-from-html')
const fs = require('fs')
const path = require('path')

const outputDir = path.resolve(__dirname, 'public')

const purgecss = new Purgecss({
  content: [
    'src/App.js', 'src/HomePage.js', 'src/PokemonPage.js', 'src/components/*.js',
    'public/index.html'
  ],
  css: ['src/index.css'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
        }
      },
      extensions: ['js']
    },
    {
      extractor: purgeHtml,
      extensions: ["html"]
    }
  ]
})
const result = purgecss.purge()

result.forEach(out => {
    const filePath = out.file.split('/')
    fs.writeFileSync(`${outputDir}/${filePath[filePath.length - 1]}`, out.css, 'utf-8')
})