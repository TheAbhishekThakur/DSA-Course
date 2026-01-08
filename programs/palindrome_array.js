// Check if an array is a palindrome?

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
