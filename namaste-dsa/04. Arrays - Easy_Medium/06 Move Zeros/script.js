/*

**** Move Zeros ****

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
==========
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
==========
Input: nums = [0]
Output: [0]

*/


const nums = [0, 1, 0, 3, 12];
const x = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
        const temp = nums[i];
        nums[i] = nums[x];
        nums[x] = temp;
        x++;
    }
}
console.log(nums); // [1, 3, 12, 0, 0]

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/