// All Objects in Javascript have access to constructor property that returns a constructor function that created it.
// built in constructor functions
// arrays and functions are objects in javascript

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love React`
    );
  };
}

const john = new Person('john', 'sanders');
// returns constructor function
console.log(john.constructor);

const bob = {};
// object constructor
console.log(bob.constructor);
const list = [];
// array constructor
console.log(list.constructor);
const sayHi = function () {};
// function constructor
console.log(sayHi.constructor);
// by invoking john's new Person constructor function we can still refer to the fullName method
const susy = new john.constructor('susy', 'carpenter');
susy.fullName();
