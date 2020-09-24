import { me as device } from "device";


const myFunction = function() {
    console.log("Inside the package");
    console.log("type:             " + device.type);
}

export {
    myFunction
}