https://projecteuler.net/problem=6

/*
The sum of the squares of the first ten natural numbers is, 385

The square of the sum of the first ten natural numbers is, 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.



*/
// (Sn)^2 = [n(n+1)(2n+1)] / 6
// https://www.mathblog.dk/project-euler-problem-6/

function sumDiff() {
  let sum = 0;
  let squared = 0;
  let result = 0;

  const N = 100;

  sum = N * (N + 1) / 2;
  squared = (N * (N + 1) * (2 * N + 1)) / 6;
  
  result = sum * sum - squared;
  return result
}

console.log(sumDiff()); // Answer: 25164150
