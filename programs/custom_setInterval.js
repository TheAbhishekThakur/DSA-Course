// Create your own functions that exactly works like setInterval/clearInterval using setTimeout/clearTimeout.

function customInterval() {
  let intervalId = 0;
  const intervalObj = {};

  function mySetInterval(callback, delay, ...args) {
    if (typeof callback !== "function") {
      throw new TypeError("Callback should be a function!");
    }
    intervalId++;

    function repeat() {
      intervalObj[intervalId] = setTimeout(() => {
        callback(...args);
        if (intervalObj[intervalId]) {
          repeat();
        }
      }, delay);
    }
    repeat();
    return intervalId;
  }

  function myClearInterval(id) {
    clearTimeout(intervalObj[id]);
    delete intervalObj[id];
  }

  return {
    mySetInterval,
    myClearInterval,
  };
}
const { mySetInterval, myClearInterval } = customInterval();

const id = mySetInterval(() => {
  console.log("mySetInterval");
}, 1000);

function clearTheInterval() {
  myClearInterval(id);
}

clearTheInterval();
