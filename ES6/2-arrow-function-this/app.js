// Arrow Functions or Fat Arrow Functions
// reg function : 'this' refers parent, left of the dot
// arrow function : refers it's current surrounding scope
const bob = {
  firstName: "bob",
  lastName: "smith",
  sayName: function() {
    console.log(this);
    setTimeout(() => {
      console.log(this);
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }, 1000);
  },
};

const anna = {
  firstName: "anna",
  lastName: "sanders",
  sayName: () => {
    console.log(this);
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

bob.sayName();
anna.sayName();

const btn = document.querySelector('.btn');

// using arrow function this refers to global window object that doesn't have a property of style
// btn.addEventListener('click', () => this.style.color = 'black');

btn.addEventListener("click", function() {
  this.style.color = "black"
});