// Turn the following string into all lowercase letters
const noCaps = 'This Should Not Have Capital Letters!'
console.log(noCaps.toLowerCase());

// Turn the following string into all uppercase letters
const loud = "I'm Very Loud!";
console.log(loud.toUpperCase())

// Join the prior two variables together. 
console.log(noCaps + loud)

// Turn the following string into an array of names
const stringOfNames = 'Ally Becca Carlos Drake Edgar Felicity Greta Hector';
console.log(stringOfNames.split(" "))


// Make your own mad-libs using a template literal
const noun = "cat"
const adjective = "quick"
const verb = "jumped"

const templateLiteral = `The ${adjective} ${noun} ${verb} over the fence. `
console.log(templateLiteral)


// Given the name Tony Stark, get his initials
const ironMan = "Tony Stark"
const initials = ironMan.slice(0,1)
const initials2 = ironMan.slice(5,6)
console.log(initials+initials2)


// Given the string "Hey now, you're an all-star!" get the string, "all-star" and save it to a new variable
const string = "Hey now, you're an all-star!"
console.log(string.slice(19,27))

// Using the string "How are you?" extract the question mark.
const string1 = "How are you?" 
console.log(string1.slice(11))


// Given the following variables, add them together to get 15 
const ten = '10';
const five = '5';

let addVariable = +ten + +five
console.log(addVariable = +ten + +five)

// Given the following sentence, turn it into an array.

const sentence = 'Welcome to the jungle!'; 

console.log(sentence.split (''))