const ticker = require('./ticker.js')
const inputer = require('./inputer.js')

let updated = 0
let coolThings = []

const end = () => {
  ticker.stop()
  inputer.stop()
}

const updateOnTick = () => {
  // Your game goes here.
  if (coolThings[0]) coolThings[0].bites++
  updated++
  console.log('tick ', ticker.ticks())
}

const newCoolThing = (name) => {
  console.log(`Making new cool thing ${name}`)
  
  coolThings.push({ name, eats: 'cheese', bites: 0 })
}

const coolThingsReport = () => {
  console.info(`Cool Things`)
  console.log(coolThings)
}

inputer.run([
    { cmd: 's', nic: 'stop ticker', act: () => ticker.stop() },
    { cmd: 'x', nic: 'stop both', act: end },
    { cmd: 'r', nic: 'report on update', act: () => console.info(`updated ${updated} times`) },
    { cmd: 't', nic: 'report on cool things', act: () => coolThingsReport() },
    { cmd: 'n', nic: 'new cool thing', act: (name) => newCoolThing(name) }
  ])

inputer.cmd('h')

ticker.start(updateOnTick)

setTimeout(() => { end() }, 10000)

setTimeout(() => inputer.cmd('n barry'), 3000)

setTimeout(() => {inputer.cmd('r')}, 4000 )

setTimeout(() => {inputer.cmd('t')}, 6000)
