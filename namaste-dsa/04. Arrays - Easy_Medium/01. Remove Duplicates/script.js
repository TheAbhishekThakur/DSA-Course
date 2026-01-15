/*

Question 1: Remove duplicates from a sorted  array. You can use extra space for the new array.

Example:
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]

Input: ['a', 'b', 'b', 'c', 'a']
Output: ['a', 'b', 'c']

Input: []
Output: []

*/

function removeDuplicates(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}

const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(result); // Output: [1, 2, 3, 4, 5]

const result2 = removeDuplicates(["a", "b", "b", "c", "c", "d"]);
console.log(result2); // Output: ['a', 'b', 'c', 'd']

const result3 = removeDuplicates([]);
console.log(result3); // Output: []

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/

// ************************************************************************

/*

Question 2: Remove duplicates from a sorted  array. You can't use extra space for the new array.
Return the count of unique elements.

Example:
Input: [1, 2, 2, 3, 4, 4, 5]
Output: 5

Input: ['a', 'b', 'b', 'c', 'a']
Output: 3

Input: []
Output: 0

Note: Leetcode: 26. Remove Duplicates from Sorted Array

*/

function removeDuplicatesInPlace(arr) {
  if (arr.length === 0) return 0;
  let uniqueIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[uniqueIndex]) {
      uniqueIndex++;
      arr[uniqueIndex] = arr[i];
    }
  }
  return uniqueIndex + 1;
}

const result4 = removeDuplicatesInPlace([1, 2, 2, 3, 4, 4, 5]);
console.log(result4); // Output: 5

const result5 = removeDuplicatesInPlace(["a", "b", "b", "c", "c", "d"]);
console.log(result5); // Output: 4

const result6 = removeDuplicatesInPlace([]);
console.log(result6); // Output: 0

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/

// ************************************************************************
/*
    Using Set to remove duplicates from an array.
*/

function removeDuplicatesUsingSet(arr) {
  return Array.from(new Set(arr));
}

const result7 = removeDuplicatesUsingSet([1, 2, 2, 3, 4, 4, 5]);
console.log(result7); // Output: [1, 2, 3, 4, 5]

/*
    Time Complexity: O(n) for Set method.
    Space Complexity: O(n) for Set method.
*/

// ************************************************************************
/*
    Using filter to remove duplicates from an array.
*/

function removeDuplicatesUsingFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

const result8 = removeDuplicatesUsingFilter([1, 2, 2, 3, 4, 4, 5]);
console.log(result8); // Output: [1, 2, 3, 4, 5]

/*
    Time Complexity: O(n^2) for filter method due to indexOf inside filter.
    Space Complexity: O(n) for both Set and filter methods.
*/

// ************************************************************************
/*
    Using reduce to remove duplicates from an array.
*/

function removeDuplicatesUsingReduce(arr) {
  return arr.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
}

const result9 = removeDuplicatesUsingReduce([1, 2, 2, 3, 4, 4, 5]);
console.log(result9); // Output: [1, 2, 3, 4, 5]
