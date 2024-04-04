// 1. Given an array of strings
// // Loop over the array of strings
// // And loop over each string.
// // If a word has the letter "a" in it, log it to the console
    const names = ['Bill', 'Jordan', 'Pete', 'Daniel']
    const fname = [0]

for(let i = 0; i < names.length; i++){
const name = names[i]
for(let j = 0; j < name.length; j++){
    const letter = name [j].toLowerCase()
    if(letter === 'a'){
        console.log(name)
    }
}

}
    

// 2. Given an array of strings
// // Loop over the array
// // And loop over each string.
// // Create a new array of strings where every other letter in each string is capitalized 
// // // Ex: ['This','is','an','array','of','strings'] => ['ThIs','Is','An','ArRaY','Of','StRiNgS']
    const stringArray = ['This','is','an','array','of','strings']
    const newArray = []
    
    for(let i = 0; i < stringArray.length; i++){
        const currentWord = stringArray[i]
        let newWord = ''
        for(let j = 0; j < currentWord.length; j++){
            const letter = currentWord[j]
            const upperLetter = letter.toUpperCase()
            const lowerLetter = letter.toLowerCase()
                if(j % 2 === 0){
                    newWord += upperLetter
                }else{
                    newWord += lowerLetter
                    
        }
    }
    newArray.push(newWord)
}
console.log(newArray)
// 3. Given an array of arrays of numbers (nested array)
// // Add all the inner values up and push them into a single array
// // // Example: [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]] => [12, 85, 83, 66, 77]
    const arrayOfArrays = [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]]
    const mathArray = []

    for(let i = 0; i<arrayOfArrays.length; i++){
        const innerArray = arrayOfArrays[i]
        let total = 0
        for(let j = 0; j<innerArray.length; j++){
            const currentNum = innerArray[j]
            total += currentNum
        }
        mathArray.push(total)
    } console.log(mathArray)