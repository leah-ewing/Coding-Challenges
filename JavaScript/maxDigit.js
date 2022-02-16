/*

You have a number and you need to determine which digit in this number is the biggest.

Input: A positive int
Output: An Int (0-9)

*/

function maxDigit(number) {
    number = String(number);
    numList = [];

    for (n = 0; n < number.length; n++) {
        numList.push(parseInt(number[n]));
    }
    
    numList = numList.sort();
    console.log(numList[numList.length - 1]);
};

maxDigit(0); // 0
maxDigit(52); // 5
maxDigit(634); // 6
maxDigit(1); // 1
maxDigit(10000); // 1