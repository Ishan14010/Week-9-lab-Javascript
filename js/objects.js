const output = document.getElementById('output');

// Step 1
var person = {
    name: {
        firstName: "Priyansh",
        lastName: "Thakar",
    },
    age: 16,
    gender: "Male",
    address: {
        streetNo: 100,
        streetName: "Georgian Drive",
        city: "Barrie",
    },
    interests: ["dancing", "coding", "swimming"],
    greetings: function () {
        alert(`Hello! I am ${this.name.firstName} ${this.name.lastName}`);
    },
    bio: function () {
        return `The interests of ${this.name.firstName} ${this.name.lastName} of age ${this.age} of gender ${this.gender} are ${this.interests}.`;
    }
};

// Step 2a
person.name[0] = "Sample"; // Add another name
// Access properties in the console: person.name[0], person.age, person.gender, person.interests[0]

// Step 3
person.greeting = function () {
    alert(`Hello! I am ${this.name.firstName}`);
};
// Call person.greeting() in the console

// Step 4
person.bio = function () {
    return `The interests of ${this.name.firstName} ${this.name.lastName} of age ${this.age} of gender ${this.gender} are ${this.interests}.`;
};

// Step 5a
output.textContent = person.name.firstName + " " + person.name.lastName + ", " + person.age + ", " + person.gender;
output.textContent = person.bio();

// Step 6a
person.name = { firstName: "Robb", lastName: "Stark" };
person.greetings = function () {
    alert(`Hello! I am ${this.name.firstName} ${this.name.lastName}`);
};
person.bio = function () {
    return `The interests of ${this.name.firstName} ${this.name.lastName} of age ${this.age} of gender ${this.gender} are ${this.interests}.`;
};

// Step 8
person.name.firstName = "Jon";
person.age = 80;

// Step 9a
person.eyes = "green";
console.log(person.eyes);

// Step 9b
person.goodbye = function () {
    alert(`This is ${this.name.firstName} signing off!`);
};
// Call person.goodbye() in the console

// Step 11
var person1 = {
    name: "Person1",
    hello: function () {
        alert(`Hello! I am ${this.name}`);
    },
};

var person2 = {
    name: "Person2",
    hello: function () {
        alert(`Hello! I am ${this.name}`);
    },
};
// Call person1.hello() and person2.hello() in the console

// The code above reflects the steps outlined in the comments for 'objects.js'
