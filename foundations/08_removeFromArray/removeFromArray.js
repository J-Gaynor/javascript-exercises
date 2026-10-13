const removeFromArray = function () {
    const args = [...arguments]
    const numbersArray = args[0];
    const removeNumbers = args.splice(1);
    return numbersArray.filter((number) => !removeNumbers.includes(number));
};

// Do not edit below this line
module.exports = removeFromArray;
