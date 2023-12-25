// using this after ES^6

class User {
  constructor(uName, email, passwd) {
    this.uName = uName;
    this.email - email;
    this.passwd = passwd;
  }
  encriptpasswd() {
    return `${this.passwd}xyzencrption`;
  }
}

const user = new User("roushan", "rj@google.com", "123");
console.log(user.encriptpasswd());

// behind thw scean

function UserX(uName, email, passwd) {
  this.uName = uName;
  this.email - email;
  this.passwd = passwd;
}

UserX.prototype.encriptpasswd = function () {
    return `${this.passwd}xyzencrption`;
}


const userX = new UserX("rj", "rk@google.com", "321");
console.log(userX.encriptpasswd());

// if same name used 
// SyntaxError: Identifier 'User' has already been declared
