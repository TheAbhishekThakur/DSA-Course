// 34. 5431 => 5 + 4 + 3 + 1 = 13 then 13 => 1 + 3 = 4

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
