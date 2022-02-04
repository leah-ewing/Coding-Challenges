/*

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

*/

function isPalindrome(s) {

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphabetList = [];

    for (i = 0; i < alphabet.length; i++) {
        alphabetList.push(alphabet[i]);
    }

    const digits = "01234567890";
    let digitList = [];

    for (j = 0; j < digits.length; j++) {
        digitList.push(digits[j]);
    }

    const lowercaseS = s.toLowerCase();
    let sList = [];

    for (k = 0; k < lowercaseS.length; k++) {
        sList.push(lowercaseS[k]);
    } 

    let alphaList = [];

    for (l = 0; l < sList.length; l++) {
        if (alphabetList.includes(sList[l]) || digitList.includes(sList[l])) {
            alphaList.push(sList[l]);
        }
    } 

    const alphaString = alphaList.join("");
    let reverseList = [];

    for (m = 0; m < alphaString.length; m++) {
        reverseList.unshift(alphaString[m]);
    }

    const reverseString = reverseList.join("");
    
    if (alphaString == reverseString) {
        console.log(true);
    } else {
        console.log(false);
    }

};



isPalindrome("A man, a plan, a canal: Panama") // true
isPalindrome("race a car") // false
isPalindrome("") // true
isPalindrome("0P") // false