// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// Objects

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

// Assign variable names and unpack items from object
const { first: firstName, last, city, siblings: { sister: favoriteSibling }} = bob;
console.log(firstName, last, city, favoriteSibling);

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister);
