// SUBMIT A LINK TO THE GITHUB REPO FOR THIS ASSIGNMENT

// 1.Create an object for your dream vehicle
// // Give it a minimum of 6 key-value pairs
// // This object should contain many datatypes (string, number, boolean, null, array)

const car = {
    make: 'Nissan',
    color: 'white',
    isAmerican: false,
    year: 2020,
    isMessy: true,
    numOfWheels: 4
}
// 2. Using dot-notation Log to the console 3 properties from the previous object

console.log(car.make, car.isMessy, car.color)

// 3. Using bracket-notation Log to the console 3 properties from the previous object

console.log(car['year'],car['numOfWheels'], car['isAmerican'])

// 4.Try and log a property that doesn't already exist - what output do we get?

console.log(car.engine)

// 5.bAdd a new key-value pair to the vehicle. 

car.engine = "V6"

// 6. Using bracket-notation update a property on the vehicle. 

car['isAmerican'] = true

// 7. Using dot-notation update a property on the vehicle. 

car.make = 'Toyota'

// 8. Create a method for turning your vehicle on

car.start = function start(){
    console.log("Vroom!")
}
car.start()
// 9.Create a method for turning your vehicle off

car.shutOff = function stop(){
    console.log("Ding", "Ding")
}
car.shutOff()
//10.   
// // a. Check if your vehicle is on (it should be off)
// // b. Start your vehicle
// // c. Check if your vehicle is on (it should be on)
// // d. Stop your vehicle
// // e. Check if your vehicle is on (it should be on)

