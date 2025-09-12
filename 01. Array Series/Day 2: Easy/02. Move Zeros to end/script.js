/*
    Brute Force Approach
*/

const arr = [1, 0, 2, 3, 0, 4, 0, 1];

const temp = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    temp.push(arr[i]);
  }
}

for (let i = 0; i < arr.length; i++) {
  if (temp[i]) {
    arr[i] = temp[i];
  } else {
    arr[i] = 0;
  }
}

console.log(arr); // [1 ,2 ,3 ,4 ,1 ,0 ,0 ,0]

/*
Complexity Analysis
--------------------
Time Complexity: O(2N)
Space Complexity: O(N)
*/

// ####################################################################

/*
    Optimal Approach
*/

const arr2 = [1, 0, 2, 3, 0, 4, 0, 1];
let j = -1;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] == 0) {
    j = i;
    break;
  }
}

for (let i = j + 1; i < arr2.length; i++) {
  if (arr2[i] !== 0) {
    let temp = arr2[i];
    arr2[i] = arr2[j];
    arr2[j] = temp;
    j++;
  }
}
console.log(arr2); // [1 ,2 ,3 ,4 ,1 ,0 ,0 ,0]

/*
Complexity Analysis
--------------------
Time Complexity: O(N)
Space Complexity: O(1)
*/
