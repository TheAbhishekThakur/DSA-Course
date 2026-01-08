// How to make a JavaScript function run only one time?

// Using Closure
const runOnce = (function () {
  let executed = false;

  return function () {
    if (executed) return;
    console.log("Executed only once!");
    executed = true;
  };
})();

runOnce(); // ✅ Executes
runOnce(); // ❌ Ignored

// Using Event Listener { once: true } (DOM)
<button id="button">Click Me</button>;

document.getElementById("button").addEventListener(
  "click",
  () => {
    console.log("Clicked");
  },
  { once: true }
);
