const arr = [1, 2, 3, 4, 5];
// Output: 2,3,4,5,1

const rotateLeft = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  let first = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = first;
  return arr;
};

console.log(rotateLeft(arr));

/*
Complexity Analysis
--------------------
Time Complexity: O(n)
Space Complexity: O(1)
*/
