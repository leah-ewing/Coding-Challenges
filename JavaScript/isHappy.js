/*

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

>>> n = 19 => true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

>>> n = 2 => false

*/

function isHappy(n) {
    let num
    let timeout = 0
    n = String(n).split('')

    while (num != 1 && timeout < 25) {
        for (let i = 0; i < n.length; i++) {
            n[i] = Math.pow(parseInt(n[i]), 2)
        } 
        num = n.reduce((a, b) => a + b, 0)
        n = String(num).split('')
        timeout++
    }

    let happy
    if (num == 1) {
        happy = true
    } else {
        happy = false
    }

    return happy
}

console.log(isHappy(19)) // true
console.log(isHappy(2)) // false
console.log(isHappy(2147483647)) // false
