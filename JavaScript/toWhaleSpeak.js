/*

Create a function that converts a string to "Whale Speak"

Rules for "Whale Speak":
- no consanents only vowels
- 'u's and 'e's are doubled

*/


function toWhaleSpeak(input = "This is whale speak!") {
    input = input.toLowerCase()
    const vowels = ["a", "e", "i", "o", "u"]
    let resultsArray = []

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (input[i] == vowels[j]) {
                    if (input[i] == "e" || input[i] == "u") {
                        resultsArray.push(input[i])
                }
                resultsArray.push(input[i])
            }
        }
    } 
    const resultString = resultsArray.join('').toUpperCase()
    console.log(resultString)
}

toWhaleSpeak("Turpentine And Turtles") // UUEEIEEUUEE
toWhaleSpeak() // IIAEEEEA
