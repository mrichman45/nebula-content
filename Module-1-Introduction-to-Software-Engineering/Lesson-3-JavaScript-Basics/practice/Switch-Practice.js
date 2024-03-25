// Utilize the switch statement to re-write your horse-racing exercise from earlier
// Feel free to copy the old if statement in and convert it into a switch statement
// Create a Horse Racing program that when executed, stores a random number in a variable called position between 1 and 5. 
// The program should then check to see what number is stored in the variable and output the messages indicated in the comments below.


// If position is 1, log to the console: "(Insert horseName) finished in first place!"
// If position is 2, log to the console: "(Insert horseName) finished in second place!"
// If position is 3, log to the console: "(Insert horseName) finished in third place!"
// If position is greater than 4, log to the console: "(Insert horseName) did not finish in the top 3."

let horseName = "Edgar";
let position = Math.ceil(Math.random() * 4)

switch(position){
    
case 1 :
    console.log(`${horseName} finished first`);
    console.log(position)
    break;
case 2 :
    console.log(`${horseName} finished second`);
    console.log(position)
    break;
case 3:
    console.log(`${horseName} finished third`);
    console.log(position)
    break;
case 4:
    console.log(`${horseName} did not finish in the top 3`)
    console.log(position)
    break;
}