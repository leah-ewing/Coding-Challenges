/*

You have a number and you need to determine which digit in this number is the biggest.

Input: A positive int
Output: An Int (0-9)

*/

function maxDigit(number) {
    const number = String(number);
    let numList = [];

    for (i = 0; i < number.length; i++) {
        numList.push(parseInt(number[i]));
    }
    
    numList = numList.sort();
    console.log(numList[numList.length - 1]);
};

maxDigit(0); // 0
maxDigit(52); // 5
maxDigit(634); // 6
maxDigit(1); // 1
maxDigit(10000); // 1