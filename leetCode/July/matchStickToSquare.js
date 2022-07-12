
/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  // we need to get the possible side that will be arrSum/4
  // array sum%4 !== possible side then we dont have to move further we can return /     //false
  let sides = new Array(4).fill(0)
  let perimeter = 0

  for (let i = 0; i < matchsticks.length; i++) {
    perimeter = perimeter + matchsticks[i]
  }

  let possibleSquareSide = perimeter / 4

  if (possibleSquareSide * 4 !== perimeter) {
    return false
  }

  function dfs(index) {
    if (index === matchsticks.length) {
      return (
        sides[0] === sides[1] && sides[1] === sides[2] && sides[2] === sides[3]
      )
    }

    let el = matchsticks[index]

    for (let i = 0; i < 4; i++) {
      if (el <= possibleSquareSide) {
        sides[i] = sides[i] + el
        if (dfs(index + 1)) {
          return true
        }
      }
      sides[i] = sides[i] - el
    }
    return false
  }

  return dfs(0)
}
