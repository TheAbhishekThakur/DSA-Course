// Loop within Loop

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
// Output:
// i: 0, j: 0
// i: 0, j: 1
// i: 0, j: 2
// i: 1, j: 0
// i: 1, j: 1
// i: 1, j: 2
// i: 2, j: 0
// i: 2, j: 1
// i: 2, j: 2

console.log('---');

// ************************************************

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
// Output:
// i: 1, j: 0
// i: 2, j: 0
// i: 2, j: 1

// ************************************************

for(let i = 0; i < 3; i++) {
    for(let j = 0; j <= i; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
// Output:
// i: 0, j: 0
// i: 1, j: 0
// i: 1, j: 1
// i: 2, j: 0
// i: 2, j: 1
// i: 2, j: 2

console.log('---');

// ************************************************

for(let i = 0; i < 3; i++) {
    for(let j = i; j > 0; j--) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
// Output:
// i: 1, j: 1
// i: 2, j: 2
// i: 2, j: 1

// ************************************************

for(let i = 5; i > 0; i--) {
    for(let j = 0; j < i; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
// Output:
// i: 5, j: 0
// i: 5, j: 1
// i: 5, j: 2
// i: 5, j: 3
// i: 5, j: 4
// i: 4, j: 0
// i: 4, j: 1
// i: 4, j: 2
// i: 4, j: 3
// i: 3, j: 0
// i: 3, j: 1
// i: 3, j: 2
// i: 2, j: 0
// i: 2, j: 1
// i: 1, j: 0