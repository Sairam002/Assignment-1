//NOTE:- PLEASE MAKE SURE THAT YOU HAVE INSTALLED 'readline-sync' PACKAGE BEFORE EXECUTING THIS CODE..

//Write a javascript program to convert temperature between celsius and fahrenheit.

const readlineSync = require("readline-sync");

let Temperature = parseInt(readlineSync.question("Enter the temperature :- "));
let fOrC= parseInt(readlineSync.question("For giving temperature in  fahrenheit enter 1, for celsius enter 2 :- "));
if((fOrC != 1) &&(fOrC != 2)){
    console.log("Enter 1 or 2");

}
else if(fOrC === 1)
{
    let n = (Temperature-32)*(5/9);
    console.log(n);
}
else// if(fOrC === 2)
{
    let n = (Temperature)*(9/5);
    console.log(n-32);
}

