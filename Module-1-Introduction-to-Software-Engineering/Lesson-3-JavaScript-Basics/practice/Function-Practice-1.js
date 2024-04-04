// 1. Write a function that takes in 1 number and returns that number + 1
function addOne(num){
    return num+1;
}
//console.log(addOne(1))
// 2. Write a function that takes in a name and outputs a sentence saying goodnight to that name.

function goodNight(name){
    return `Goodnight ${name}`
}
//console.log(goodNight("Michael"))
// 3. Write a function that takes in an array of numbers. If that array includes the number 0 return 'This array has the number zero in it'

function writeIntoArray(array){
    if(array.includes(0)){
       return true
        
    }else{
        return false
    }
}
console.log(writeIntoArray([0 ,55, 88, 60, 20]))
// 4. Write a function that console logs 'hello world' 10 times to the console. 

function annoyPeople(string){
    for(let i = 0; i <= 10; i++){
        console.log(string)
    }
}
//annoyPeople("Dog")
// 5. Write the prior function utilizing a 'fat arrow' function

const sayHello = () => {
    for(let i = 0;i <=10; i++){
    console.log("Hello World")
}
}

sayHello()