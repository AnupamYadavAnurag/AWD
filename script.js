// console.log("Table");
// let num = prompt("Enter the Number to print Table");
// for(let i=1; i<11; i++){
//    console.log(num + " x " + i + " = " + (num*i));
// }
// const batch = () => {
// prompt("Hello I am Anupam Yadav From Prayagraj Currently I am doing BCA from United University Prayagraj ");
// }

// let num = 5;

// for (let i = 1; i <= 10; i++) {
//   console.log(num + " x " + i + " = " + (num * i));
// }

// console.log("Table");

// let num = Number(prompt("Enter the Number to print Table"));

// for (let i = 1; i <= 10; i++) {
//    console.log(num + " x " + i + " = " + (num * i));
// }


const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", (num) => {
  num = Number(num);

  for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
  }
   log("hellp Anupam YAdav");
  rl.close();
});
