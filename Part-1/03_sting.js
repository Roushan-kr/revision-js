const name ="roushan"
const repoCount= 20
// outDated way
// console.log(name+" have "+repoCount);

// Modern Syntex use backTicks 
// To do string interPolation
console.log(`${name} have ${repoCount}`);

// other way
const gana = new String("Sun lai jra")  // return a string obj 
console.log(gana); // [String: 'Sun lai jra']

console.log(gana.__proto__);
console.log(gana.toUpperCase());
console.log(gana.charAt(0));
console.log(gana.indexOf(0));
console.log(gana.substring(0,5)); // not taken 5th index

// negative value for reverse direction
console.log(gana.slice(-9,5));
console.log(gana);

const stringA = "  thid si    "
console.log(stringA.trim());

const url ="http://rj.dev/clicl%20To%20Signin" 
console.log(url.replace("%20"," ")); // first occurence 
console.log(url.replaceAll("%20"," ")); // all occurence 

console.log(url.includes("rj")); // bool 
console.log(url.split("/")); // form array 

