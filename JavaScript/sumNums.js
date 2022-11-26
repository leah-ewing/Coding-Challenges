/*

In a given text,sum the numbers while excluding any digits that form part of a word.
- The text consists of numbers, spaces and letters from the English alphabet.

Input: A string
Output: An integer

*/

function sumNumbers(text) {
    text = text.split(" ")
    let nums = []

    for (let i in text) {
        if (Number(text[i])) {
            nums.push(Number(text[i]))
        }
    }

    let sumNums = 0
    
    nums.forEach(n => sumNums += n)

    return sumNums
}

console.log(sumNumbers("hi")) // 0
console.log(sumNumbers("who is 1st here")) // 0
console.log(sumNumbers("my numbers is 2")) // 2
console.log(sumNumbers("This picture is an oil on canvas painting by Danish artist Anna Petersen between 1845 and 1910 year")) // 3755