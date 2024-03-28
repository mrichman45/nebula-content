// 1.   Create an array that contains two of your favorite things to do
let favoriteThings = ["Video Games", "Computer Repair"]
// 2.   Using an array method, add another thing you like to do to that list
favoriteThings.push("Typing")
// 3.   Reverse the order of the array (remember, if needed use MDN)
favoriteThings.reverse()
//      Use this array for questions 4-11:
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// 4.   log the length of the array
console.log(daysOfWeek.length)
// 5.   log the 4th element in the array
console.log(daysOfWeek[3])
// 6.   Remove the first element in the array. Log the new array and the element removed from the array
const firstRemoved = daysOfWeek.shift()
console.log(daysOfWeek, firstRemoved)
// 7.   Put 'Sunday' back at the beginning of the array and log the new array
console.log(daysOfWeek.unshift(firstRemoved))
// 8.   Remove the last element in the array. Log the new array and log the element removed
const lastRemoved = daysOfWeek.pop()
console.log(daysOfWeek)
// 9.   Add 'Saturday' back to the end of the array and log the new array
daysOfWeek.push(lastRemoved)
console.log(daysOfWeek)
//10.   Replace 'Thursday' with 'Friday Junior'
daysOfWeek[4] = "Friday Junior"
console.log(daysOfWeek)
//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
const favDay = daysOfWeek[6]
console.log(`my Favorite day of the week is ${favDay}`) 
//12.   Combine these two arrays
    let phone = ['iphone', 'android']
    let laptop = ['MacBook', 'HP', 'Dell']

let combinedArray = phone.concat(laptop)
console.log(combinedArray)
//13.   Write a line of code to test if something is an array or not

console.log(Array.isArray(daysOfWeek))
