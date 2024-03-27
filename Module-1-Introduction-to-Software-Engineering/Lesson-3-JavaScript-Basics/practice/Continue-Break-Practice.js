// 1. Write a for loop that looks for the letter a
// // The loop should log the letter 'a' to the console
// // STOP immediately after finding the letter 'a'

const str = "This is the box with the letter a"

while(true){
    if(str[32] === "a")
    console.log("we found it")
    break;
}


// 2. Write a for loop that looks for a number
// // The loop should log 'at index _ there is the number _' to the console 
// // Stop immediately after finding that number
// // // ex: Input: ['a','b','c', 100,'e']
// // // Output: 'at index 3 there is the number 100'

const arr = ['a','b','c', 100,'e']
let i = 0

for (let i=0; i<arr.length; i++){
    if(arr.length === 3)
    console.log("The Number is 100")
break;
}

// 3. Using the continue keyword loop over an array of numbers & strings
// // If the current element is a number skip it
// // Otherwise add the element to an array
// // After finishing the loop log the new array to the console

