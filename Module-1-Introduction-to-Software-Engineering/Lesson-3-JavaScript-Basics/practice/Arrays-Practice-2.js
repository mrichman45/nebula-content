// Given the following list:
// Change the element at index zero to equal itself times 10 
let numArr = [1,2,3,4,5];
numArr [0] *= 10
console.log(numArr)

// Add an additional element to the prior array

numArr.push(6)

// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'

numArr.pop(6)
let removed = 6

// Check if the prior array contains the number 1
//   If it does, log true, if it doesn't, log false

console.log(numArr.includes(1))

if(numArr.indexOf(2) >=0){
    console.log(true)
}else{
    console.log(false)
}

// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'

const removedFirstItem = numArr.shift


// Add that item back

numArr.push(1)

// Given the following array, sort it using an array method
let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];

console.log(sortThis.sort())

// Now reverse the prior array

numArr[0] = 6
numArr[1] = 5
numArr[2] = 4
numArr[3] = 3
numArr[4] = 2
numArr[5] = 1
  
// Write a string stating your favorite 3 foods. 
//  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'

myFavoriteFoods = "Apple, Pizza, Pasta"

// Convert the prior string into an array of words (don't worry about where punctuation lands). 
//  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']

myFavoriteArray = myFavoriteFoods.split("-")
console.log(myFavoriteArray)


// Convert the output from the prior example back into a string, but with dashes between the words. 
//  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'

let myFavoriteArrayToString = myFavoriteArray.toString()
console.log(myFavoriteArrayToString)
// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location

let argh = [1,2,3,4,5,7,8,9,10]
argh [0] =1
argh [1] =2
argh [2] =3
argh [3] =4
argh [4] =5
argh [5] =6
argh [6] =7
argh [7] =8
argh [8] =9
argh [9] =10
console.log(argh)

// Create two arrays and, using JavaScript join them together

let arr1 = ["dog","cat","bird"]
let arr2 = ["whale", "Shark", "Coelacanth"]

let animals = arr1.concat(arr2)
console.log(animals)

// Create a multi-dimensional array

let multiArray = [1,2,3,4,5,6["a","b","c","d","e","f"]]