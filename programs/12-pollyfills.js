// Polyfill of filter

const arr = [1, 2, 3];
const d1 = arr.filter((i) => {
  return i > 2;
});

console.log(d1);

Array.prototype.myFilter = function (cb) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const d2 = arr.myFilter((i) => {
  return i > 2;
});

console.log(d2);

// Polyfill of map
const d3 = arr.map((i) => {
  return i * 2;
});

console.log(d3);

Array.prototype.myMap = function (cb) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i]));
  }
  return arr;
};

const d4 = arr.myMap((i) => {
  return i * 2;
});

console.log(d4);

// Polyfill of bind

const user = {
  name: "Abhishek",
  age: 28,
};

function displayUser(address, state) {
  console.log(`${this.name}, ${this.age}, ${address}, ${state}`);
}
const printName = displayUser.bind(user, "Noida");
printName("UP");

Function.prototype.myBind = function (...args) {
  const obj = this;
  const params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

const printName2 = displayUser.myBind(user, "Noida");
printName2("UP");
