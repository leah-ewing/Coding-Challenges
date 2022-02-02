/* 

Check if a given string has all symbols in upper case. 
If the string is empty or doesn't have any letter in it - function should return True.

Input: A string
Output: a boolean

Precondition: a-z, A-Z, 1-9 and spaces

*/

function isAllUpper(text) {

    if (text == text.toUpperCase()) {
        console.log(true);
    } else {
        console.log(false);
    }
};
    


isAllUpper("ALL UPPER"); // true
isAllUpper("all lower"); // false
isAllUpper("mixed UPPER and lower"); // false
isAllUpper(""); // true
isAllUpper("444"); // true
isAllUpper("55 55 5"); // true