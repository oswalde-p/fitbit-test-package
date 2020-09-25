import { me as device } from "device";


const myFunction = function() {
    console.log("Inside the package");
    console.log("type:             " + device.type);
}

class MyClass {
    constructor(name) {
        this.name = name
    }
}

const myCreatorFunction = function(name) {
    return new MyClass(name)
}

export {
    myFunction,
    MyClass,
    myCreatorFunction
}