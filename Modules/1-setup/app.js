// global name space / hard to navigate

const people = [
  { name: "anna", job: "CEO" },
  { name: "bob", job: "back-end developer" },
  { name: "john", job: "frond-end developer" },
  { name: "susan", job: "designer" },
  { name: "stephen", job: "copy writer" },
];

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

const showPeople = () => {
  const newPeople = people
    .map((person) => {
      const { name, job } = person;
      return `<p>${name}: <strong>${job}</strong></p>`;
    })
    .join('');
  container.innerHTML = newPeople;
};

btn.addEventListener('click', () => {
  showPeople();
});
