/*
Problem Statement:
Given a positive integer, repeatedly calculate the sum of its digits until the result is a single-digit number, and return that final value.

Input: 5431
Output: 4
Explanation: 5431 => 5+4+3+1 = 13 => 1+3 = 4

*/

let number = 5431;

function result(number) {
  let arr = number.toString().split("");
  let sum = arr.reduce((a, b) => {
    return parseInt(a) + parseInt(b);
  });
  if (sum > 10) {
    result(sum);
  } else {
    console.log(sum); // 4
  }
}

result(number);
