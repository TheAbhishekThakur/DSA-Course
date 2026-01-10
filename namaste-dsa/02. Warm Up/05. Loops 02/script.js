/*
 Q1. Write a function that searches for an element in an array
 and returns the index of the element if found, otherwise returns -1.
*/

function searchElement(arr, target) {
    if (arr.length === 0) {
        return -1;
    }
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return i;
        }
    }
    return -1;
}

const result1 = searchElement([10, 20, 30, 40, 50], 30);
console.log(result1); // Output: 2

const result2 = searchElement([10, 20, 30, 40, 50], 60);
console.log(result2); // Output: -1

// ******************************************************

// Q2. Write a function that returns the number of negative numbers in an array.

function countNegativeNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}

const negativeCount1 = countNegativeNumbers([10, -5, 3, -1, 0, -7]);
console.log(negativeCount1); // Output: 3

const negativeCount2 = countNegativeNumbers([1, 2, 3, 4, 5]);
console.log(negativeCount2); // Output: 0

// ******************************************************

// Q3. Write a function that find the maximum number in an array.


function findMaximum(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const arr = [10, 5, 20, 8, 15];
const maxNumber = findMaximum(arr);
console.log(maxNumber); // Output: 20

const emptyArrayMax = findMaximum([]);
console.log(emptyArrayMax); // Output: null

// ******************************************************

// Q4. Write a function that finds the smallest number in an array.

function findMinimum(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

const arr2 = [10, 5, 20, 8, 15];
const minNumber = findMinimum(arr2);
console.log(minNumber); // Output: 5

const emptyArrayMin = findMinimum([]);
console.log(emptyArrayMin); // Output: null