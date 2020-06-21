// Blue Print
// Constructor Functions use capitalisation in naming functions
// Constructor Functions use this keyword
// new - creates new object, points to it, omit explicit return

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love React`
    );
  }
  console.log(this)
}

const john = new Person("john", "anderson");
john.fullName();
const peter = new Person("peter", "sanders");
peter.fullName();
const bob = new Person("bob", "jordan");


function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} and I love JS`
      );
    },
  };
}
