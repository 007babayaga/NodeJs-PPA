console.log("1.A")
const { calBmi } = require("./bmi_helper.js");
console.log("1.B")
const{divison}= require("./Maths_helper.js")
const student = {
    Name:"rajat",
    age:21,
    height:"2",
    weight:"3"
}

calBmi(student);
console.log("Backend starts here");
console.log(divison(30,10));
console.log("1.C")
// node js is just a runtime which is used to run the Javasvript outside the browser
// Execution Cycle
// Resolving and Loading-- checks if the module is internal,userdefined,external
// Wrapping - (()=>{}) () wraps the whole code and Immediately invoke it - in this wrapped fucntion we get multiple parameters which we can use
// execution line by line
// caching