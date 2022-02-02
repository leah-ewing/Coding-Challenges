/*

You are given a string and you have to find its first word.
- The input string consists of only English letters and spaces.
- There aren't any spaces at the beginning and the end of the string.

Input: A string.
Output: A string.

Precondition: The text can contain a-z, A-Z and spaces.

*/


function firstWord(text) {
    const textList = text.split(" ");
    console.log(textList[0]);
};


firstWord("Hello World"); // Hello
firstWord("a word"); // a
firstWord("hi"); // hi
