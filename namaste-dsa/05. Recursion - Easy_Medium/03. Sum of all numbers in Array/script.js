/*
    Sum of all numbers in Array

    Given an array of numbers, find the sum of all numbers using recursion.

    Example 1:
    Input: arr = [1, 2, 3, 4, 5]
    Output: 15
    Explanation: Sum of all numbers is 1 + 2 + 3 + 4 + 5 = 15

    Example 2:
    Input: arr = [10, 20, 30]
    Output: 60
    Explanation: Sum of all numbers is 10 + 20 + 30 = 60
*/

const arr = [1, 2, 3, 4, 5];

function sumAllArrNumbers(n) {
    if (n === 0) {
        return arr[n];
    }
    return arr[n] + sumAllArrNumbers(n - 1);
}

const res = sumAllArrNumbers(arr.length - 1); // 15
console.log(res);

/*
    Time Complexity: O(n) - where n is the length of the array.
    Space Complexity: O(n) - due to the recursive call stack.
*/
