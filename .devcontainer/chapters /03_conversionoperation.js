let score = "33" 

console.log(typeof score);
console.log(typeof(score)); //string

let valueInNumber = Number(score) 
console.log(typeof valueInNumber); // number
//Nan : not a number, eg wer234
let Score = null // 0
let score = undefined // Nan
let Score = true // 1 
let Score = "shifu" // Nan

// "33" => 33 conversion 
// "33avs" => Nan
// true => 1; false=> 0

let isLoggedIn = true //boolean

let isLoggedin = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // false 

let isLoggedin = "shifu"
let booleanIsLoggedIn = Boolean(isLoggedIn) //conversion
console.log(booleanIsLoggedIn); // true

// 1=> true; 0=. false 
//"" => false 
// "hitest" =. true 
let someNumber = 33
let stringNumber = String(someNumber) 
console.log( typeof stringNumber) //string


