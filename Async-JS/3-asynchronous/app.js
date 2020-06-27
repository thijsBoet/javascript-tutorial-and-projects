// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc
// callbacks, promises, async/await

boilWater(10);
console.log(`chop carrot`);

function boilWater(time) {
  console.log('boiling...');
  // setTimeout RUNS in browser while Timeout function waits to run
  // JS interpreter keeps running lines in mean time => console.log(`chop carrot`);
  setTimeout(() => {
    console.log('done.');
  }, time);
}
