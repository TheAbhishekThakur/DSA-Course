console.log("Hello World"); // Hello World

console.log(7); // 7

const a = 10;
const b = 20;
const sum = a + b;
console.log(sum); // 30

const multiply = a * b;
console.log(multiply); // 200

const difference = a - b;
console.log(difference); // -10

let x = 20;
console.log(x); // 20

x = 30;
console.log(x); // 30

let firstname = "Abhishek";
let lastname = "Thakur"
let fullname = firstname + " " + lastname;
console.log(fullname); // Abhishek Thakur

let num = 7;
console.log(firstname + num) // Abhishek7

let arr = [2, 6, 0, 100, 9, 27];
console.log(arr); // [2, 6, 0, 100, 9, 27]
console.log(arr[4]); // 9

let sum2 = arr[0] + arr[4];
console.log(sum2); // 11

console.log(arr[6]) // undefined

let arr3 = ["Abhishek", "Sachin", "Vikas"];
console.log(arr3[1]); // Sachin

// Mixed array
let arr4 = ["Abhishek", 4, true, [5, "Vikas"]]
console.log(arr4[2]); // true
console.log(arr4[3][0]) // 5

// Objects
const obj = {
  a: 7,
  name: "Abhishek",
  bool: true,
  arr: [6,7,8]
}

console.log(obj.a); // 7
console.log(obj.name); // Abhishek
console.log(obj.bool); // true
console.log(obj.arr); // [6,7,8]