// default parameters, arrow function gotchas

const john = 'John';
const peter = 'Peter';

// default parameter of Susan
function sayHi(person = 'Susan') {
  console.log(`Hi ${person}`);
}
const sayHello = (person = 'BOB') => console.log(`Hello ${person}`);

sayHi();
sayHello(peter);
