// non premetive (sallow copy) -callByRefrence

const arr = [1, 2, 35, 5];
arr[1] = 5;
console.log(arr, typeof arr); // array also have have __proto__

const arr2 = new Array(1, 2, 4, 5, 6, 7, 8);
// console.log(arr2, typeof arr2); // value , object

// array methods
arr.push(12); // retuen length and add element
let returnvalue = arr.pop(); // return removed element
console.log(returnvalue);

arr.unshift(15); // quite need more calculation and return lenth and add element at start
arr.shift(); // return first removed element
console.log(arr);

console.log(arr.indexOf(5)); // return -1 when not found
console.log(arr.includes(15)); // bool

returnvalue = arr.join(" ");
console.log(returnvalue, typeof returnvalue); // element , string

// diffrence b/t slice{retuen only value upto n not n} and splice {return upto n and removed it from orignal array }

returnvalue = arr.slice(1, 2);
console.log(returnvalue);

returnvalue = arr.splice(1, 2);
console.log(returnvalue);
console.log(arr);

// more on array
const arr1 = [1, 2, 3, 4];
const arr3 = [5, 6, 7, 8];

arr1.push(arr3);
console.log(arr1); // [ 1, 2, 3, 4, [ 5, 6, 7, 8 ] ]
arr1.pop();
returnvalue = arr1.concat(arr3);
console.log(returnvalue);

// using spread operator
returnvalue = [...arr1, ...arr3];
console.log(returnvalue);

// for nested to simple depth of Leval1
const newArr = [1, [4, 5, 6, 7, [8, 5, [7, 2, 6]]]];

console.log(newArr.flat(Infinity));

// array obj

console.log(Array.from("roushan"));
console.log(Array.from({name:"roushan"})); //[] not directly able to convert it use order {key/value}
console.log(Array.isArray("roushan"));
console.log(Array);
console.log(Array.of(100,45455,4,65,64,5,5,5,7));