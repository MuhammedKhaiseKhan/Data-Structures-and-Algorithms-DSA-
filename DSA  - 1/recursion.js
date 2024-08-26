//////////////! recursive fibonacci

// function recursiveFibonacci(n){
//     if (n < 2){
//         return n
//     }
//     return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
// }

// console.log(recursiveFibonacci(0));
// console.log(recursiveFibonacci(1));
// console.log(recursiveFibonacci(6));

//////////////! recursive factorial of a number

// function recursiveFactorial(n){
//     if (n === 0){
//         return 1
//     }
//     return n * recursiveFactorial(n-1);
// }

// console.log(recursiveFactorial(0));
// console.log(recursiveFactorial(1));
// console.log(recursiveFactorial(5));


//! Palindrome USING RECURSIVE METHOD 

function palindromeRecursive(str,s,e){
    str = str.toLowerCase()

    if (s >= e) {
        return true
    }

    if (str[s] !== str[e]) {
        return false
    }
       return palindromeRecursive(str,s+1,e-1)

}

const hello = 'malayalam'
const start = 0;
const end = hello.length -1
console.log(palindromeRecursive(hello,start,end));