/*

***** Single Number *****

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 
Example 1:
=========
Input: nums = [2,2,1]
Output: 1

Example 2:
==========
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
==========
Input: nums = [1]
Output: 1


*/


// Brute Force Approach
const arr = [4, 1, 2, 1, 2];

const obj = {};

for (let i = 0; i < arr.length; i++) {
  if (!obj[arr[i]]) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]] = obj[arr[i]] + 1;
  }
}

let val;
for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] === 1) {
    val = arr[i];
  }
}
console.log(val); // 2


/*

Time Complexity: O(n)
Space Complexity: O(n)

*/

// Optimal Approach
const arr2 = [4, 1, 2, 1, 2];
const singleNumber = (nums) => {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};
console.log(singleNumber(arr2)); // 4

/*

Time Complexity: O(n)
Space Complexity: O(1)

*/