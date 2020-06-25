// Destructuring

// objects into variables
// Arrays
const fruits = ["orange", "banana", "lemon"];
const orange = fruits[0];
const banana = fruits[1];
const lemon = fruits[2];
console.log(orange, banana, lemon);

// Destructuring
const friends = ["john", "peter", "bob", "anna", "kelly"];
// Assign variable names and unpack items from array
const [firstName, , thirdName, , fifthName] = friends;
// Can skip a value by adding an extra comma ,,
console.log(firstName, thirdName, fifthName);

// swap array values shorthand
let first = 1;
let second = 2;

[first, second] = [second, first];
console.log(first);
console.log(second);