/*

Given an array with positive numbers and a number 'n' 
Find the N-th power of the element in the array with the index 'n'

If 'n' is outside of the array, return -1

assert.strictEqual(indexPower([1, 2, 3, 4], 2), 9);
assert.strictEqual(indexPower([1, 3, 10, 100], 3), 1000000);
assert.strictEqual(indexPower([0, 1], 0), 1);
assert.strictEqual(indexPower([1, 2], 3), -1);

Example 1:
In: 1, 2, 3, 4], 2
Out: 9

Example 2:
In: [1, 3, 10, 100], 3
Out: 1000000

Example 3:
In: [0, 1], 0
Out: 1

Example 4:
In: [1, 2], 3
Out: -1

*/

function indexPower(ar, n) {
    if (n <= ar.length - 1) {
        return Math.pow(ar[n], n)
    } else {
        return -1
    }
} 

console.log(indexPower([1, 2, 3, 4], 2)) // 9
console.log(indexPower([1, 3, 10, 100], 3)) // 1000000
console.log(indexPower([0, 1], 0)) // 1
console.log(indexPower([1, 2], 3)) // -1