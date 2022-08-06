module.exports = {
  //param A : integer
  //return a array of integers
  primesum: function (A) {
    // Generating primes using Sieve
    let returnArray = []
    let isPrime = new Array(A + 1)
    for (let i = 0; i < A + 1; i++) {
      isPrime[i] = false
    }
    SieveOfEratosthenes(A, isPrime)

    // Traversing all numbers to find first
    // pair
    for (let i = 0; i < A; i++) {
      if (isPrime[i] && isPrime[A - i]) {
        returnArray.push(i)
        returnArray.push(A - i)
        return returnArray
      }
    }
    // Generate all prime numbers less than n.
    function SieveOfEratosthenes(n, isPrime) {
      // Initialize all entries of boolean
      // array as true. A value in isPrime[i]
      // will finally be false if i is Not a
      // prime, else true bool isPrime[n+1];
      isPrime[0] = isPrime[1] = false
      for (let i = 2; i <= n; i++) isPrime[i] = true

      for (let p = 2; p * p <= n; p++) {
        // If isPrime[p] is not changed,
        // then it is a prime
        if (isPrime[p] == true) {
          // Update all multiples of p
          for (let i = p * p; i <= n; i += p) isPrime[i] = false
        }
      }
      return false
    }

    return []
  },
}
