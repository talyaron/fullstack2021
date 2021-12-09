"use strict";

var sequenceSum = function sequenceSum(begin, end, step) {
  var sum = 0;

  for (var i = begin; i <= end; i += step) {
    sum += i;
  }

  return sum;
};

console.log(sequenceSum(2, 6, 2));