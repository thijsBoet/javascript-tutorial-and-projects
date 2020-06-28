const btn = document.querySelector(".btn");
const info = document.querySelector(".info");

function getData(url) {
  const ajax = new XMLHttpRequest();
  console.log(ajax);

  // initializes request ('CRUD method', url, async/sync, user, password)
  ajax.open("GET", url, true);

  // ajax.onreadystatechange = function () {
  //   if (this.status === 200 && this.readyState === 4) {
  //     info.textContent = this.responseText;
  //   }
  // };

  // more modern method
  ajax.onload = function (){
    if (this.status === 200 && this.readyState === 4) {
      info.textContent = this.responseText;
    } else {
      console.log(this.statusText)
    }
  }

  ajax.onerror = function () {
    console.log('there was an error')
  }
  // Sends XMLHttpRequest to server
  ajax.send();
}

btn.addEventListener('click', () => {
  getData("info.txt");
});

