// Spread Operator ...
// Allows an iterable to spread/expand individually inside receiver
// Split into single items and COPY them.

const udemy = 'udemy';
// splits into single letters array
const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';

// spread operator splits iterable into all singular items
const friends = [bestFriend, ...boys, ...girls];
console.log(friends);

// with a variable assignment it is a reference not a COPY like with a spread operator
const newFriends = friends;
newFriends[0] = 'karina';
console.log(newFriends);
console.log(friends);
