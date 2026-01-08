/* Given an array, check whether it is a palindrome. An array is considered a palindrome if it reads the same forward and backward.

Input: [1, 2, 3, 2, 1]
Output: true

Input: [1, 2, 3, 4]
Output: false

*/
const arr = [1, 2, 3, 2, 1];

function isPalindrome(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    right--;
    left++;
    return true;
  }
}

const result = isPalindrome(arr);
console.log(result);
