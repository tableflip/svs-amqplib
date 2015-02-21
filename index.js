var createGetChannel = require('./channel')
var reconnect = require('./reconnect')

module.exports = function (url) {
  return {
    getChannel: createGetChannel(url),
    reconnect: reconnect
  }
}
