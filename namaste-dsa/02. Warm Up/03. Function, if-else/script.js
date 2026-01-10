function printHelloWorld() {
    console.log("Hello World"); // Hello World
}

printHelloWorld();

// **********************************

function greet(name) {
    console.log("Namaste, " + name);
}

greet("Abhishek"); // Namaste Abhishek
greet("Vikas"); // Namaste Vikas

// **********************************


function sum(a, b) {
    let add = a + b;
    console.log(add) // 30
}
sum(10, 20);

function square(x) {
    return x * x;
}
const result = square(5);
console.log(result); // 25

// **********************************

// Create a function which accepts the age and tells weather a person is eligible to vote or not. 
function eligibleToVote(age) {
    if(age < 1) {
        console.log("Invalid input")
    } else if(age < 18) {
        console.log("Not eligible to vote");
    } else {
        console.log("Eligible to vote")
    }
}
eligibleToVote(15); // Not eligible to vote
eligibleToVote(21); // Eligible to vote
eligibleToVote(-1); // Invalid input

// **********************************

// Create a function to check if a number is Even or Odd
function isEvenOdd(num) {
    if(num % 2 === 0) {
        console.log("Even Number")
    } else {
        console.log("Odd Number")
    }
}
isEvenOdd(7); // Odd Number
isEvenOdd(6); // Even Number

// **********************************


