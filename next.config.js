const debug = process.env.NODE_ENV !== 'production'
const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')

module.exports = withNextra({
  assetPrefix: !debug ? '/' : '',
})
