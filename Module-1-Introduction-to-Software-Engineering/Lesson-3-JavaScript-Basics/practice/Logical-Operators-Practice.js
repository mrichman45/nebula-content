
// If x or y is equal to 42 log 'I see you've found the ultimate answer to life, the universe and everything.'
let x = 42
let y = 40
if(x === 42 || y === 40){
    console.log("I see you've found the ultimate answer to life, the universe and everything.")

}else(console.log("we are screwed"))



// Save your name to a variable called name
// If your name has less than 10 characters then log, 'you'll need more characters!' to the console.
// Otherwise log, 'I see you've got enough characters!' to the console. 
let fname = "Michael Richman"
let fnamecount = fname.length
console.log(fnamecount)

if(fnamecount<10){
    console.log("you have too little characters");

}else(fnamecount>10);
    console.log("I see you've got enough characters!");


// Create the following if statement: 
// If this month (1-12) is after March and before December, log 'Winter is Coming!'
let thismonth = Math.floor(Math.random() * 12)
console.log(thismonth)

if(thismonth>3 && thismonth<12){
    console.log("Winter is coming")}

// Create two variables a & b initialized as numbers
// Write the following if statement
// If a is greater than b, log 'a is greater than b'
// If a is less than b, log 'a is less than b'
// otherwise log 'a is equal to b'

let a = Math.floor(Math.random() * 12)
let b = Math.floor(Math.random() * 12)

if(a > b){
    console.log("a is greater than b");

}else if(b > a){
    console.log("a is less than b");

}else if(a === b){
    console.log("a is equal to b");
}
