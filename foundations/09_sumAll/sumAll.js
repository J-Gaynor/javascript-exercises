const sumAll = function (a, b) {
    if (!(a >= 0) || !(b >= 0)) {
        return ("ERROR");
    }

    if (!(Number.isInteger(a)) || !(Number.isInteger(b))) {
        return ("ERROR");
    }

    let total = 0;
    if (a < b) {
        do {
            total += a;
            a++;
        } while (a <= b)
    } else if (a > b) {
        do {
            total += b;
            b++
        } while (b <= a)
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
