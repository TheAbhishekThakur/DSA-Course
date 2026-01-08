// Capitalize the first letter of each word in a sentence.

let str = "this is a paragraph";
const arr = str.trim().split("");

arr[0] = arr[0].toUpperCase();

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === " ") {
    arr[i + 1] = arr[i + 1].toUpperCase();
  }
}

console.log(arr.join(""));
