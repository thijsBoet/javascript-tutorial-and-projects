/*
Prototypal Inheritance Model
Javascript uses prototypal inheritance model. That means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class. So any properties and methods or prototype can be acessed by every instance. prototype property returns a object
*/

// constructor function 
function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

const john = new Account('john', 200);
const bob = new Account('bob', 0);

// This is a prototype property that is shared by every instance of the constructor/class.
// Any properties and methods or prototype can be acessed by every instance
Account.prototype.bank = 'CHASE';
// Prototypal method
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};
console.log(john.bank);
console.log(bob);

john.deposit(300);
bob.deposit(1000);
