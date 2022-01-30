/*

Given a string that consists of only digits, find how many zero digits ("0") are at the beginning of the given string.

Input: A string, that consist of digits
Output: An Int

*/

function beginningZeros(number) {
    let zeros = []
    let i = 0

    while (i < number.length) {
        if (number[i] == 0) {
            zeros.push(number[i]);
            i++;
        } else {
            break;
        }
    } console.log(zeros.length)
};


beginningZeros('100') // 0
beginningZeros('001') // 2
beginningZeros('100100') // 0
beginningZeros('001001') // 2
beginningZeros('012345679') // 1
beginningZeros('0000') // 4