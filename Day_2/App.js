const os = require("os");
const {pbkdf2, pbkdf2Sync} = require('crypto');
const cpu_count =  os.cpus().length;
console.log(cpu_count);
// -----------Sync way to use PBKDF2-----------------------
// this is highly unoptimized ---- it blocks the main thread -- all other tasks comes to halt

// const start = performance.now();
// let iterations = 20;
// let total_time =0;
// let min_time = Number.MAX_SAFE_INTEGER;
// let max_time=0;

// for(let i=0;i<iterations;i++){
//     const hash = pbkdf2Sync('Rajat', 'IIII', 1555555, 10, 'sha512');
//     console.log(hash.toString('hex'));
//     const end = performance.now();
//     const diff_time = end-start;
//     total_time+=diff_time;
//     min_time = Math.min(max_time,diff_time);
//     max_time = Math.max(max_time,diff_time);
// }
// console.log("min time ~" ,min_time);
// console.log("max time ~" ,max_time);
// console.log("Avg time ~" ,(total_time/iterations));

// console.log(process.env);

// ------------------pkdf2(Async way) ------------------

const start = performance.now();
let iterations = 20;
let total_time =0;
let min_time = Number.MAX_SAFE_INTEGER;
let max_time=0;
process.env.UV_THREADPOOL_SIZE=12;

for(let i=0;i<iterations;i++){
    pbkdf2('Rajat', 'IIII', 1555555, 10, 'sha512',((err,hash)=>{
        // console.log(hash.toString('hex'));
        const end = performance.now();
        const diff_time = end-start;
        // console.log(diff_time);
        total_time+=diff_time;
        min_time = Math.min(max_time,diff_time);
        max_time = Math.max(max_time,diff_time);
    }));
}

setTimeout(()=>{
    console.log("=>",process.env.UV_THREADPOOL_SIZE,"/",cpu_count);
    console.log("min time ~" ,min_time);
    console.log("max time ~" ,max_time);
    console.log("Avg time ~" ,(total_time/iterations));
},10000)
