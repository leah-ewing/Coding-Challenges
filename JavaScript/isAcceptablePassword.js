/*

Create a password verification function.

The verification condition is:

the length should be bigger than 6.

Input: A string.
Output: A bool.

*/

function isAcceptablePassword(password) {
    if (password.length > 6) {
        console.log(true);
    } else {
        console.log(false);
    }
};

isAcceptablePassword("short"); // false
isAcceptablePassword("ashort"); // false
isAcceptablePassword("mushlonger"); // true