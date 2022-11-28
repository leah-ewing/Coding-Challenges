/*

Given a sequence of strings, determine the single most frequently occurring string in the sequence

Example 1:
mostFrequent(["a", "b", "c", "a", "b", "a"]) 
>> a

Example 2:
mostFrequent(["a", "a", "bi", "bi", "bi"])
>> bi

*/

function mostFrequent(data) {
    const dataDict = {}

    data.forEach(item => dataDict[item] = item in dataDict ? dataDict[item] += 1 : 1)

    const maxValue = Math.max(...Object.values(dataDict))
    const maxData = Object.keys(dataDict).find(key => dataDict[key] === maxValue)

    console.log(maxData)
}

mostFrequent(["a", "b", "c", "a", "b", "a"]) // "a"
mostFrequent(["a", "a", "bi", "bi", "bi"]) // "bi"