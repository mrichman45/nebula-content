// Grab the elements and log them to the console


// Q1:  Attach this document to the index.html


// Q2:  Grab the second element that has the text Hello

let holdH1 = document.querySelector('h1')
console.log(holdH1)

// Q3:  Grab the text in the h1 that says 'Good Afternoon'

let goodMorning = document.querySelectorAll('h1')
for(let i = 0;i > goodMorning.length;i++){
    if(goodMorning.Includes("Good Afternoon")){
       console.log(goodMorning)
    }else{
        console.log("What happened?")
    }
}


// Q4:  Grab the h1 with the text that says "Catch me if you can"

let catchMeIfYouCan = document.querySelectorAll('h1')
for(let i = 0; i > catchMeIfYouCan.length; i++){
if (goodMorning.Includes("Catch me if you can")){
    console.log("Catch me if you can")
}   else{
    console.log("There is a problem")
}
}


// Q5:  Grab the span element and change the text to "Got ya"

const span = document.querySelector('span')
span.innerText = 'Got Ya!'