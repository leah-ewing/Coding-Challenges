/* 

For the input of your function, you will be given one sentence. 
You have to return a corrected version, that starts with a capital letter and ends with a period (dot).

Input: A string
Output: A string

Precondition: No leading and trailing spaces, text contains only spaces, 'a-z', 'A-Z', ',' and '.'

*/

function correctSentence(text) {
    text = text.split("")

    if (text[0] != text[0].toUpperCase()) {
        text[0] = text[0].toUpperCase()
    } 

    const lastIndex = text.length - 1

    if (text[lastIndex] != ".") {
        text.push(".")
    }

    console.log(text.join(""))

}; 




correctSentence("greetings, friends"); // 'Greetings, friends.'
correctSentence("Greetings, friends"); // 'Greetings, friends.'
correctSentence("Greetings, friends."); // 'Greetings, friends.'
correctSentence("hi"); // 'Hi.'
correctSentence("welcome to New York"); // 'Welcome to New York.'

