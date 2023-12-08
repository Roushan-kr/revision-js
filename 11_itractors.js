array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array.length; i++) {
  if (array[i] === 2) continue;
  if (array[i] === 7) break;
  console.log(array[i]);
}

let value = 0;
while (value != 5) {
  console.log(value);
  value++;
}

do {
  //
  console.log(value);
  value++;
} while (value != 6);

const numArray = [11, 12, 13, 14, 15, 16, 17, 18];

for (const num in numArray) {
  console.log(num, numArray[num]); // string
  // provides index
}

for (const num of numArray) {
  console.log(num);
  // provide value
}

// Map as obj
const map = new Map(); // use NaN as a Map key
map.set("IN", "india");
map.set("US", "United States");
map.set("FR", "France");
map.set("FR", "France");

map.forEach((contry) => console.log(contry));
console.log(map);

for (const contry of map) {
  console.log(contry);
}

// using array destructuring
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

// for object itraction
const games = {
  game1: "GTA",
  game2: "Asfault",
};
// of not work
for (const game in games) {
  console.log(game, games[game]);
}

const bck = {
  NaN: "hi",
  NaN: "hello",
  NaN: "hey", //update previos value
  undefined: "naBhaiNa",
};

for (const key in bck) {
  console.log(`${key}:${bck[key]}`);
}
console.log(bck.length); // undefined

const dbData = [
  {
    lang: "js",
    fullname: "javaScript",
  },
  {
    lang: "cpp",
    fullname: "C++",
  },
];
// forEach loop not return anyThing
dbData.forEach((e)=>console.log(e.fullname))

const myNum = [1,2,3,4,5,6]
let result =myNum.filter((num)=>num%2!=0) // return true value 
console.log(result);

result = myNum.map((num)=>num+10).filter((num)=>((num%3&& num%5)!=0))
console.log(result);

const fact =myNum.reduce((acc,crrVal)=>acc*crrVal,1)
console.log(fact);