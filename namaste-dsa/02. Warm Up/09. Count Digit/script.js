/*

Q1. Write a function which returns the count of digits in a given number.

Example1:
Input: 12345
Output: 5

Example2:
Input: 0
Output: 1

Example3:
Input: -6789
Output: 4
*/

function countDigits(num) {
    if (num == undefined || !Number.isInteger(num)) {
        throw new TypeError("Invalid Input")
    }
    if (num === 0) {
        return 1;
    }
    // Converting negative number to positive
    num = Math.abs(num);
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

const result = countDigits(12345);
console.log(result); // Output: 5

const result2 = countDigits(0);
console.log(result2); // Output: 1

const result3 = countDigits(-6789);
console.log(result3); // Output: 4

/*

There are 5 JS's math important functions to deal with numbers:

1. Number.isInteger(): This function checks whether the provided value is an integer or not. It returns true if the value is an integer, otherwise false.

2. Math.abs(): This function returns the absolute value of a number. It converts negative numbers to positive numbers.

3. Math.floor(): This function rounds a number down to the nearest integer.

4. Math.ceil(): This function rounds a number up to the nearest integer.

5. Math.round(): This function rounds a number to the nearest integer. If the fractional part is 0.5 or greater, it rounds up; otherwise, it rounds down.

*/