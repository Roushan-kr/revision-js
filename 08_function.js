// function definatioin-> func body, decleration->init def , refrence-> func ref , exection 

function addTwoNum(num1=0, num2=0) { // function perimeter with default value 
    console.log(num1+num2);
    return num1
    console.log("i never Execute after return");
}

addTwoNum(4,6) // func argument 

function callMe(name) {
    if (!name) {
        return "Enter a valid name"
    }
    return `${name} welcome `
}
console.log(callMe("roushan"));

// using rest operator 
function add(...num) {
    return num.reduce((prevVal=0, currentVal)=>{return prevVal+currentVal})
}

function addAfterTwo(val1, val2, ...num) {
    console.log(val1, val2);
    return num.reduce((prev, current)=>prev+current)
}
console.log(add(1,2,3,4));
console.log(addAfterTwo(1,2,3,4));
console.log(add([1,2,3,4,5],[6,7,8]));

let arr= [1,2,3,4,5]
console.log(add(...arr)); // spread oprator 

// closers 

function one() {
    const uName="roushan"
    function two() {
        const data={logedIn:true}
        console.log(uName);
    }
    // console.log(data); // parent not able to access it child function body but a child fn can
    two()
}

one();

// ++++ Hoasting of function
addOne(15)
function addOne(num) {
    return num+1
}
addOne(78)

// addTwo(45) // it not work b/c when we declear a function and assing it to other varName
//  then its execution context is not created at initial {call stack }, 
// not created in memory creation phase 
const addTwo = function (num) {
    return num+2
}
addTwo(78)

// memory creatiom phase var assign undefined and function assign defination
// call stack, memoory creation phase , execution context 
