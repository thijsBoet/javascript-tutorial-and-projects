const setDrink = section => {
  section.addEventListener('click', function (e) {
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    // JSON (drink already a string)
    localStorage.setItem("drink", id)
  });
};

export default setDrink;