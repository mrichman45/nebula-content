// 1. Write a function that multiplies 3 input numbers together.
function multiply(num1, num2, num3){
return num1 * num2 * num3
}
console.log(multiply(5,9,5))
// 2. Write a function that takes in a number and logs all odd numbers leading up to that number

function odd(num){
    for(let i = 0; i<num; i++){
        if(num % 2 !== 0){
        return num
    }else{
        return "Number is not odd"
    }
    }
}

console.log(odd(255))
    
// 3. Write a function that takes in a list of names and returns a list of initials. The names will be formatted: 'Peter Parker'. 

//const names = ['Peter Parker', 'Tony Stark', 'Bruce Wayne']

//const initialsArray =[]
//const makeInitials = (array) => {
   // for(let i = 0; i < array.length; i++){
       // const name = array[i]
       // const nameArray = name.split(' ')
       // const firstName = nameArray[0]
       // const lastName = nameArray[1]
       // const initials = nameArray[0] + nameArray[0]
//initialsArray.push(initialsArray)
    //} return initialsArray
//}
//makeInitials()
// 4. Write a function which takes in two numbers and a mathematical operator and performs Math on those two numbers utilizing that operator
const doMath = (num1, num2, operator) => {
    if(operator === '+'){
        return num1+num2
    }else if(operator === '-'){
        return num1-num2
    }else if(operator === '/'){
        return num1/num2
    }else(console.log("Not a Number"))
}
doMath(5,2,'-')
// 5. Write a function which takes in two arrays and returns those arrays combined together. 