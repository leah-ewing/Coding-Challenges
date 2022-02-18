/*

Count the number of digits in a given string.

Input: A string
Output: An integer

*/

function countDigits(text) {

    let numbersInText = [];
    const digits = '1234567890'

    for (i = 0; i < text.length; i++) {
        if (digits.includes(text[i]) == true) {
            numbersInText.push(text[i]);
        }
    }

    console.log(numbersInText.length);

};

countDigits('hi'); // 0
countDigits('my number is 2'); // 1
countDigits('This picture is an oil on canvas painting by Danish artist Anna Petersen between years 1845 and 1910') // 8
countDigits('5 plus 6 is'); // 2
countDigits('') // 0