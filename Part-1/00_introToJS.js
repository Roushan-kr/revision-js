//  "use strict"; // use to show this module is using latest JS standers
//  const accouuntId = 1655;
//  let gmail = "example@gmail.com";
//  var passwd = "12345"; //initial day js not know about scope management
//  city = "patna";
/*
"city" allowed when "use strict" not use
also because the issue in block scope var is depricated 
if not assigned then undefined is def exect const
*/
//  accouuntId = 45;  // not allowed
//  console.log(accouuntId);
//  console.log(gmail);
//  console.log(passwd);
//  console.log(city);

// // Data Types
// /*
//     Number 2^53 // console.log(Number.MAX_VALUE);
//     bigint
//     string=""
//     boolean = true/false
//     NaN
//     undefined
//     null => standalone value {obj}
//     symbol=>unique
//     other:- object
//  */

// let name = "roushan"
// let age =18
// let isLogin =true

// // string to num
// name = Number(name)
// console.log(name) // NaN
// console.log(typeof name) // number

// // mean a non proper string to num conversion led to give a type Number but not Value as Number
// // instite it give a NaN

// // num to string

// console.log(String(NaN)) // string -> "NaN"
// console.log(typeof NaN); //number  // 🤷‍♂️
// console.log(typeof String(NaN))//  string

// // null

// console.log(null)
// console.log(typeof null) // obj // 🤷‍♂️

// // undeifined
// console.log(undefined);
// console.log(typeof undefined);

// be conssous when dealing with NaN , null , undefined// 🤷‍♂️

console.log(typeof NaN) // number 
score = "12abc"; // for coverting it to number check it properly

console.table([score, Number(score), typeof Number(score)]);

score = null;

console.table([score, Number(score), typeof Number(score)]);

score = undefined;

console.table([score, Number(score), typeof Number(score)]);

// type -> number {in lowerCase but number in upperCase ->{classbased somting}}

console.log(undefined==null) //true
console.log(undefined<=null) // false
console.log(undefined>=null) // false

