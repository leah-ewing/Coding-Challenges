/*

Given an Array of numbers, which are elements of arithmetic progression 
- (the difference between the consecutive elements is constant)
Find the missing number in the array

Preconditions:
- length of sequence > 2
- missing element is always between two elements in sequence
- array is unsorted

Example:

[1, 4, 2, 5]
>> 3

[2, 6, 8]
>> 4

[5, 25, 30, 20, 15]
>> 10

*/



function missingNumber(items) {
    const itemsArray = items.sort((a, b) => a - b)
    console.log("itemsArray:", itemsArray)
    let diffArray = []

    let i = 0
    let diff
    while (i < itemsArray.length - 1) {
        diff = itemsArray[i + 1] - itemsArray[i]
        diffArray.push(diff)
        i++
    }

    diffArray = diffArray.filter(n => n > 0)

    const idealDiff = Math.min(...diffArray)
    const newItems = []
    const endNum = itemsArray[itemsArray.length - 1]
    let num = itemsArray[0]

    while (num < endNum + 1) {
        newItems.push(num)
        num += idealDiff
    }

    let missingNum
    for (let i in newItems) {
        if (itemsArray.includes(newItems[i]) == false) {
            missingNum = newItems[i]
        }
    }

    console.log(missingNum)

}

missingNumber([1, 4, 2, 5]) // 3
missingNumber([2, 6, 8]) // 4
missingNumber([5, 25, 30, 20, 15]) // 10