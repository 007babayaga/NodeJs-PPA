
console.log("2.A")
const {divison,power } = require("./Maths_helper.js");
console.log("2.B")
const calBmi = (obj)=>{
    const{height,weight} = obj;
    const heightsq = power(height,2);
    const bmi = divison(weight,heightsq);

    setTimeout(()=>{
        console.log(bmi);
    },1000)
}
module.exports = {
    calBmi:calBmi,
}
console.log("2.C")