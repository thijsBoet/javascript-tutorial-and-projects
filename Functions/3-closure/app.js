// Closure
// closure gives you an access to an outer function's scope from an inner function
// make private variables with closures

function outer() {
  let privateVar = 'secret';
  function inner() {
    console.log(`hello there secret is : ${privateVar} `);
  }
  return inner;
  inner();
}
// console.log(privateVar);

outer()();

const value = outer();
console.log(value);
value();

// basic/complete closures example
function newAccount(name, initialBalance){
  let balance = initialBalance;
  function showBalance(){
    console.log(`Hey ${name}, your balance is ${balance}`)
  }
  function deposit(amount){
    balance += amount;
    showBalance();
  }
  function withdraw(amount){
    amount > balance 
      ? console.log(`Hey ${name}, insufficient funds`)
      : balance -= amount;
    showBalance();
  }
  return { showBalance, deposit, withdraw };
};

const john = new newAccount('john', 300);
const bob = new newAccount('bob', 1000);

john.deposit(700);
john.withdraw(1000);
john.deposit(300);
john.withdraw(100);
john.withdraw(250);

bob.showBalance();