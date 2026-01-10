for (let i = 0; i < 20; i++) {
    console.log("Hello World");
}
// Output: Hello World printed 20 times

for (let i = 0; i < 10; i = i + 2) {
    console.log(i);
}
// Output: 0, 2, 4, 6, 8

for (let i = 5; i > 0; i--) {
    console.log(i);
}
// Output: 5, 4, 3, 2, 1

for (let i = 5; i < 4; i++) {
    console.log("Namaste DSA");
}
// Output: (No output, loop does not execute)

for (let i = 1; i > 0; i++) {
    console.log(i);
}
// Output: (Infinite loop, prints increasing numbers starting from 1)

// ******************************************************

// Calling a function multiple times using a loop
function greet() {
    console.log("Hello!");
}
for (let i = 0; i < 10; i++) {
    greet();
}
// Output: Hello! printed 10 times

// ******************************************************

let arr = [10, 20, 30, 40, 50];
let length = arr.length;

for (let i = 0; i < length; i++) {
    console.log(arr[i]);
}
// Output: 10, 20, 30, 40, 50

// ******************************************************

// Q1. Print all even numbers from 1 to 100
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// Output: 2, 4, 6, 8, 10

// *****************************************************

// While Loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// Output: 0, 1, 2, 3, 4