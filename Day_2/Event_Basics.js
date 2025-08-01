const EventEmitter = require('node:events');
const readline = require('readline');

const myEmitter = new EventEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'You> '
});

rl.prompt();


myEmitter.on('Hi', () => {
  console.log('Hello');
});

myEmitter.on('where', () => {
  console.log('Ghaziabad');
});

myEmitter.on('Product', (productId) => {
  console.log('Product is added to the cart',productId);
});

myEmitter.emit("Hi")

// rl.on('line', (input) => {
//   const [command, ...args] = input.trim().split(' ');

//   switch (command) {
//     case 'Hi':
//       myEmitter.emit('greet', args.join(' ') || 'stranger');
//       break;
//     case 'where':
//       myEmitter.emit('Ghaziabad');
//       break;
//     default:
//       myEmitter.emit('unknown', command);
//   }

//   rl.prompt();
// });

// const readline = require('readline');
// const EventEmitter = require('events');

// // Create EventEmitter instance
// const emitter = new EventEmitter();

// // Set up readline interface
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: 'You> '
// });

// // Register some custom event listeners
// emitter.on('greet', (name) => {
//   console.log(`Hello, ${name}! 👋`);
// });

// emitter.on('bye', () => {
//   console.log('Goodbye! 👋');
//   rl.close();
// });

// emitter.on('unknown', (command) => {
//   console.log(`Unknown command: "${command}" 🤷`);
// });

// // Start the prompt
// rl.prompt();

// // Read input line-by-line
// rl.on('line', (input) => {
//   const [command, ...args] = input.trim().split(' ');

//   switch (command) {
//     case 'greet':
//       emitter.emit('greet', args.join(' ') || 'stranger');
//       break;
//     case 'bye':
//       emitter.emit('bye');
//       break;
//     default:
//       emitter.emit('unknown', command);
//   }

//   rl.prompt();
// });
