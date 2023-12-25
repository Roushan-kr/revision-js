const obj ={
    _name:"roushan",
    get name(){
        return this._name.toUpperCase()
    },
    set name(name){
        this._name =name

    },
    funcn : function () {
        console.log(`${this._name}`);
    }
}
console.log(obj.name);
obj.funcn()

// cresting a new object from it 

const object = Object.create(obj)
console.log(object.name);

// get and seter are no longer keeping them as method it just behave linke a property

