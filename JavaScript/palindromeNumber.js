/* 

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

*/

function isPalindrome(x) {

    if (x < 0) {
        console.log(false);
    } else {
        let xList = [];
        x = String(x);

        for (let i = 0; i < x.length; i++) {
            xList.unshift(x[i]);
        } 

        const reverseX = parseInt(xList.join(""));

        if (reverseX == x) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
};

isPalindrome(121); // true
isPalindrome(-121); // false
isPalindrome(10); // false
isPalindrome(-101); // false
isPalindrome(31213); // true
isPalindrome(0); // true