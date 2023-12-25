// static behave just same as cpp classes static

class User {
  constructor(uName) {
    this.uName;
  }

  isLogin() {
    if (uName) {
      return `${this.uName} is logined`;
    }
  }
  static initiliseuserConfigVal = "someValue";
  static staticMethod() {
    console.log( "static method has been called.");
    console.log(this.initiliseuserConfigVal ,"this1");
    // console.log(this.uName); //not able to acess non-statoc value
    return `${User.initiliseuserConfigVal} done`
  }
  static {
    console.log("Class User initialization static block called only ince when class is initilised first");
  }
}


class Student  extends User{
    constructor(uName, email){
        super(uName)
        this.email= email
    }

    callfromDerive(){
        console.log(this.constructor.initiliseuserConfigVal ,"this2");

    }


}

const roushan = new Student("roushan", "rj@fang.com")
console.log(roushan);
const roushan2 = new Student("roushan2", "rkj@fang.com")
console.log(roushan2);
console.log(User.initiliseuserConfigVal);
console.log(User.staticMethod());

roushan.callfromDerive()