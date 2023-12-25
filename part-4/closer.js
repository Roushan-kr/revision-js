// closer help to acess the function value even after removal from execution context by using memory context 

function makeFunc() {
        const name ="someThing"
        function dispName() {
            console.log(name);
        }
        return dispName
}

const Myfunc = makeFunc()
// even makeFunc is removed form execution context but from memory context it still able to give acess of their
// also this happend due to lexical scoping (child able to acess parent value || shibling are not able to acess other sibling pvt. prop/method || parent is not able to acess child varibal/value)
Myfunc()


// useCase 2

function ChangebgColor (color){
    return function () {
    document.body.style.backgroundColor=`${color}`
    }
        
}
document.querySelector("#button1").onclick= ChangebgColor("green")
document.querySelector("#button2").onclick= ChangebgColor("blue")

