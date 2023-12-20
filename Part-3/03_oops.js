
// creating a object litral

const User ={
    name: "roushan",
    brach: "C.S.E",
    // acessign this context with this keyword if not foud fide this.value at it prototype
    // also help in getting proper creation of execution context 
    getDetail: function(){
        console.log(`He is ${this.name} from ${this.brach}`);
        // console.log(`User: ${this}`);
        console.log(this);
    },
    getContext: ()=>{
        // global context   
        console.log(`window: ${this}`);

    }
}

// User.getDetail()
// User.getContext() // window 

// now using constructor function(new)  to create new instance of that object
// it give it's copy by using constructor function

const date = new Date()
// const promise = new Promise()


const UserCreate1= (uName, isLogin)=>{
    this.uName= uName
    this.isLogin = isLogin
    return this 
}
const UserCreate2= function(uName, isLogin){
    this.uName= uName
    this.isLogin = isLogin
    this.greate= function () {
        console.log(`welcome ${this.uName}`);
    }
    // if i not return this it implicitly retuen this context
    return this
}

// console.log(UserCreate1("roushan", true));
// console.log(UserCreate2("rj42", true));

const u1=UserCreate2("roushan", true)
const u2=UserCreate2("rj", true) // over Write u1 b/c not use new KeyWord
// console.log(u1);

const u3=new UserCreate2("roushan", true)
const u4=new UserCreate2("rj", true) // if this function explicitly not retuen this it return this implictly (if new kwyword used)
console.log(u4.constructor); // self refence 
console.log(u3 instanceof UserCreate2); // check 


function mulBy5(num) {
    return num*5
}
mulBy5.power =2

console.log(mulBy5(2));
console.log(mulBy5.power);
console.log(mulBy5.prototype);

// segnificance of new keyword

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
