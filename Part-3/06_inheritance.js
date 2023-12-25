class User {
    constructor(uName){
        this.uName= uName
    }
    makeLogin(){
        console.log(`${this.uName} is now login`);
    }
}

class Student extends User{
    constructor(uName, email, passwd){
        super(uName) // this function call the parent constructor function with context of this this wrapre and also return this of that class/constructor funcn 
        // jst behave like call function
        this.email= email
        this.passwd= `${passwd}+salt`
    }
    addBranch(){
        console.log(`${this.uName} is added to cource`);
    }
}

const student = new Student("roushan", "Rj@yahoo.com", "123")
console.log(student);

student.addBranch()

// to chek that class is a instance of that clss

console.log(student instanceof User);

