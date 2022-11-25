/*

Given a string that consists of only digits, find how many zero digits ("0") are at the beginning of the given string.

Input: A string, that consist of digits
Output: An Int

*/

function beginningZeros(a) {
    a = a.split('')
    let i = 0
    let count = 0

    while (a[i] == 0 && i < a.length) {
        count++, i++
    }
    
    console.log(count)
};


beginningZeros('100'); // 0
beginningZeros('001'); // 2
beginningZeros('100100'); // 0
beginningZeros('001001'); // 2
beginningZeros('012345679'); // 1
beginningZeros('0000'); // 4