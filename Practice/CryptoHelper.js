const {pbkdf2Sync,pbkdf2}= require('crypto');

const data = pbkdf2("Rajat123","I was alwasy here",9876859,10,'sha512',(err,ans)=>{
    console.log(ans)
})

module.exports={data};