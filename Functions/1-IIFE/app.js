// IIFE Immediately-Invoked Function Expression
// older approach - new Modules
// simple approach to avoid global scope pollution
// good way at protecting the scope of your function and the variables within it.

// global namespace, extra steps
const num1 = 30;
const num2 = 50;
// const num1 = 70;

function add() {
  console.log(`the result is : ${num1 + num2}`);
}
add();

// IIFE Immediately-Invoked Function Expression
(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`the result is : ${num3 + num4}`);
})();

console.log(num1);

(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`the result is : ${num3 + num4}`);
})();

// Can pass arguments into IFFE
(function (num3, num4) {
  console.log(`the result is : ${num3 + num4}`);
})(500, 900);

// Can IFFE assign result to variable
const result = (function (num3, num4) {
  console.log(`the result is : ${num3 + num4}`);
  return num3 + num4;
})(500, 900);

console.log(result);
