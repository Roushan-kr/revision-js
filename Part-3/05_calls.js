function setuserName(uName) {
    // complex db calls 
    this.name= uName
}

function createUser(uname, email, passwd) {
    // setuserName(uname) //{ email: 'dec@google.com', passwd: '123' }
    // this function hold scope of their this not createuser This 
    // to hold the refrence even after executation context removed with carring about this funcn this not that funcn context 

    // useing .call to hold this contextex to external function 
    setuserName.call(this, uname) // { name: 'december', email: 'dec@google.com', passwd: '123' }
    this.email=email
    this.passwd=passwd
}

const devDec = new createUser("december", "dec@google.com", "123")

console.log(devDec);
