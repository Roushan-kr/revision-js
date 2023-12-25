function User(email, passwd) {
    this._email=email
    this._passwd= passwd

    Object.defineProperty(this, "passwd", {
        get:function () {
            return this._passwd+"work here not on set"
        },
        set:function (pass) {
            this._passwd=pass.toString().toUpperCase() // not work
        }
    })
    
}

User.prototype.funcn= function () {
    console.log(this._passwd);
}

const user = new User("rj","rousa")
console.log(user.passwd);
user.funcn()