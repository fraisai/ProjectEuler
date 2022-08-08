// https://projecteuler.net/problem=3

/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

function largestPrime() {
  let n = 600851475143;
  for (let i = 3; i < n; i++) {
    while (n % i === 0) {
      n = n / i;
    }
  }
  if (n > 2) return n
}

console.log(largestPrime()); // answer: The largest prime factor of the number 600851475143 is 6857.

