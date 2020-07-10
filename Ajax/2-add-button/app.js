const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  getData();
})

const getData = () => {
  const url = "./api/sample.txt";
  const ajax = new XMLHttpRequest();

  ajax.open("GET", url, true);
  ajax.onreadystatechange = function () {
    if (ajax.readyState === 4 && ajax.status === 200) {
      const text = document.createElement("p");
      text.textContent = ajax.responseText;
      // fetched sample.txt
      document.body.appendChild(text);
    } else {
      console.log({
        status: ajax.status,
        text: ajax.statusText,
      });
    }
  };

  ajax.onerror = function () {
    console.log("XMLHttpRequest error");
  };

  ajax.send();
}


