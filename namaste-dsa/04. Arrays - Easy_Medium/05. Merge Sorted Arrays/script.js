// Merge Sorted Arrays


// Brute Force Approach

const nums11 = [1, 2, 3, 0, 0, 0];
const nums22 = [2, 5, 6];
const m1 = 3;
const n1 = 3;

let j = 0;

for(let i=0; i< m1+ n1; i++) {
    if(nums11[i] !== 0) {
        nums11[i] = nums22[j];
        j++;
    }
}

nums11.sort((a, b) => a - b);
console.log(nums11);


// Better Approach

const nums1 = [1, 2, 3];
const nums2 = [2, 5, 6];
const m = 3;
const n = 3;

let nums1Copy = [...nums1];
let p1 = 0;
let p2 = 0;

for (let i = 0; i < m + n; i++) {
  if(p2 >= n || (p1 < m && nums1[p1] < nums2[p2])) {
    nums1[i] = nums1Copy[p1];
    p1++;
  } else {
    nums1[i] = nums2[p2];
    p2++;
  }
}

console.log(nums1)


// Optimal Approach

