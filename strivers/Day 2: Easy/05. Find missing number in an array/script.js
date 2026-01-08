/*
    Brute Force Approach
*/

const n = 5;
const arr = [2, 3, 5, 1];
let num;

for (let i = 1; i <= arr.length; i++) {
  let flag = false;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == i) {
      flag = true;
      break;
    }
  }
  if (!flag) {
    num = i;
  }
}

console.log(num); // 4

/*
Complexity Analysis
--------------------
Time Complexity: O(N^2)
Space Complexity: O(1)
*/

// ############################################################

/*
    Better Approach - Using Hashing
*/

const n2 = 5;
const arr2 = [2, 3, 5, 1];
const arr3 = new Array(n2).fill(0);
let index = 0;

for (let i = 0; i < arr2.length; i++) {
  arr3[arr2[i]] = 1;
}

console.log(arr3);

for (let i = 1; i <= n2; i++) {
  if (!arr3[i] == i) {
    index = i;
  }
}

console.log(index);
