# JS With Class Concept (programming suggar)

intilay Js have no concept of classes before ES6 introduce after ES6 it use concept of class as syntechitic sugar but intinaly it use prototype-based inheritance machemacism 

## OOP (Programming Paradime)

object 
 - collection of property and methods


## why OOP 
spegity code happened (code didn't get much messy)

- use to make Services?

## Parts of OOPs

object literal 

- constructor fucntion 
- instances  (this, new)
- classes 
- prtotypes 

## four pillers

Abstraction - hiding details <br>
Inheritance - taking feture from parent <br>
Encaulasion - Rapper around function & data<br>
Polymorphism - same name diff work<br>

 Note: using Object function we are able to singulton obj instance else object 
 
 ```javascript
 const UserCreate2= function(uName, isLogin){
    this.uName= uName
    this.isLogin = isLogin
    // if i not return this it implicitly return this context id new const used
    // return this
}
const u3=new UserCreate2("roushan", true)
const u4=new UserCreate2("rj", true) // if this function explicitly not return this it return this implictly (if new keyword used)
// b/t this it also create new instance of that same function
console.log(u1);

```

```javascript
array-> object-> null //refrence
stirng ->object-> null //ref
function ->object-> null //ref
 ```    
everything in js is a object and object proto is null (refrence based)

```javascript
function mulBy5(num) {
    return num*5
}
mulBy5.power =2

console.log(mulBy5(2));
console.log(mulBy5.power);
console.log(mulBy5.prototype); // by default set proto this ->// result {}
 ```
- this is also connected to protoType

Pause 7:24H lect HC

## how much new keyword Impact

```javascript

function bookStore(bookName, price) {
    this.bookName =bookName
    this.price = price
}

// now adding methods/props to it 

bookStore.prototype.bookDate = function(){
    // this is compresary to get know about it current context 
    return `${this.bookName} price is ${this.price}`
}

// now new keyword

const book1 = new bookStore("comic",456)
const book2 = bookStore("hemabari", 899)

// i am able to ise this becaue of syntechic sugar else i have to like like
// book1.protoType.bookDate()
console.log(book1.bookDate());
// console.log(book2.bookDate()); // not able to acess because it not initlized with it additional protoType which assign using new keyword

// Js give classes function by using new keyword not by class keyword

 ```

new keyword 
- The new object is created: The new keyword inititate the creation of new js Object 
- A protoType is linked: The newly Created object get link to The protoype property of the constructor function. This mean that it have acess to the prop and methos defined on the constructor prototype
- The Constructor is called: The constructor funcn called with the specified argument and this is bounded to newly created object. if not explicite retuen value is soecified from constr funcn, JS assumes this,The newly created object, to be intend return values 
- The  new ibject is returned: after the constructor function is called, if not return a non premitive value(obj, arr, funcn, etc), the newly created object is returned 
