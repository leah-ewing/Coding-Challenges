/* 

For the input of your function, you will be given one sentence. 
You have to return a corrected version, that starts with a capital letter and ends with a period (dot).

Input: A string
Output: A string

Precondition: No leading and trailing spaces, text contains only spaces, 'a-z', 'A-Z', ',' and '.'

*/

function correctSentence(text) {
    let textList = [];
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let upperList = []

    for (let i = 0; i < text.length; i++) {
        textList.push(text[i]);
    } for (let j = 0; j < upper.length; j++) {
        upperList.push(upper[j]);
    }

    if (textList[0] in upperList === false) {
        let firstLetter = textList[0].toUpperCase();
        textList.shift();
        textList.unshift(firstLetter);
    }

    let lastIndex = textList.length - 1;

    if (textList[lastIndex] != '.') {
        textList.push('.');
    }

    console.log(textList.join(''));

}; 




correctSentence("greetings, friends") // 'Greetings, friends.'
correctSentence("Greetings, friends") // 'Greetings, friends.'
correctSentence("Greetings, friends.") // 'Greetings, friends.'
correctSentence("hi") // 'Hi.'
correctSentence("welcome to New York") // 'Welcome to New York.'

