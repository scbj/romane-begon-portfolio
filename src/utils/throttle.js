/**
 * Creates a throttled function that only invokes func at most once per every wait milliseconds. The func is invoked with the last arguments provided to the throttled function. Subsequent calls to the throttled function return the result of the last func invocation.
 * @param {Function} func The function to throttle
 * @param {Number} limit The number of milliseconds to throttle invocations to
 * @returns {Function} Returns the new throttled function
 */
export function throttle (func, limit) {
  let lastFunc
  let lastRan
  return function () {
    const context = this
    const args = arguments
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(function () {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}
