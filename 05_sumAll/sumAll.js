const sumAll = function (a, b) {
  if (!Number.isInteger(a + b)) return "ERROR";

  let sum = 0;

  if (a < b) {
    for (let i = a; i <= b; ++i) {
        if (i < 0) return "ERROR";
      sum += i;
    }
  } else if (a > b) {
    for (let i = b; i <= a; ++i) {
      if (i < 0) return "ERROR";
      sum += i;
    }
  } else {
    return "ERROR";
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
