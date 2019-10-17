const ticker = require('./ticker.js')

let updated = 0

const updateFunction = () => {
  updated++
  console.log('tick ', ticker.ticks())
}

ticker.start(updateFunction)

setTimeout(() => {ticker.stop(); console.log(`updated ${updated} times`)}, 5000)

console.log('ticker has started')

