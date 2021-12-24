
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-collapse-pane.cjs.production.min.js')
} else {
  module.exports = require('./react-collapse-pane.cjs.development.js')
}
