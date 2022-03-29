const raf = require('random-access-file')
const Chainstore = require('@web4/chainstore-legacy')
const join = require('path').join

module.exports = function defaultChainstore (storage, opts) {
  if (isChainstore(storage)) return storage
  
  switch (typeof storage) {
    case 'function': return new Chainstore(path => storage(path), opts)
    case 'string': return new Chainstore(path => raf(join(storage, path), opts))
    default:
      throw new Error('bitdrive expects "storage" of type function|string, but got ' + typeof storage)
  }
}

function isChainstore (storage) {
  return storage.default && storage.get && storage.replicate && storage.close
}
