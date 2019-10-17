const inputer = require('./inputer.js')

const lineBack = (line) => {
  console.log('lineback', line)  
}

inputer.run([
  { cmd: 'r', nic: 'retreve input line', act: (line) => console.log('line', line)},
  { cmd: 'n', nic: 'user name', act: (line) => console.log('name =', line) }
])

inputer.cmd('m Inputer Active')
inputer.cmd('m --------------')
inputer.cmd('h')
inputer.cmd('m --------------')
inputer.cmd('n Barry', 'enter name')


