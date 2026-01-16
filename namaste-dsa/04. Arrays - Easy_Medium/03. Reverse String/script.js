/*

Question: Write a function that reverses a string. The input string is given as an array of characters "s".
You must do this by modifying the input array in-place with O(1) extra memory.

Note: Leetcode: 344. Reverse String
Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/

function reverseString(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        const temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
    return s;
}

const result1 = reverseString(["h", "e", "l", "l", "o"]);
console.log(result1); // Output: ["o", "l", "l", "e", "h"]

const result2 = reverseString(["H", "a", "n", "n", "a", "h"]);
console.log(result2); // Output: ["h", "a", "n", "n", "a", "H"]

// Time Complexity: O(n), where n is the length of the string.
// Space Complexity: O(1), as we are modifying the input array in-place.


// ************************************************************************

// OR

function reverseStringAlt(s) {
    const half = Math.floor(s.length / 2);
    for (let i = 0; i < half; i++) {
        const temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
    }
    return s;
}
console.log(reverseStringAlt(["h", "e", "l", "l", "o"])); // Output: ["o", "l", "l", "e", "h"]

// Time Complexity: O(n), where n is the length of the string.
// Space Complexity: O(1), as we are modifying the input array in-place.