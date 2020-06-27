// callbacks, promises, async/await

// then catch - pass another callback
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {});

// PROMISES - Pending, Resolved, Rejected
const promise = new Promise((resolve, reject) => {
  let value = true;
  if (value) {
    resolve('hey value is true');
  } else {
    reject(`there was a error, value is false`);
  }
});

// Use .then to access Resolved value
promise
  .then((data) => {
    console.log(data);
  })
// Use .catch to access Rejected value
  .catch((err) => {
    console.log(err);
  });

console.log(promise);