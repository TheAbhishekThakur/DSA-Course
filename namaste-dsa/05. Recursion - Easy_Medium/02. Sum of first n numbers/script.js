/*
    Sum of first n numbers

    Given a number n, find the sum of first n numbers using recursion.

    Example 1:
    Input: n = 3
    Output: 6
    Explanation: Sum of first 3 numbers is 1 + 2 + 3 = 6

    Example 2:
    Input: n = 5
    Output: 15
    Explanation: Sum of first 5 numbers is 1 + 2 + 3 + 4 + 5 = 15
*/

function sumOfFirstNNumbers(n) {
    if(n === 0) {
        return 0;
    }
    return n + sumOfFirstNNumbers(n - 1);
}

// Test cases
console.log(sumOfFirstNNumbers(3)); // Output: 6
console.log(sumOfFirstNNumbers(5)); // Output: 15

/*

    Time Complexity: O(n) - The function makes n recursive calls.
    Space Complexity: O(n) - The maximum depth of the recursion is n.

*/