// COUNTER EXERCISE

// Select the body element from index.html
const body = document.body
// Set an attribute of 'style' to the body tag and add a background color of anything other than white
body.style.backgroundColor = 'red'


/* -------------------------------------------------------------------------- */

// Create an h1 element
let newH1 = document.createElement ('h1')
// Append a new h1 element to the body element as a child
document.body.appendChild(newH1)
// Add text to the h1 element 
newH1.innerText = 'Test'
// Assign the background color of this element to something unique
newH1.style.color = 'White'
// Set a new style attribute to the h1 element
newH1.style.border = '2px solid blue'
newH1.style.width = '70px'
// Add font size to the h1Element
newH1.style.fontSize = '15'
// Set the default text to the number zero
newH1.innerText = '0'
/* -------------------------------------------------------------------------- */

// Create a button element to increment the h1 text
let button1 = document.createElement('h1')
// Append the button element to the body element
document.body.appendChild(button1)
// Add text to the boxButton
button1.innerText = '+'
button1.style.border = '2px solid green'
button1.style.width = '20px'
// Add a class attribute to boxButton
button1.style.backgroundColor = 'white'
/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text
let button2 = document.createElement('h1')
// Add the button element to the body element
document.body.appendChild(button2)
// Add text to the button element
button2.innerText = '-'
button2.style.border = '2px solid green'
button2.style.width = '20px'
// Add a class attribute of style to the button element
button2.style.backgroundColor = 'white'
/* -------------------------------------------------------------------------- */
// ADD BUTTON FUNcTION
// Create functionality that, when you click this button it increases the h1 value
function countUp(){
newH1.innerText ++

}    
button1.addEventListener("click", countUp);

// Create functionality that, when you click this button it decreases the h1 value

function countDown(){
    newH1.innerText --
    
    }    
    button2.addEventListener("click", countDown);

/* -------------------------------------------------------------------------- */
// DELETE BUTTON FUNCTION 

let button3 = document.createElement('h1')
document.body.appendChild(button3)
button3.innerText = 'Delete'
button3.style.border = '2px solid green'
button3.style.width = '84px'
button3.style.backgroundColor = 'white'

function erase(){
    newH1.innerText = 0
}
button3.addEventListener("click", erase )