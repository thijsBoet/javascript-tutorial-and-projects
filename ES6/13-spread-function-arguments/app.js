// Spread Operator ...

const numbers = [23, 45, 66, 88, 2345];

// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.
console.log(Math.max(...numbers));

const john = ['john', 'sanders'];

const sayHello = (name, lastName) => {
  console.log(`Hello ${name} ${lastName}`);
};

// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.
sayHello(...john);
