/*

  ES6 Classes - Syntactic Sugar for cleaner code
  Prototypal Inheritance

*/

class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }
  // no const, let or var allowed for properties
  bank = 'CHASE'
  // no keyword for methods aka function name()
  deposit(amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
}

// Use new keyword and capitalization with classes
const john = new Account('john', 0);
console.log(john);
console.log(john.name);
john.deposit(500);
console.log(john.bank);