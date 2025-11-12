const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout 
});

rl.question('Please enter your name: ', (name) => {
  
  console.log(`\n-------------------------------------`); // \n adds a new line
  console.log(`Hello, ${name}!`);
  console.log('Welcome to your first interactive Node.js application.');
  console.log(`-------------------------------------`);

  rl.close();
});