// this keywords tell about current Context

const usr = {
  name: "roushan",
  welcomeMasg: function () {
    console.log(`${this.name} , welcome here`);
    console.log(this);
  },
  massage: () => {
    console.log(this.name);
    console.log(this); // refer to global
  },
};
usr.welcomeMasg();
usr.name = "klyea";
usr.welcomeMasg();
usr.massage(); // not able to access this // undefined, {}

// IIFE
(function () {
  const uName = "roushan";
  console.log(this);
  console.log(this.uName); // undefined
})();

const naBhaiNa = function () {
  const uName = "rj";
  console.log(this.uName);
};
naBhaiNa();

// arraow function with explicite return
const isMaiBheNa = () => {
  const uName = "rj42";
  console.log(this.uName);
  console.log(this);
  return "sometings";
};
isMaiBheNa();

// explicite return

let addTwo = (num1, num2) => num1 + num2;
addTwo = (num1, num2) => num1 + num2;

// curly braces mai return compersary

// object return mai pertinces complesary

addTwo = () => ({ name: "roushan" });

console.log(addTwo());

// IIFE - use to reduce global pollution
(() => console.log("hellow"))(); // unmaned IIFE

((userName) => console.log(`${userName}`))("roushan");

// named IIFE with perimeter 
(function user(userName) {
  console.log(`${userName}`);
})("roushan");


// Executation context

// Global EC
// function EC
// in some document (like mongoes): eval executation context
