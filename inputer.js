const readline = require('readline')

// note: empty objects are past to act: for later population, so this list can be at the top of the file.
const instructions = {
  x: { cmd: 'x', nic: 'exit', als: ['x', 'exit', 'stop'], act: {} },
  m: { cmd: 'm', nic: 'message', als: ['prompt', 'message'], act: {} },
  h: { cmd: 'h', nic: 'help', act: () => help() },
}

const action = (inputLine) => {
  const {cmd, line } = commandDetector(inputLine)
  if (instructions[cmd]) instructions[cmd].act(line)
  return `${cmd} ${line}`
}

const commandDetector = (inputLine) => {
  const lineArray = inputLine.split(' ')
  const cmd = lineArray.shift()
  const line = lineArray.join(' ')
  return { cmd, line }
}

const help = () => {
  for (let i in instructions) {
    const { cmd, nic, als } = instructions[i]
    console.info(`${cmd}: ${nic}`)
  }
}

const aliasConstructor = () => {
  for (const i in instructions) {
    const ins = instructions[i]
     for (const a in ins.als) {
      const al = ins.als[a]
      instructions[al] = { cmd: al, nic: ins.nic, act: ins.act }
    }
  }
}

const buildsDefaultInstructionsActs = (rl) => {
  instructions.x.act = () => { rl.close() }
  instructions.m.act = (line) => console.info(line)
}

const implementsUserInstructions = (cmds) => {
  for (let i in cmds) { instructions[cmds[i].cmd] = cmds[i] }
}

exports.run = (cmds) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  buildsDefaultInstructionsActs(rl)
  aliasConstructor()  

  rl.on('line', (inputLine) => {
    line = action(inputLine)
  })
  if (cmds) { implementsUserInstructions(cmds) }
}

exports.cmd = (inputLine) => {
  action(inputLine)
}

exports.stop = () => instructions.stop.act()