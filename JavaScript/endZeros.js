/* 

Try to find out how many zeros a given number has at the end.

Input: A positive Int
Output: An Int.

*/

function endZeros(num) {
    let reverseList = [];
    const num = String(num);
    let zeroCounter = 0;
    let zeros = true;

    for (let i = 0; i < num.length; i++) {
        reverseList.unshift(num[i]);
    }

    let j = 0;

    while (zeros == true) {
        if (reverseList[j] == '0') {
            zeroCounter++;
            j++;
        } else {
            zeros = false;
        }
    } console.log(zeroCounter);
};


endZeros(0); // 1
endZeros(1); // 0
endZeros(10); // 1
endZeros(101); // 0
endZeros(245); // 0
endZeros(100100); // 2