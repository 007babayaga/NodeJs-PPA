
console.log("3.A")
const div = (a,b)=>{
    if(b==0){
        return a;
    }
    else{
        return a/b;
    }
}

const power = (a,b)=>{
    return a**b;
}

module.exports = {
    divison :div,
    power:power,
};
console.log("3.B")
