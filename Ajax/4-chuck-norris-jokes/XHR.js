const content = document.querySelector(".content");
const category = document.querySelector(".category");

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  getUrl();
  getData(url);
});

category.addEventListener("change", () => {
  getUrl();
  getData(url);
});

const getUrl = () => {
  category.value
    ? (url = `https://api.chucknorris.io/jokes/random?category=${category.value}`)
    : (url = `https://api.chucknorris.io/jokes/random`);
};

const getData = (url) => {
  ajax = new XMLHttpRequest();
  ajax.open("GET", url, true);
  ajax.send();
  ajax.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const joke = JSON.parse(this.responseText);
      content.textContent = joke.value;
    } else {
      console.log({
        status: ajax.status,
        text: ajax.statusText,
        state: ajax.readyState,
      });
    }
  };
  ajax.onerror = function () {
    console.log("XMLHttpRequest Error");
  };
};
