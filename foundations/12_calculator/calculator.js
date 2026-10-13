const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((prev, next) => prev += next, 0)
};

const multiply = function (arr) {
  return arr.reduce((prev, next) => prev * next)
};

const power = function (a, b) {
  // let total = 0
  // for (let i = 0; i < b; i++) {
  //   if (total === 0) {
  //     total = a
  //   } else { total = total * a; }
  // }
  return a ** b;
};

const factorial = function (a) {
  let total = 1
  for (let i = a; i > 0; i--) {
    total = total * i
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
