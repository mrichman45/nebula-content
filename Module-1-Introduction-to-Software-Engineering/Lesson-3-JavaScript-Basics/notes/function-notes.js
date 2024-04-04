function greeting(){
    console.log("Hello World!")
}

const greeting1 = function(){
    console.log("Hello World!")
}

const greeting2 = () => {
    console.log("Hello World!");
}

//greeting() //invoking function

function sayHello(name){
console.log(`Hello, my name is ${name}`)
}

//Define a function called `multiplyBy10` that takes in one `number` argument and returns that `number` multiplied by 10. Test the function with some numbers.
//Define a function called `sayGoodbye` that uses a `name` parameter and returns a farewell message incorporating that `name`.
//Define a function called `evenNumbers` that takes in an array as an argument and iterates over that array and returns a new array with all the even numbers from that input array (Hint: you can use the `modulus` operator to check whether a number is even or not).
//Define a function called `reverseWords` that takes in a string and returns a string with the order of words reversed.

function multiplyBy10(num){
    console.log(num *10)
}
multiplyBy10(1)

function sayGoodbye(name){
    console.log(`Goodbye ${name}`)
}
sayGoodbye("Michael")

const evenNumbers = function(array){
    const evenArray = []
    for(let i = 0; i < array.length; i++){
        const num = array[i]
        if(num % 2 === 0){
            const randomNumbers = [5,15,25,35,10,25,33,32]
            evenArray.push(randomNumbers)
            return randomNumbers;
        }
    }
}
evenNumbers(2,5,10,20)




function reverseWords (string){
    let splitString = string.split(" ")
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join(" ");
    return joinArray;
}
console.log(reverseWords("This is a Car"))

