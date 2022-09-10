//NOTE:- PLEASE MAKE SURE THAT YOU HAVE INSTALLED 'readline-sync' PACKAGE BEFORE EXECUTING THIS CODE..

//Program to find whether a year is leap year or not.

const readlineSync = require("readline-sync");

var givenValue = readlineSync.question("Enter the year:- ");

if(givenValue % 4=== 0){
    console.log(`Year ${givenValue} is leap year`)
}
else{
    console.log(`Year ${givenValue} is not leap year`)
}
