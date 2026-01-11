/*

Question: Check if a given integer is a palindrome. 
An integer is a palindrome when it reads the same backward as forward.

*/

function isPalindrome(num) {
    if (num == undefined || !Number.isInteger(num)) {
        throw new TypeError("Invalid Input")
    }
    if (num < 0) {
        return false;
    }
   
    let temp = false;
    let originalNum = num;
    let sum = 0;

    while (num > 0) {
        let mod = num % 10;
        num = Math.floor(num / 10);
        sum = sum * 10 + mod;
    }
    if (originalNum === sum) {
        temp = true;
    }
    return temp;
}

const result1 = isPalindrome(121);
console.log(result1); // Output: true

const result2 = isPalindrome(-121);
console.log(result2); // Output: false

const result3 = isPalindrome(10);
console.log(result3); // Output: false

const result4 = isPalindrome(12321);
console.log(result4); // Output: true

const result5 = isPalindrome(0);
console.log(result5); // Output: true