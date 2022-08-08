Array.prototype.flat = function flat(dep = 1, result = []) {
  let self = this
  self.forEach(arr => {
    if (Array.isArray(arr) && dep > 0) {
      arr.flat(dep - 1, result)
    } else {
      result.push(arr)
    }
  })

  return result
}
