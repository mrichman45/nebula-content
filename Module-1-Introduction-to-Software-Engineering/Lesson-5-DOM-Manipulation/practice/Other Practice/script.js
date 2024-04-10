// Given this array
// We want to append a new list item to a list by looping over this array
// We want to do this only with JavaScript
// YOU SHOULD NOT TOUCH THE HTML FILE

// Steps
// Create a list and append it to the body
// Loop over todos and create a list item for each one and append it to the newly created list with the todo text.
const todos = ['Walk the dog', 'Make Dinner', 'Do Dishes', 'Mow Lawn', 'Make Bed']

let newEle = document.createElement('p')
newEle.innerText = 'This is a todo list'
document.body.appendChild(newEle)

let newListEle = document.createElement('ul')
newListEle.innerText = 'List'
document.body.appendChild(newListEle)

for(let i = 0; i < todos.length; i++){
    let newList = document.createElement('li')
    newList.innerText = todos[i]
    newListEle.appendChild(newList)
}