/*

Given an array of integers. Find the sum of the integers with even indexes (0th, 2nd, 4th...). 
Then multiply this summed number and the final element of the array together. 

For an empty array, the result will always be 0 (zero).

Input: A list of integers
Output: The number as an integer

*/

function evenTheLast(array) {

    let evenIndexes = [];

    if (array.length == 0) {
        console.log(array.length)
    } else {
        for (i = 0; i < array.length; i++) {
            if (i % 2 == 0) {
                evenIndexes.push(array[i]);
            }
        }
        console.log(evenIndexes.reduce((a, b) => a + b, 0) * array[array.length - 1]);
    }
};

evenTheLast([0, 1, 2, 3, 4, 5]); // 30
evenTheLast([1, 3, 5]) // 30
evenTheLast([6]); // 36
evenTheLast([]); // 0

