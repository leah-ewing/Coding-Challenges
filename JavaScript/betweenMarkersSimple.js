/*

Given a string and two markers (the initial one and final), find a substring enclosed between these two markers
- The initial and final markers are always different
- The initial and final markers are always 1 char size
- The initial and final markers always exist in a string and go one after another

Input: Three arguments. All of them are strings. The second and third arguments are the initial and final markers.
Output: String.

*/


function betweenMarkers(text, start, end) {
    text = text.split("")
    let startIndex
    let endIndex
    let betweenText = []

    for (let i in text) {
        if (text[i] == start) {
            startIndex = i
        } else if (text[i] == end) {
            endIndex = i
        }
    }

    for (let j = 0; j < text.length; j++) {
        if (j > startIndex && j < endIndex) {
            betweenText.push(text[j])
        }
    }
    return betweenText.join("")
}

console.log(betweenMarkers("What is >apple<", ">", "<")) // apple
console.log(betweenMarkers("What is [apple]", "[", "]")) // apple
console.log(betweenMarkers("What is ><", ">", "<")) // ""
console.log(betweenMarkers("[an apple]", "[", "]")) // an apple