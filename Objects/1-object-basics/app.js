// Objects Basics

/*
Objects are collections of key (property) value pairs
Property values can be strings, numbers, booleans, arrays and functions however if the property value is a function it's called a method
*/

// object literal syntax,{}
// dot notation

const person = {
  name : 'matthijs',
  age: 38,
  married: true,
  siblings: ['anna', 'peter'],
  greet: function (name){
    console.log(`Hello my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello my name is ${name}`);
  }
}
console.log(person);
console.log(person.name);

const name = person.name;
console.log(name);
person.age = 60;
person.city = "Chicago";
// delete property
delete person.siblings;
console.log(person);
