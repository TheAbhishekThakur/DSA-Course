/*

* Check whether two given strings are anagrams of each other. 
* Two strings are anagrams if they contain the same characters with the same frequency, ignoring order.

* Input :- "listen"
* Output :- "silent" => true

* Input :- "anagram"
* Output :- "nagaram" => true

* Input :- "rat"
* Output :- "car" => false

*/

// 1st Approach

const str1 = "anagram";
const str2 = "nagaram";

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const obj = {};

  for (let i = 0; i < str1.length; i++) {
    obj[str1[i]] = (obj[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!obj[str2[i]]) {
      return false;
    }
    obj[str2[i]]--;
  }
  return true;
}

console.log(checkAnagram(str1, str2));

// 2nd Approach

const s = "anagram";
const t = "nagaram";

function checkAnagram(s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  return s === t;
}
checkAnagram(s, t);
