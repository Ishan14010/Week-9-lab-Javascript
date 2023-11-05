const output = document.getElementById('output');
const output2 = document.getElementById('output2');

// Step 1a
function createNewPerson(name) {
    var obj = {};
    obj.name = name;
    obj.greetings = function () {
        alert(`Hello! I am ${this.name}`);
    };
    return obj;
}

// Step 1b
var person1 = createNewPerson("Person1");
var person2 = createNewPerson("Person2");

// Step 2a
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        return `The interests of ${this.name.firstName} ${this.name.lastName} of age ${this.age} of gender ${this.gender} are ${this.interests}.`;
    };
}

// Step 2b
var p2 = new Person("p2", "lName2", 20, "Male", ["dancing", "coding", "swimming"]);

// Step 3a-c
// Uncomment and use the console to access properties and methods of 'person1'

// Step 4a-c
var car = new Object();
car.brand = "Honda";
car.color = "White";
car.price = 50;
car.fun = function () {
    console.log("The car is moving!");
};
// Update properties in the console and call car.fun()

// Step 5a-b
var anotherCar = Object.create(car);
console.log(anotherCar.brand);

// The code above reflects the steps outlined in the comments for 'oop.js'
