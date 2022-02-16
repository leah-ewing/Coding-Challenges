/*

In a given list the first element should become the last one. 

An empty list or list with only one element should stay the same.

Input: Array
Output: Array

*/

function replaceFirst(items) {
    if (items.length > 0) {
        items.push(items.shift());
    } console.log(items);
};

replaceFirst([1, 2, 3, 4]); // [2, 3, 4, 1]
replaceFirst([1]); // [1]
replaceFirst([]); // []