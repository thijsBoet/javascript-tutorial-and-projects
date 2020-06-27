// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc
// callbacks, promises, async/await

boilWater();
console.log(`chop carrot`);

function boilWater(time) {
  console.log("boiling...");
  setTimeout(() => {
    console.log("water boiling");
    console.log("add carrots.")
    setTimeout(() => {
      console.log("carrots done");
      console.log("add onions");
      setTimeout(() => {
        console.log("onions done");
        console.log("serve dish");
      }, 1000)
    }, 1000);
    console.log("chop onion");
  }, 1000);
}

