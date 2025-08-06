// const figlet = require("figlet");

// figlet("Rajat   Pratap", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });
// figlet("Divya   Tyagi", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// -------------------Gradeint---------------------
// const gradient = require('gradient-string');
// console.log(gradient.rainbow('I am rajat 💻✨'));

// ----------------boxen ---------------(box around the text)

// const boxen = require('boxen');
// console.log(boxen('Rajat is coding like a beast! 💪', {padding: 1, borderStyle: 'double'}));

// -----------------ora-----------------(for spinnners)
// const ora = require('ora');
// const spinner = ora('Loading wizard spells...').start();

// setTimeout(() => {
//   spinner.succeed('🔥 Magic casted successfully!');
// }, 2000);

// ------------------log symbols-------------
// const logSymbols = require('log-symbols');
// console.log(logSymbols.success, 'Server started on port 3000!');
// console.log(logSymbols.error, 'Oops! Something exploded 💣');


// ---------------emoji--------------------
const emoji = require('node-emoji');
console.log(emoji.get('dog'),  'Launching into backend!');



