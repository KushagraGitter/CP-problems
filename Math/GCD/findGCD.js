function findGCD(a, b) {
  return b ? findGCD(b, a % b) : a
}
