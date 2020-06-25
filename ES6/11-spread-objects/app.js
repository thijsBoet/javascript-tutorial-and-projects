// Spread Operator ...
// Allows an iterable to spread/expand individually inside receiver
// Split into single items and copy them.
// ES2018 - ES8

const person = { name: 'john', job: 'developer' };
console.log(person);

// Adds new key/value pairs to newPerson
const newPerson = { ...person, city: 'chicago', name: 'peter' };
console.log(newPerson);

// Existing key/value pairs will be overwritten
const newestPerson = { ...person, name: 'peter' };
console.log(newestPerson);
