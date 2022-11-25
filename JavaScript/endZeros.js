/* 

Try to find out how many zeros a given number has at the end.

Input: A positive Int
Output: An Int.

*/

function endZeros(a) {
    a = String(a).split("").reverse()
    let i = 0
    let count = 0

    while (i < a.length && a[i] == "0") {
        count++, i++
    }

    console.log(count)
};


endZeros(0); // 1
endZeros(1); // 0
endZeros(10); // 1
endZeros(101); // 0
endZeros(245); // 0
endZeros(100100); // 2