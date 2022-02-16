/*

Find the nearest value to the given one.

You are given a list of values as set form and a value for which you need to find the nearest one.

- If 2 numbers are at the same distance, you need to choose the smallest one;
- The set of numbers is always non-empty, i.e. the size is >= 1;
- The given value can be in this set, which means that it's the answer;
- The set can contain both positive and negative numbers, but they are always integers;
- The set isn't sorted and consists of unique numbers.

Input: Two arguments. A list of values in the set form. The sought value is an int.
Output: Int.

*/

function nearestValue(values, num) {
    const sortedValues = values.sort(function(a, b){return a - b});
    const maxNum = sortedValues[sortedValues.length - 1];
    const minNum = sortedValues[0];
    let numberPlus = num + 1;
    let numberMinus = num - 1;
    let answer;


    for (i = 0; i < values.length; i++) {
        if (values[i] == num) {
            answer = num;
        }
    }

    if (answer != num) {

        if (num > maxNum) {
            answer = maxNum;
        } else if (num < minNum) {
            answer = minNum;
        } else {
            while (numberPlus < maxNum + 1) {

                let numberPlusCheck = false;
                let numberMinusCheck = false;

                for (i in values) {
                    if (values[i] == numberPlus) {
                        numberPlusCheck = true;
                    } if (values[i] == numberMinus) {
                        numberMinusCheck = true;
                    }
                } if (numberPlusCheck == true && numberMinusCheck == false) {
                    answer = numberPlus;
                    break;
                } if (numberMinusCheck == true && numberPlusCheck == false) {
                    answer = numberMinus;
                    break;
                } if (numberMinusCheck == true && numberPlusCheck == true) {
                    answer = numberMinus;
                    break;
                } else {
                    numberPlus += 1;
                    numberMinus -= 1;
                }
            }
        }
    }
    console.log(answer);
};




nearestValue([4, 7, 10, 11, 12, 17], 9); // 10
nearestValue([4, 7, 10, 11, 12, 17], 8); // 7
nearestValue([4, 8, 10, 11, 12, 17], 9); // 8
nearestValue([4, 9, 10, 11, 12, 17], 9); // 9
nearestValue([4, 7, 10, 11, 12, 17], 0); // 4
nearestValue([4, 7, 10, 11, 12, 17], 100); // 17
nearestValue([5, 10, 8, 12, 89, 100], 7); // 8
nearestValue([5], 5); // 5
nearestValue([5], 7); // 5
