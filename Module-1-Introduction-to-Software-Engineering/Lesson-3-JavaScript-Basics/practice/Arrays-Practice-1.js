// Declare an empty array
let emptyArr = []

// Declare an array with all the data types you can think of within it
let mixedArray = [1,"string", true]

// Make a list of classmates names first names in an array
const classMates = ["Hashem","Sharon","Chris","Michael"]

// Get the length of that previous array

console.log(classMates.length)

// Check the type of the previous array

console.log(typeof(classMates))

// Check if the previous array is an array

Array.isArray(classMates)

// Using indexing, grab your name from that previous array

console.log(classMates.indexOf("Michael"))
const MyName = classMates[3]
console.log(MyName)

// Use the following variable to get the student at the index from the array of students
let index = 2; 

console.log(classMates[index])

// Update the array to have each element as a students first and last name : 'firstName lastName'
classMates [0] = "Hashem Cruz"
classMates [1] = "Sharon Bacchus"
classMates [2] = "Christopher Foster"
classMates [3] = "Michael Richman"