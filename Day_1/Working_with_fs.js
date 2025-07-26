//Synchronous way to crete a file
const { performance } = require('perf_hooks');
const fs = require("fs");

const start1 = performance.now();
const mul = 2345234*324334223;
const end1 = performance.now();
console.log(end1-start1);

const start2 = performance.now();
fs.writeFileSync("./file.txt","My name is Rajat")
const end2 = performance.now();
console.log(end2-start2);

const res = fs.readFileSync("./file.txt","utf-8");
console.log(res);
//this sync file makes the Node js blocking in nature 