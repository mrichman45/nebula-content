// 1. Create an object for a celebrity and save it to a variable

const celebrity = {
    name: "Chris",
    gender: "Male",
    actedIn: "Thor",
    identify: function(){
        console.log(`This is ${celebrity.name}`)
    }
}
celebrity.identify()

// 2. Using dot-notation add 3 key-value pairs to the celebrity
celebrity.franchise = "Marvel"
celebrity.partOf = "Avengers"
celebrity.lastName = "Hemsworth"
// 3. Using bracket-notation add 3 key-value pairs to the celebrity

celebrity['placeOfStudy'] = "Heathmont College"
celebrity['numberOfChildren'] = 3
celebrity['isMale'] = true

// 4. Write a function that allows us to add or update 3 properties

// 5. Using a loop - log all the celebrities properties to the console

const listOfProperties = []
for(i = 0; i > listOfProperties.length; i++){
    
}