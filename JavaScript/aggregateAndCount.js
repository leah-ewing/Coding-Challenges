/*

You have a list of values where each element is a list of two values, `name` and `counter`

Aggregate those values into a dict, if you find more that one elements with the same name, sum their counters in the aggregated dict.

Input: Array of arrays of two elements - string & integer
Output: Object

Example 1:
aggregateAndCount([["a", 1], ["b", 2], ["c", 3], ["a", 5]])
>> { a: 6, b: 2, c: 3 }

Example 2:
aggregateAndCount([["a", 1], ["b", 2]])
>> { a: 1, b: 2 }

Example 3:
aggregateAndCount([["a", 1], ["a", 2]])
>> { a: 3 }

*/

function aggregateAndCount(items) { 
    const itemsDict = {}

    for (let i in items) {
        const name = items[i][0]
        const value = items[i][1]
        if (items[i][0] in itemsDict) {
            itemsDict[name] = itemsDict[name] + value
        } else {
            itemsDict[name] = value
        }
    }
    console.log(itemsDict)
}

aggregateAndCount([["a", 1], ["b", 2]]) // { a: 1, b: 2 }
aggregateAndCount([["a", 1], ["a", 2]]) // { a: 3 }
aggregateAndCount([["a", 1], ["b", 2], ["c", 3], ["a", 5]]) // { a: 6, b: 2, c: 3 }
aggregateAndCount([["a", 1]]) //  { a: 1 } 