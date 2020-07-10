const btn = document.querySelector('.btn');
const url = "./api/people.json";
btn.addEventListener('click', () => {
  getData();
})

const getData = () => {
  const ajax = new XMLHttpRequest();

  ajax.open("GET", url, true);
  ajax.onreadystatechange = function () {
    if (ajax.readyState === 4 && ajax.status === 200) {
      const people = JSON.parse(ajax.responseText);
      const displayData = people.map(person => {
        return `<p>${person.name}</p>`
      }).join("");
      
      const element = document.createElement('div');
      element.innerHTML = displayData;
      document.body.appendChild(element);
    } else {
      console.log({
        status: ajax.status,
        text: ajax.statusText,
        state: ajax.readyState,
      });
    }
  };

  ajax.onerror = function () {
    console.log("XMLHttpRequest error");
  };

  ajax.send();
}


