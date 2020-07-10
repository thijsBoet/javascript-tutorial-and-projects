const content = document.querySelector(".content");
const category = document.querySelector(".category");

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  fetchJoke();
});

category.addEventListener("change", () => {
  fetchJoke();
});

const fetchJoke = () => {
  getUrl();
  getData(url)
    .then((response) => displayData(response))
    .catch((error) => console.log(error));
}

const getUrl = () => {
  category.value
    ? (url = `https://api.chucknorris.io/jokes/random?category=${category.value}`)
    : (url = `https://api.chucknorris.io/jokes/random`);
};

const getData = (url) => {
  return new Promise((resolve, reject) => {
    ajax = new XMLHttpRequest();
    ajax.open("GET", url, true);
    ajax.send();
    ajax.onreadystatechange = function () {
      if (ajax.readyState !== 4) return;
      if (ajax.status === 200) {
        resolve(ajax.responseText)
      } else {
        reject({
          status: ajax.status,
          text: ajax.statusText,
        });
      }
    };
  })
};

const displayData = (data) => {
  const { value: joke } = JSON.parse(data);
  content.textContent = joke;
}