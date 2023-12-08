// tpye singleton obj -> create through obj constructor  Object.create()
// non - litrals constructed

const symbol = Symbol("id-42222")

const obj = {
    name :"roushan",
    "full Name": "roushan kr.",
    [symbol]:"id-4242"
}
console.log(obj.name);
console.log(obj["full Name"]);
console.log(obj[symbol]);
console.log(typeof obj[symbol]);
console.log(obj);


// editig value of obj 
obj.name= "klyea"
console.log(obj);
// restricting editing 
// Object.freeze(obj)
obj.name="jagu" // not reflect after frizzing obj 
console.log(obj);

obj.bolo = function () {
    console.log(this.name);
}
console.log(obj.bolo());

const obj1 ={
    fName :"roushan",
    lname: "kr.",
    fullName:{
        UserName: `${this.fName} ${this.lname}`
    }
}
// obtinal chaning to handle error access
console.log(obj1.fullName?.UserName);

// let obj3 ={obj, obj1} // same as array problem
let obj3 =Object.assign({},obj,obj1) // it also assign first obj to rest of the value
// or
// split operator 
obj3 ={...obj, ...obj1}

console.log(obj3,"a");
console.log(obj, "this");

// for getting a array of key / value from a obj
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1)); //retuen a key Value pairs array
// console.log(obj1.hasOwnProperty("fullName"));
// obj.propertyIsEnumerable(true)


// object destructuring 
const {name} =obj
console.log(name);

// with other name 
const {fullName:fN}= obj1
console.log(fN);
