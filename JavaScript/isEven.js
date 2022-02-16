/*

Check if the given number is even or not. Your function should return True if the number is even, and False if the number is odd.

Input: An int
Output: A bool

Precondition: both given ints should be between -1000 and 1000

*/

function isEven(num) {
    if (num % 2 == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
};

isEven(2); // true
isEven(5); // false
isEven(0); // true
