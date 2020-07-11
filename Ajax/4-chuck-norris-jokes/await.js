const content = document.querySelector(".content");
const category = document.querySelector(".category");

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  fetchJoke();
});

category.addEventListener("change", () => {
  fetchJoke();
});

const fetchJoke = async () => {
  try {
    getUrl();
    const data = await fetch(url);
    const response = await data.json();
    displayData(response);
  } catch(error) {
    console.error(error)
  }
};

const getUrl = () => {
  category.value
    ? (url = `https://api.chucknorris.io/jokes/random?category=${category.value}`)
    : (url = `https://api.chucknorris.io/jokes/random`);
};

const displayData = ({ value: joke }) => {
  content.textContent = joke;
};