/*

Split the string into pairs of two characters. 

If the string contains an odd number of characters, then the missing second character of 
the final pair should be replaced with an underscore ('_').

Input: A string
Output: An array of strings

*/

function splitPairs(a) {
    let pairs = [];

    if (a.length > 0) {
            for (i = 0; i < a.length - 1; i++) {
                if (i % 2 == 0) {
                    pairs.push(a[i] + a[i + 1]);
                }
            } if (a.length % 2 != 0) {
                pairs.push(`${a[a.length - 1]}_`);
            }
    } else {
        console.log(a);
    }

    console.log(pairs);
        
};


splitPairs('abcd'); // ['ab', 'cd']
splitPairs('abc'); // ['ab', 'c_']
splitPairs('abcdf'); // ['ab', 'cd', 'f_']
splitPairs('a'); // ['a_']
splitPairs(''); // []
