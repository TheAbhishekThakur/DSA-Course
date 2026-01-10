// Q5. Write a function that finds the second largest number in an array.

function secondLargest(arr) {
    if (arr.length < 2) {
        return null;
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }

        if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

const result = secondLargest([4, 9, 0, 2, 8, 7, 1]);
console.log(result); // Output: 8

const result2 = secondLargest([4, 9, 0, 2, 8, 9, 10, 1]);
console.log(result2); // Output: 9
