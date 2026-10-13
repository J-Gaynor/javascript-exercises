const reverseString = function (string) {
    const stringLength = string.length;
    let reversedString = "";
    for (let i = stringLength - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
