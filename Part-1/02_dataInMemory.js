// type :-  {Dynamic typed} { in .ts assigment like -> varName:dataType = value}
// 1.pemitive dataType {give callByValue, form in stack mem} 
// 2.NonPremitive dataType {callByRefrence, formed in heap mem} / refrenced dataType

// primitive data type:-
// when called it only provide value not refence mean a type of deap copy while assgment to other varaible of Type1 Js data Number-> int+flot+duble+long etc all comes under this hood

// refrenced :- 
// obj ,array, function


// now declearing some dataType {default for non assigned value undefined }
// symbol :- provide unique value each time even same value enterd
const id= Symbol("string/Num Any")
const id2= Symbol("string/Num Any")

console.log(id) // Symbol(string/Num Any) 
console.log(id==id2) // false

// using symbol in obj
const user ={
    [id]: 'User0125',
    name: "roushan",
    "full name": "roushan kr"

}
console.log(user.name)
console.log(user["full name"])
console.log(user[id])
console.log(user);


// using Bigint

const bigIntvalue= 165446545634564535n
console.log(bigIntvalue);

// refrenced dataType

// whle typeOf(null) return a obj but it is not a obj it just a empty space


// +++++++++++++++++++++++++Memory++++++++++

// stck(primite)- callByValue
// Heap(refrenced)- callByRefrece

let stackMem ="1564"
let stackMem2 =stackMem
stackMem2="6454"
console.log(stackMem,stackMem2)  // init still same not changed by chaning it assigned varName

// while in NonPremitive 
let obj={
    name: 'roushan'
}
let obj2=obj
obj2.name="klyea"
console.log(obj, obj2) // { name: 'klyea' } { name: 'klyea' } both changed

