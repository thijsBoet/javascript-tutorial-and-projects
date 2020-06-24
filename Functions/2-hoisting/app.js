// Hoisting
// function and var declarations are hoisted
// safer to access only after initialized !!!
display();           
          
console.log(display);     // Hoisted from function
console.log(moreComplex); 

const firstName = 'john';
let lastName = 'jordan';
var random = 'random';

moreComplex();            // Hoisted from function that accesses a variables
                          // Must be invoked after variables are initialized
function display() {
  console.log('hello world');
}

function moreComplex() {
  console.log(`${firstName}, ${lastName}, ${random}`);
}
