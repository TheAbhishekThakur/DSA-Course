/* Write a memoization function that caches the results of an expensive function so
 that repeated calls with the same arguments return the cached result instead of recomputing it.
*/

function memoize(logic) {
  const cache = {};
  return function (n) {
    const str = JSON.stringify(n);
    if (str in cache) {
      return cache[n];
    }

    const data = logic(n);
    cache[str] = data;
    return data;
  };
}

function multiply(n) {
  return n * n;
}

const memoizedMultiply = memoize(multiply);

console.time("a");
const res = memoizedMultiply(10);
console.log(res); // 100
console.timeEnd("a"); // a: 9.347ms

console.time("b");
const res2 = memoizedMultiply(10);
console.log(res2); // 100
console.timeEnd("b"); // b: 0.163ms
