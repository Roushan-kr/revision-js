class User {
    constructor(uName, passwd){
        this.uName=uName
        this.passwd= passwd
    }
    get passwd(){
        return this._passwd
    }
    set passwd(pass){
        this._passwd=pass.toString().toUpperCase()
    }
    some(){
        console.log( this.passwd);
    }
}

const user =new  User("roushan","abc")

console.log(user.passwd);
user.some()