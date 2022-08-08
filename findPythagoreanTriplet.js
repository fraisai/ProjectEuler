
/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2

For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/

function findPythagoreanTriplet() {
  const sum = 1000;
  let a;
  let b;

  for (a = 1; a <= sum/3; a++) {
    for (b = a + 1; b <= sum/2; b++) {
      let c = sum - a - b;
      if ( a*a + b*b == c*c ) {
        console.log("a=%d, b=%d, c=%d\n",a,b,c);
      }
  			return a * b * c
    }
  }
}

console.log(findPythagoreanTriplet())
