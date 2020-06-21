// nested objects
// set variable as property value
// dot notation vs bracket notation

const age = 40;
let random = 'random-value'
random = 'age';

const person = {
  name: 'john',
  age: age,
  married: true,
  siblings: ['anna', 'peter'],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
  job: {
    title: 'developer',
    company: {
      name: 'coding addict',
      address: '123 main street',
    },
  },
  'random-value': 'random',
  random: random
};
console.log(person.job);
console.log(person.job.company);
console.log(person.job.company.name);
console.log(person.job.company.address);
console.log(person.age);
console.log(person['random-value']);
console.log(person['random']);