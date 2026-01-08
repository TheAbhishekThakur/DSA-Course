/* Given a sentence, capitalize the first letter of each word and return the updated sentence.

* Input: ""hello world from javascript"
* Output: "Hello World From Javascript"

*/
const str = "this is a paragraph";
const arr = str.trim().split("");

arr[0] = arr[0].toUpperCase();

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === " ") {
    arr[i + 1] = arr[i + 1].toUpperCase();
  }
}

console.log(arr.join(""));
