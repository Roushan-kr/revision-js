const score = 400;
const number = new Number(400);
console.log(number);
/*  const number =new  Number(400) // [Number: 400]
                const number =Number(400) // 400
 */

console.log(number.toFixed(2)); // upto decimal               

// roundOff Value upto nth digit in string  
console.log(number.toPrecision(4)); //400.0
// but 
const num =14445564.21
console.log(num.toPrecision(3)); // 1.56e+4

// for UI
console.log(num.toLocaleString("en-in")); // 1,44,45,564.21

// safe side {to limit}
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isNaN(NaN));

// Maths
console.log(Math.round(544.54)); // nearest int value
console.log(Math.abs("-45")); //45
console.log(Math.ceil(45.2)); //46
console.log(Math.floor(45.72)); //45
console.log(Math.max(6,654,64,5,64,6,65,));
console.log(Math.min(6,654,64,5,64,6,65,));

console.log(Math.random()); // value b/t 0-1 in decimal 

const MAX= 20, MIN =10
console.log(Math.floor((Math.random()*(MAX-MIN +1))+ MIN));
