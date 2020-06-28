const btn = document.querySelector(".btn");
const cartInfo = document.querySelector(".cartInfo");
const itemInfo = document.querySelector(".itemInfo");

btn.addEventListener('click', function(){
  getData('cart.json');
});

function getData(url) {
  const ajax = new XMLHttpRequest();
  ajax.open('GET', url, true);

  ajax.onload = function() {
    if(this.status === 200) {
      const data = JSON.parse(this.responseText);
      cartInfo.innerHTML = `<p>${data.cartInfo.name}</p><p>${data.cartInfo.store}</p>`;

      let display = "";
      data.cartItem.forEach(function(item) {
        display += `
        <div class="item">
          <p>Item id: ${item.id}</p>
          <p>Item name: ${item.name}</p>
          <p>Item price: ${item.price}</p>
        </div>`
      });
      itemInfo.innerHTML = display;
    } else {
      console.log(this.statusText)
    }
  }

  ajax.onerror= function(){
    console.log("there was an error")
  }

  ajax.send();
}