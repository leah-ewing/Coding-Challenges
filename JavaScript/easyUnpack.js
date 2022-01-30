/* 

Create a function that gets an array and returns an array with 3 elements:
the first, third and second element from the last for the given array

*/

function easyUnpack(elements) {
    unpackList = [];
    secondFromLast = elements.length - 2;
    
    unpackList.push(elements[0], elements[2], elements[secondFromLast]);

    console.log(unpackList);

};




easyUnpack([6, 2, 9, 4, 3, 9]); // [6, 9, 3]
easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]); // [1, 3, 7]
easyUnpack([1, 1, 1, 1]); // [1, 1, 1]
easyUnpack([6, 3, 7]); // [6, 7, 3]
