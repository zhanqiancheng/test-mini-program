export const debounce = (fn, delay = 2000) => {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

export const throttle = (fn, wait = 100) => {
  let lastTime = 0
  const throttledFn = function () {
    const now = Date.now()
    if (now - lastTime > wait) {
      fn.apply(this, arguments)
      lastTime = now
    }
  }
  return throttledFn
}
