// let assume a senario to add method/props to a default object accesable to object related to this

let name ="    Roushan   "

// to use a custom method from string (default object)

String.prototype.trueLength= function () {
    return this.trim().length
}

console.log(name.trueLength());
console.log(name.length);

// factory function :-  default function to create that instance 

Object.prototype.roushan = function () {
    console.log(`${this} is prensent inside me`);
}
Object.prototype.globalRoushan =  ()=> {
    console.log(`${this} is prensent inside me`);
}
name.roushan()
// name.globalRoushan() // not able to access this as local variable 

const obj={name: "roshan"}
// obj.roshan()  // not able to acess string global function as parent 


// inherating property from one obj to another 

// old syntex way
const User ={
    isAdmin: false
}

const work ={
    isAbleToTeach: true
}

const User1={
    isLogin: true,
    __proto__:work // need to declear first 
}


work.__proto__ = User // external

console.log(User1.isAbleToTeach);
console.log(User1.isAdmin);

// modernSyntex

const MyTempProp={
    thisprop: "abhilable"
}

Object.setPrototypeOf(MyTempProp, User1)

console.log(MyTempProp.isLogin); // able to acces that 
console.log(MyTempProp.isAbleToTeach); // also able to use its parent context 
