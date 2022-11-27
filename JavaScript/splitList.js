/*

Split a given array into two arrays
If the array has an odd amount of elements, the first array should have more elements 
If it has no elements, then two empty arrays should be returned

Example:
[1, 2, 3, 4, 5, 6]
>> [[1, 2, 3], [4, 5, 6]]

[1, 2, 3, 4, 5]
>> [[1, 2, 3], [4, 5]]

*/

function splitList(values) {
    const indexes = values.length
    const midway = indexes % 2 == 0 ? (indexes / 2) - 1 : (indexes - 1) / 2

    const firstHalf = []
    for (let i = 0; i <= midway; i++) {
        firstHalf.push(values[i])
    }

    const secondHalf = []
    for (let i = midway + 1; i < indexes; i++) {
        secondHalf.push(values[i])
    }

    const splitValues = [firstHalf, secondHalf]

    console.log(splitValues)
    
}

splitList([1, 2, 3, 4, 5, 6]) // [[1, 2, 3], [4, 5, 6]]
splitList([1, 2, 3]) // [[1, 2], [3]]
splitList([1, 2, 3, 4, 5]) // [[1, 2, 3], [4, 5]]
splitList([1]) // [[1], []]
splitList([]) // [[], []]