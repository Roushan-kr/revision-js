// truthy value "somthing", 1, true,{} ,"0", "false",[], function(){}," "
// falsy value : null,  undefined, "", 0, false, -0, bingInt 0n, NaN

// comprision and equality work slightly diffrent

const balance = 1200;

if (balance < 500) {
  console.log("balance is less then 500");
} else if (balance < 900) {
  console.log("balance is less then 900");
} else {
  console.log("balance is greater then 900");
}

// for single line if
if (balance < 200)
  console.log("balance less then 200 "), console.log("i also run if true");

// using logical operators
isGLogedIn = true;
haveDebitCard = false;
isELogedIn = false;
onlinePaymentActive = true;

if (isGLogedIn || isELogedIn) {
  console.log("have permision to check cource");
  if (haveDebitCard && onlinePaymentActive) {
    console.log("have permision to Buy cource");
  } else {
    console.log("No permision to Buy cource");
  }
}

// switch case -{used mostly in redux}
// when case become true it execute all rest case {including default} use breack; to avoid it
switch (balance) {
  case 200:
    console.log("have 200");
    break;
  case 400:
    console.log("have 400");
    break;
  case 1200:
    console.log("have 1200");
  // break;

  default:
    console.log("bask hai kitna");
    break;
}

if ({}) {
  console.log("true");
}
if (NaN) {
  kjhs;
}
if (-0n) {
  klsnn;
}

if (function () {}) {
  console.log("i runed");
}

if(" "){
    console.log("i also ");
}

// chhecking a empty array 
if ([].length===0) {
    console.log("i am empty");
}
// checking empty obj
if (Object.keys({}).length===0) {
    console.log("i am empty");
}
// Imp 
console.table([false==0, false=="",0==""]);

// ├─────────┼────────┤
// │    0    │  true  │
// │    1    │  true  │
// │    2    │  true  │
// └─────────┴────────┘

// Nullish coalescing operator (??) fro null , undefined 
const val1 = undefined?? null?? 10
console.log(val1); //10

console.log(null??10??20); //10

// terinary operator 

const val2 =null?"true":"fasle"
console.log(val2); // "false"
