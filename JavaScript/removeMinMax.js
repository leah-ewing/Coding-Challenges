/*

In a given set of integers, remove minimum and maximum elements.

The second argument indicates how many min and max elements should be removed.

Example:

removeMinMax(new Set([8, 9, 18, 7]), 1); 
>> new Set([8, 9])

*/

function removeMinMax(data, total) { 
    if (data.size == 0) {
        console.log(data)
    } else {
        dataArray = [...data]
    
        let maxNum
        let minNum
        let count = 0

        while (count < total) {
            maxNum = Math.max(...dataArray)
            minNum = Math.min(...dataArray)
            dataArray = dataArray.filter(element => element != maxNum && element != minNum)
            count++
        }
        console.log(new Set(dataArray))
    }
}

removeMinMax(new Set([8, 9, 18, 7]), 1); // Set(2) { 8, 9 }
removeMinMax(new Set([8, 9, 7]), 0) // Set(3) { 8, 9, 7 }
removeMinMax(new Set([8, 9, 7]), 2) // Set(0) {}
removeMinMax(new Set([1, 2, 7, 8, 9]), 2) // Set(1) { 7 }
removeMinMax(new Set([]), 1) // Set(0) {}