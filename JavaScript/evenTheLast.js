/*

Given an array of integers. Find the sum of the integers with even indexes (0th, 2nd, 4th...). 
Then multiply this summed number and the final element of the array together. 

For an empty array, the result will always be 0 (zero).

Input: An array of integers
Output: The number as an integer

*/

function evenTheLast(array) {
    let amount = 0

    if (data.length > 0) {
        for (let i = 0; i < data.length; i += 2) {
            amount += data[i]
        }
    
        amount = amount * data[data.length - 1]
    }

    console.log(amount)
};

evenTheLast([0, 1, 2, 3, 4, 5]); // 30
evenTheLast([1, 3, 5]) // 30
evenTheLast([6]); // 36
evenTheLast([]); // 0

