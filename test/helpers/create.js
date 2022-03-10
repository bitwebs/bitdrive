var ram = require('random-access-memory')
var Bitdrive = require('../../')

module.exports = function (key, opts) {
  if (key && !(key instanceof Buffer)) {
    opts = key
    key = null
  }
  return new Bitdrive((opts && opts.chainstore) || ram, key, opts)
}
