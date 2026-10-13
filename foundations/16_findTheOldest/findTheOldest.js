const findTheOldest = function (arr) {
    const oldestObj = arr.reduce(function (a, b) {
        if (!a.yearOfDeath) {
            a.yearOfDeath = 2026;
        }
        if ((a.yearOfDeath - a.yearOfBirth) >= (b.yearOfDeath - b.yearOfBirth)) {
            return a;
        } else {
            return b;
        }
    })
    return oldestObj;
};
console.log(findTheOldest([
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]))
// Do not edit below this line
module.exports = findTheOldest;
