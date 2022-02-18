/*

In a given string you should reverse every word, but the words should stay in their places.

Input: A string.
Output: A string.

Precondition: The line consists only from alphabetical symbols and spaces.

*/

function backwardStringByWord(text) {
    let backwardsList = [];

    for (i = text.length - 1; i >= 0; i--) {
        backwardsList.push(text[i]);
    }

    text = backwardsList.join('');
    console.log(text);
};

backwardStringByWord(''); // ''
backwardStringByWord('world'); // dlrow
backwardStringByWord('hello word'); // olleh dlrow
backwardStringByWord('hello   world'); // 'olleh   dlrow'