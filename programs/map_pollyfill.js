const arr = [1, 2, 3, 4, 5];

function multiply(i) {
  return i * 2;
}

Array.prototype.customMap = function (logic) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(logic(this[i]));
  }
  return res;
};

const res = arr.map(multiply);
const res2 = arr.customMap(multiply);
console.log(res);
console.log(res2);
