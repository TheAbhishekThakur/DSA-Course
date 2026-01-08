/*

Given an array of numbers and a target value,
find all pairs of elements whose sum is equal to the target value.

Input:
arr = [1, 2, 3, 4, 5]
target = 5

Output:
[[1, 4], [2, 3]]

*/

function findPairs(arr, target) {
  const pairs = [];
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    const second = target - arr[i];
    if (set.has(second)) {
      pairs.push([second, arr[i]]);
    }
    set.add(arr[i]);
  }

  return pairs;
}

const arr = [1, 3, 4, 3, 5, 2];
const target = 7;
console.log(findPairs(arr, target));
