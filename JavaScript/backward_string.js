// Return a given string in reverse order.

function backwardString(string) {
    let stringArray = [];
    for (let i = 0; i < string.length; i++) {
        stringArray.unshift(string[i]);
    } console.log(stringArray.join(''));
};

backwardString('val'); // 'lav'
backwardString('ohho') // 'ohho'
backwardString('123456789') // '987654321'
