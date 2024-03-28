// 1. Declare a for loop that starts at 0, goes until 30, and increments by 1
// //      Each loop it should log to the console 'the current index is _'

for(i = 0; i <30; i++)
//console.log(`the current index is ${i}`)

// 2. Declare a for loop that starts at 1, goes until 10, and increments by 2
// //      Each loop it should log to the console the current index
for(let i = 1; i<=10; i +=2){
    //console.log(`the current index is ${i}`)
}

// 3. Create an array with your top 5 celebrity names in it. 
// //      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
// //      Loop over the array and log each celebrity's full name to the console.

//const favCelebs = [`Martha Stewart`, 'David Beckham', 'Will Smith', 'Seth Rogen', 'Ryan Reynolds']
//for(let i = 0; i < favCelebs.length; i++){
    //console.log(favCelebs[i])
//}


// 4. Loop over your celebrity list and 
// // If a celebrity's full name has an even number of characters log it to the console

//for(let i = 0; i < favCelebs.length; i++){
    //const celeb = favCelebs[i]
    //if(celeb.length % 2 === 0){
        //console.log(celeb)
    //}
//}

// 5. Use the celebrity array for this question
// // Create a for loop which will iterate over each element and output a new array of only first names

//const firstNames = []
//for(let i = 0; i < favCelebs.length; i++){
    //const celeb = favCelebs[i]
    //const split = celeb.split(" ")
    //const first = split[0]
    //firstNames.push(first)
//}
//console.log(firstNames)


// 6. Use the celebrity array for this question
// // Create a for loop which will iterate over each element and output a new array of only last names
//let vowels = 'aeiou'

//for(let i = 0; i < favCelebs.length; i++){
//let celeb = favCelebs[i]
//const letters = celeb.split("")
//for(let j = 0; i < letters.length; j++){
    //let val = letters[j]
    //if(vowels.includes(val)){
        //console.log(val)
    //}
//}
//}
// 7. Loop over the celebrity list and then loop through each name. 
// // If a letter is a vowel, log it to the console

//for(let i = 0; i < favCelebs.length; i++){
//let celeb = favCelebs[i]
//const letters = celeb.split("")
//for(let j = 0; i < letters.length; j++){
    //let val = letters[j]
    //if(val !== val.toUpperCase() && val !== ''){
        //console.log(val)
    //}
//}
//}

// // 8.   Loop over the celebrity list and then loop through each name. 
// //      If a letter is uppercase, log it to the console



// // 9. Convert your celebrity array to all caps and no spaces:
// //  Ex:
// // // Input:  ['Martha Stewart', 'David Beckham', etc..] 
// // // Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]

const favCelebs = [`Martha Stewart`, 'David Beckham', 'Will Smith', 'Seth Rogen', 'Ryan Reynolds']
//const upperCaseNames = []
//for(let i = 0; i < favCelebs.length; i++){
    //const celeb = favCelebs[i].toUpperCase()
    //const result = celeb.split(' ').join("-")
    //upperCaseNames.push(result)
//}
//console.log(upperCaseNames)

// 10.  Index your array to find your favorite celebrity. 
//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop

const fav = favCelebs[1]

for(let i = 0; i < favCelebs.length; i++){
    const celeb = favCelebs[1]
if(celeb === fav){
    console.log(celeb)
    break;
}
}

//BONUS:
// // Write a loop that iterates from zero until 30
// // If an index is divisible by 2 log 'fizz'
// // If an index is divisible by 3 log 'buzz'
// // If an index is divisible by both 2 & 3, log 'fizz-buzz'
// // Otherwise print the index to the console

for(i = 0; i <= 30; i++){
    if(i % 2 === 0 && i % 3 ===0){
console.log("Fizz-Buzz")
    }else if(i % 2 === 0){
        console.log("fizz")
    }else if(i % 3 === 0){
        console.log("Buzz")
    }else{
            console.log(i)
        }
    
}