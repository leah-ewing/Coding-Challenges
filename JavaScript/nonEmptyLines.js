/*

Count how many non-empty lines a given text has.

An empty line is a line without symbols or the one that contains only spaces.

Example 1:
In: "one simple line\n"
Out: 1

Example 2:
In: ""
Out: 0

Example 3:
In: "\nonly one line\n            "
Out: 1

Example 4:
In: "\nLorem ipsum dolor sit amet,\n\nconsectetur adipiscing elit\nNam odio nisi, aliquam\n            "
Out: 3

*/

function nonEmptyLines(text) {
    text = text.trim(" ").split("\n")
    let count = 0

    if (text[0] != "") {
        for (let i = 0; i < text.length; i++) {
            if (text[i] != "") {
                count++
            }
        }
    }
    return count
}

console.log(nonEmptyLines("one simple line\n")) // 1
console.log(nonEmptyLines("")) // 0
console.log(nonEmptyLines("\nonly one line\n            ")) // 1
console.log(nonEmptyLines("\nLorem ipsum dolor sit amet,\n\nconsectetur adipiscing elit\nNam odio nisi, aliquam\n            ")) // 3