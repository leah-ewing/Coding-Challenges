/*

Given two strings, find an index of the second occurrence of the second string in the first one.

Input: Two strings
Output: Int or null

*/

function secondIndex(text, symbol) {
    let i = 0;
    let indexes = [];
    let answer = null;

    while (i < text.length) {
        if (text[i] == symbol) {
            indexes.push(i);
        } i++;
    }

    if (indexes.length >= 2) {
        answer = indexes[1];
    }

    console.log(answer);

};


secondIndex("sims", "s"); // 3
secondIndex("find the river", "e") // 12
secondIndex("hi", " "); // null