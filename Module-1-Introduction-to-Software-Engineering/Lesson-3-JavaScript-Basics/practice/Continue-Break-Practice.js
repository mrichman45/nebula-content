// 1. Write a for loop that looks for the letter a
// // The loop should log the letter 'a' to the console
// // STOP immediately after finding the letter 'a'

let string = "This is a String"

for(let i = 0; i < string.length; i++){
    let char = string[i]
    if(char === 'a'){
        console.log("a")
        break;
    }
}


// 2. Write a for loop that looks for a number
// // The loop should log 'at index _ there is the number _' to the console 
// // Stop immediately after finding that number
// // // ex: Input: ['a','b','c', 100,'e']
// // // Output: 'at index 3 there is the number 100'

let arr = ['a','b','c', 100,'e']

for(let i = 0; i < arr.length; i++){
    const el = arr[i]
    if(typeof(el) === 'number'){
        console.log(`at index ${i} there is the number ${el}`)
        break;   
    }
}


// 3. Using the continue keyword loop over an array of numbers & strings
// // If the current element is a number skip it
// // Otherwise add the element to an array
// // After finishing the loop log the new array to the console

const arr2 = [1,4,'e',5,'a']
const letters = []

for(let i = 0; i< arr2.length; i++){
    const el = arr[i]
    
    if(typeof(el) === 'number'){
    continue;
        
    }letters.push(el)
}
console.log(letters)
