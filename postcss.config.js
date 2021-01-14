const tailwindcss = require('tailwindcss')
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'
const plugins = [tailwindcss]

if (!IS_DEVELOPMENT) {
  const purgecss = require('@fullhuman/postcss-purgecss')

  const TailwindExtractor = content => {
    return content.match(/[A-z0-9-:\/]+/g) || []
  }

  plugins.push(
    purgecss({
      content: ['src/**/*.njk', 'src/**/*.pcss'],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['njk']
        }
      ]
    })
  )
}

module.exports = {
  plugins
}