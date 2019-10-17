
  let count = 0
  let stop = false

  const main = (func) => {
    count++
    func()
  }

  const running = (func) => {
    main(func)
    if (!stop) setTimeout(() => running(func) , 1000)
  }

  exports.start = (func) => { running(func) }

  exports.stop = () => { stop = true }

  exports.ticks = () => { return count }






