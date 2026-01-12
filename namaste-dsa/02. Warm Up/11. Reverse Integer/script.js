/*

Question: Reverse the digits of an integer.
Example:
Input: 123
Output: 321

Input: -456
Output: -654

Input: 1200
Output: 21

*/

function reverseInteger(num) {

    let originalNum = num;
    num = Math.abs(num);
    let reversed = 0;

    while (num > 0) {
        let mod = num % 10;
        reversed = reversed * 10 + mod;
        num = Math.floor(num / 10);
    }

    let limit = Math.pow(2, 31);
    if (reversed > limit || reversed < -limit) {
        return 0;
    }
    if (originalNum < 0) {
        reversed = -reversed;
    }
    return reversed;
}

console.log(reverseInteger(123)); // Output: 321

console.log(reverseInteger(-456)); // Output: -654

console.log(reverseInteger(1200)); // Output: 21