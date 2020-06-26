const people = [ 
  { id: 1, name: 'john'},
  { id: 2, name: 'peter'},
  { id: 3, name: 'anna'}
];

const anna = people.filter(person => person.name === 'anna');
// console.log(anna);
// console.log(anna[0].name);
// console.log(anna[0].id);

// Returns first instance as object
const findAnna = people.find(person => person.name === "anna");
console.log(findAnna);

const indexAnna = people.findIndex(person => person.name === "anna");
console.log(indexAnna);

const grades = ["A", "B", "A", "B", "C"];
const goodGrades = ["A", "B", "A", "B"];

// Checks all instances and returns boolean
const AllGoodGrades = grades.every((grade) => grade !== 'C');
console.log(AllGoodGrades);

// Checks if at least one instance is true and returns boolean
const oneBadGrade = grades.some((grade) => grade === "C");
console.log(oneBadGrade);