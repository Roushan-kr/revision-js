const discriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(discriptor);
/*
{
  value: 3.141592653589793,
  writable: false, // most of the ckeck is applied to not change it 
  enumerable: false,
  configurable: false
}
 */

const cource ={
    name:"C.S.E",
    isAvhilable :true,
    buyCource: function () {
        console.log("trying to buy");
    }
}
console.log(Object.getOwnPropertyDescriptor(cource,"name"));
/*
{
  value: 'C.S.E',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// deining own object discrupters 
Object.defineProperty(cource,"name",{
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(cource,"name"));
/*
{
  value: 'C.S.E',
  writable: false,
  enumerable: true,
  configurable: true
}
*/
// checking writibility
cource.name="mohit"
console.log(cource.name);

// looping over object 
console.log("loop 1");
for (const [key, value] of Object.entries(cource)) {
    // for filting method to only print key value 
    if(typeof value == "function"){
        continue
    }

    // here it also print method as key value pairs
    console.log(`${key}:${value}`);
    
}

// now stoping enurable of name
Object.defineProperty(cource, "name",{
    enumerable: false
})

// again 
// looping over object 
console.log("loop 2");
for (const [key, value] of Object.entries(cource)) {
    // for filting method to only print key value 
    if(typeof value == "function"){
        continue
    }

    // here it also print method as key value pairs
    console.log(`${key}:${value}`);
    
}