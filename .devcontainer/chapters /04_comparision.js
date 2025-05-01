console.log(2>1);
console.log(2>=1);
console.log(2==2);
console.log(2!=1);

console.log("2">1);
console.log(null==0); //false
console,log(null>0;) // false


// *********Primitive**********

// 7types: string, Number, Boolean, null, under
//BigInt (big values)

const score: = 100 
const scoreValue = 10.3
const isloggedIn = false 
const outsideTemp = null
let userEmail; // value is undefined 


const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherId);//false 
const bigNumber = 22222222222222222222222 // BigInt is used to store this 
const bigNumber = 222223333333333333333333333n // this goes t BIgInt because of n 


// Reference type data type (Non Primitive)
//  Araay Objects , functions 


const heroes= ["spiderman", "ironman"]
let myObj = {
name: "shifu"
age: 22, }


const myFunction = function(){
    console.log("hello");
}

console.log(typeof bigNumber); //undefined
console.log(typeof outsideTemp); // object 
console.log(typeof scoreValue); //number 
console.log( typeof myFunction); //fucntion
console.log( typeof symbol); //symbol

