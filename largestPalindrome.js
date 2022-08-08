// https://projecteuler.net/problem=4

/*
A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/

function largestPalindrome() {
  const arr = [];
  
  for (let i = 999; i >= 100; i--){
    for (let j = 999; j >= 100; j--) {
      let mult = i * j;
      if (checkPalin(mult)) arr.push(mult)
    }
    
  }
  
  return Math.max(...arr);
}

function checkPalin(num) {  
  return num.toString() === num.toString().split('').reverse().join('');
}

console.log(largestPalindrome()); // answer:  913*993=906609


