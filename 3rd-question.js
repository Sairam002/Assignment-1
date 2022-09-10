//NOTE:- PLEASE MAKE SURE THAT YOU HAVE INSTALLED 'readline-sync' PACKAGE BEFORE EXECUTING THIS CODE..

//Factorial of a number 

const readlineSync = require("readline-sync");

let number = parseInt(readlineSync.question("Enter the number:- "));
let output = 1;

for(let i=number ; i > 0; i--){
    output = output * i;
}    

console.log(output);