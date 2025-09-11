/*
    Optimal Approach
*/

const findMaxConsecutiveOnes = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let count = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      if (count > max) {
        max = count;
      }
    } else {
      count = 0;
    }
  }
  return max;
};

const result = findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
console.log(result); // 3

/*
Complexity Analysis
--------------------
Time Complexity: O(N)
Space Complexity: O(1)
*/
