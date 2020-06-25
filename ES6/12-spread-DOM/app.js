// Spread Operator ...

const headings = document.querySelectorAll('h1');
const result = document.getElementById('result');

// Allows an iterable to spread/expand individually inside receiver
// Split into single items and copy them.
const text = [...headings]
  .map((item) => `<p><span class='btn'>${item.textContent}</span></p>`)
  .join("");

result.innerHTML = text;