/* 

* Given an array of integers, find the element with the highest occurrence and
* return an object containing the element and its count.

* Input :- [1,1,2,3,1,4]
* Output :- { accurance: 1, count : 3 };

*/
const arr = [1, 4, 2, 3, 0, 4];

function findAccurance(arr) {
  let accurance;
  let finalCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (finalCount < count) {
      accurance = arr[i];
      finalCount = count;
    }
  }
  return {
    accurance,
    count: finalCount,
  };
}
let result = findAccurance(arr);
console.log(result);
