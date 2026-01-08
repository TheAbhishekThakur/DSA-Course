// Left Rotate an array by D place

const arr2 = [1, 2, 3, 4, 5, 6, 7];
let d = 2;
// Output: [3,4,5,6,7,1,2]

// Brute Force Approach
d = d % arr2.length; // if d is greater than array length
let rotate = arr2.slice(0, d);
for (let i = d; i < arr2.length; i++) {
  arr2[i - d] = arr2[i];
}

for (let i = 0; i < rotate.length; i++) {
  arr2.push(rotate[i]);
}
console.log(arr2);
