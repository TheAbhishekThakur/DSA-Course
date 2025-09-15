/*
    Brute Force Approach - Using includes function
*/
const arr = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4];

const result = [];

for (let i = 0; i < arr.length; i++) {
  if (!result.includes(arr[i])) {
    result.push(arr[i]);
  }
}
console.log(result);

/*
Complexity Analysis
--------------------
Time Complexity: O(N^2)
Space Complexity: O(N)
*/

// ############################################################

/*
    Better Approach - Using set
*/

const arr2 = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4];
const setData = new Set([]);

for (let i = 0; i < arr2.length; i++) {
  if (!setData.has(arr2[i])) {
    setData.add(arr2[i]);
  }
}

const data = [];
for (const item of setData) {
  if (item) {
    data.push(item);
  }
}
console.log(data);

/*
Complexity Analysis
--------------------
Time Complexity: O(N)
Space Complexity: O(N)
*/

// ############################################################

/*
    Better Approach - Using Object
*/

const arr3 = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4];
const obj = {};
for (let i = 0; i < arr3.length; i++) {
  if (!(arr3[i] in obj)) {
    obj[arr3[i]] = arr3[i];
  }
}

const data2 = [];
for (const [_, value] in obj) {
  if (value) {
    data2.push(value);
  }
}
console.log(data);

/*
Complexity Analysis
--------------------
Time Complexity: O(N)
Space Complexity: O(N)
*/

// ############################################################

/*
    Optimal Approach
*/

const arr4 = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4];

let i = 0;
for (let j = 1; j < arr4.length; j++) {
  if (arr4[i] !== arr4[j]) {
    arr4[i + 1] = arr4[j];
    i++;
  }
}
i = i + 1;

const uniqueArr = arr4.slice(0, i);
console.log(uniqueArr);

/*
Complexity Analysis
--------------------
Time Complexity: O(N)
Space Complexity: O(N)
*/
