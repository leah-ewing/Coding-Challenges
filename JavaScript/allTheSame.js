/*

Check if all elements in the given array are equal

*/


function allTheSame(elements) {
    const reducedElements = new Set(elements)
    
    const same = reducedElements.size <= 1 ? true : false
    
    console.log(same)

}

allTheSame([1, 1, 1]) // true
allTheSame([1, 2, 1]) // false
allTheSame([1, 1, 1, 2]), //  false
allTheSame([2, 1, 1, 1]) // false
allTheSame([]) // true
allTheSame([1]) // true