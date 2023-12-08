let date = new Date()  // create a instace of Date obj
console.log(date.toString()); //GMT 
console.log(date.toLocaleString()); // date , time 
console.log(date.toDateString()); //day mm dd yyyy

console.log(typeof(date)); //obj
console.log(date.__proto__); // obj

let myDate = new Date(2023,11,17)
console.log(myDate.toTimeString());
myDate = new Date("12-11-2023")
console.log(myDate.toDateString());

// for pols 
myDate =  Date.now() // return ms from 1 jan 1970
console.log(myDate)


// use localString to fromarte date as you need 
 let newDate =myDate.toLocaleString("default",{
    weekday:"long"
 })

 console.log(newDate, "this")