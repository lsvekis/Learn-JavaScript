// Chapter 5 - Solution 1
JavaScript
let student = {};
console.log(student); // Output: {}

// Chapter 5 - Solution 2
JavaScript
let student = {};
student.name = "Kevin";
student.major = "Computer Science";
console.log(student); // Output: { name: 'Kevin', major: 'Computer Science' }

// Chapter 5 - Solution 3
JavaScript
let student = { name: 'Kevin', major: 'Computer Science' };
student['graduation year'] = 2026;
console.log(student); // Output: { name: 'Kevin', major: 'Computer Science', 'graduation year': 2026 }

// Chapter 5 - Solution 4
JavaScript
let student = { name: 'Kevin', major: 'Computer Science', 'graduation year': 2026 };
console.log(student.name); // Output: Kevin

// Chapter 5 - Solution 5
JavaScript
let student = { name: 'Kevin', major: 'Computer Science', 'graduation year': 2026 };
console.log(student['graduation year']); // Output: 2026

// Chapter 5 - Solution 6
JavaScript
let student = { name: 'Kevin', major: 'Computer Science', 'graduation year': 2026 };
student.major = "Data Science";
console.log(student); // Output: { name: 'Kevin', major: 'Data Science', 'graduation year': 2026 }

// Chapter 5 - Solution 7
JavaScript
let student = { name: 'Kevin', major: 'Data Science', 'graduation year': 2026 };
let propName = "major";
console.log(student[propName]); // Output: Data Science

// Chapter 5 - Solution 8
JavaScript
let course = {
  title: "Introduction to JS",
  credits: 3,
  instructor: {
    name: "Dr. Evelyn Reed",
    office: "Tech Building 410"
  }
};
console.log(course);
// Output: { title: 'Introduction to JS', credits: 3, instructor: { name: 'Dr. Evelyn Reed', office: 'Tech Building 410' } }

// Chapter 5 - Solution 9
JavaScript
let course = { title: 'Introduction to JS', credits: 3, instructor: { name: 'Dr. Evelyn Reed', office: 'Tech Building 410' } };
console.log(course.instructor.name); // Output: Dr. Evelyn Reed

// Chapter 5 - Solution 10
JavaScript
let course = { title: 'Introduction to JS', credits: 3, instructor: { name: 'Dr. Evelyn Reed', office: 'Tech Building 410' } };
delete course.credits;
console.log(course);
// Output: { title: 'Introduction to JS', instructor: { name: 'Dr. Evelyn Reed', office: 'Tech Building 410' } }

// Chapter 5 - Solution 11
JavaScript
let course = { title: 'Introduction to JS', instructor: { name: 'Dr. Evelyn Reed', office: 'Tech Building 410' } };
course.displayTitle = function() {
  console.log(this.title); // Use 'this' to refer to the course object
};
course.displayTitle(); // Output: Introduction to JS

// Chapter 5 - Solution 12
JavaScript
let course = {
  title: 'Introduction to JS',
  instructor: { name: 'Dr. Evelyn Reed', office: 'Tech Building 410' },
  displayTitle() { // Shorthand syntax
    console.log(this.title);
  }
};
course.displayTitle(); // Output: Introduction to JS

// Chapter 5 - Solution 13
JavaScript
let course = {
  title: 'Introduction to JS',
  instructor: { name: 'Dr. Evelyn Reed', office: 'Tech Building 410' },
  displayTitle() { console.log(this.title); },
  getSummary() {
    return `Title: ${this.title}, Instructor: ${this.instructor.name}`;
  }
};
let summary = course.getSummary();
console.log(summary); // Output: Title: Introduction to JS, Instructor: Dr. Evelyn Reed

// Chapter 5 - Solution 14
JavaScript
let counter = {
  value: 0,
  increment() {
    this.value++;
  }
};
counter.increment();
counter.increment();
console.log(counter.value); // Output: 2

// Chapter 5 - Solution 15
JavaScript
let counter = {
  value: 0,
  increment() { this.value++; },
  getValue() { return this.value; }
};
counter.increment();
console.log(counter.getValue()); // Output: 1

// Chapter 5 - Solution 16
JavaScript
let counter = {
  value: 0,
  increment() {
    this.value++;
    return this; // Return the object itself
  },
  getValue() { return this.value; }
};
counter.increment().increment(); // Method chaining
console.log(counter.getValue()); // Output: 2

// Chapter 5 - Solution 17
JavaScript
let myObj = {
  name: "MyObject",
  showThis() {
    console.log(this);
  }
};
myObj.showThis(); // Output: { name: 'MyObject', showThis: [Function: showThis] } (or similar object representation)

// Chapter 5 - Solution 18
JavaScript
'use strict'; // Use strict mode for predictable 'this' behavior
let myObj = {
  name: "MyObject",
  showThis() {
    console.log(this);
  }
};
let standaloneShowThis = myObj.showThis;
// standaloneShowThis(); // Output (Strict Mode): undefined
                        // Output (Non-Strict): Window/Global object

// Chapter 5 - Solution 19
JavaScript
let myObj = {
  name: "MyObject",
  showThis() { console.log(this); },
  arrowMethod: () => {
     // Arrow functions inherit 'this' from the surrounding scope
     // In this case (global scope or module scope), 'this' is likely not myObj
     console.log(this.name); // Likely undefined or error depending on outer scope's 'this'
     console.log("Inside arrow:", this); // Log 'this' itself
  }
};
myObj.arrowMethod(); // Output: undefined (or error) followed by the outer 'this'

// Chapter 5 - Solution 20
JavaScript
let counter = {
  value: 0,
  increment() { this.value++; return this; },
  getValue() { return this.value; },
  describe() {
    console.log(`The current counter value is ${this.getValue()}.`);
  }
};
counter.increment().increment();
counter.describe(); // Output: The current counter value is 2.

// Chapter 5 - Solution 21
JavaScript
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}
// Test it
let dog1 = new Dog("Buddy", "Golden Retriever");
console.log(dog1); // Output: Dog { name: 'Buddy', breed: 'Golden Retriever' }

// Chapter 5 - Solution 22
JavaScript
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}
let dog1 = new Dog("Buddy", "Golden Retriever");
let dog2 = new Dog("Lucy", "Poodle");
console.log(dog1); // Output: Dog { name: 'Buddy', breed: 'Golden Retriever' }
console.log(dog2); // Output: Dog { name: 'Lucy', breed: 'Poodle' }

// Chapter 5 - Solution 23
JavaScript
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
  this.isHappy = true; // Default property
}
let dog3 = new Dog("Max", "Labrador");
console.log(dog3); // Output: Dog { name: 'Max', breed: 'Labrador', isHappy: true }

// Chapter 5 - Solution 24
JavaScript
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
  this.isHappy = true;
  // Method defined inside constructor (less efficient)
  this.bark = function() {
    console.log(`Woof! My name is ${this.name}`);
  };
}
let dog1 = new Dog("Buddy", "Golden Retriever");
let dog2 = new Dog("Lucy", "Poodle");
dog1.bark(); // Output: Woof! My name is Buddy
dog2.bark(); // Output: Woof! My name is Lucy
console.log(dog1.bark === dog2.bark); // Output: false (each dog has its own copy)

// Chapter 5 - Solution 25
JavaScript
function Dog(name, breed) { /* ... */ }
let dog1 = new Dog("Buddy", "Golden Retriever");
console.log(dog1 instanceof Dog); // Output: true
console.log(dog1 instanceof Object); // Output: true (All objects inherit from Object)
let literal = {};
console.log(literal instanceof Dog); // Output: false

// Chapter 5 - Solution 26
JavaScript
'use strict'; // Recommended
function Dog(name, breed) {
  console.log("Inside Dog without new, this is:", this);
  // In strict mode, 'this' is undefined, causing TypeError here:
  // this.name = name;
  // this.breed = breed;
}
let notADog = Dog("Max", "Labrador"); // Call without 'new'
console.log(notADog); // Output (Strict Mode): undefined (function returns undefined implicitly)
                       // Output (Non-Strict): undefined (properties added to global object!)
// console.log(window.name); // Non-strict mode check - properties added globally!

// Chapter 5 - Solution 27
JavaScript
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
  return 5; // Return a primitive value
}
let dogMaybe = new Dog("Riley", "Beagle");
console.log(dogMaybe); // Output: Dog { name: 'Riley', breed: 'Beagle' }

// Chapter 5 - Solution 28
JavaScript
function Dog(name, breed) {
  this.name = name; // These assignments still happen...
  this.breed = breed;
  return { custom: 'object' }; // ...but this object is returned instead
}
let customObj = new Dog("Zoe", "Shepherd");
console.log(customObj); // Output: { custom: 'object' }

// Chapter 5 - Solution 29
JavaScript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.speed = 0; // Default property
}
let car1 = new Car("Honda", "Civic", 2021);
let car2 = new Car("Tesla", "Model 3", 2023);
console.log(car1); // Output: Car { make: 'Honda', model: 'Civic', year: 2021, speed: 0 }
console.log(car2); // Output: Car { make: 'Tesla', model: 'Model 3', year: 2023, speed: 0 }

// Chapter 5 - Solution 30
JavaScript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.speed = 0;
  this.accelerate = function() {
    this.speed += 10;
    console.log(`Current speed: ${this.speed} km/h`);
  };
}
let car1 = new Car("Honda", "Civic", 2021);
car1.accelerate(); // Output: Current speed: 10 km/h
car1.accelerate(); // Output: Current speed: 20 km/h

// Chapter 5 - Solution 31
JavaScript
function Dog(name, breed) { this.name = name; this.breed = breed; }
console.log(Dog.prototype); // Output: Dog {} (or similar, an object associated with Dog)
console.log(typeof Dog.prototype); // Output: object

// Chapter 5 - Solution 32
JavaScript
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
  this.isHappy = true;
}
// Add bark to the prototype
Dog.prototype.bark = function() {
  console.log(`Woof! My name is ${this.name}`);
};

let dog1 = new Dog("Buddy", "Golden Retriever");
let dog2 = new Dog("Lucy", "Poodle");
dog1.bark(); // Output: Woof! My name is Buddy (Method found on prototype)
dog2.bark(); // Output: Woof! My name is Lucy
console.log(dog1.bark === dog2.bark); // Output: true (Now they share the same function!)
console.log(dog1.hasOwnProperty('bark')); // Output: false

// Chapter 5 - Solution 33
JavaScript
function Dog(name, breed) { /* ... */ }
Dog.prototype.species = "Canine";

let dog1 = new Dog("Buddy", "Golden Retriever");
console.log(dog1.species); // Output: Canine (Found on prototype)
console.log(dog1.hasOwnProperty('species')); // Output: false

// Chapter 5 - Solution 34
JavaScript
function Dog(name, breed) { /* ... */ }
Dog.prototype.species = "Canine";
let dog1 = new Dog("Buddy", "Golden Retriever");
let dog2 = new Dog("Lucy", "Poodle");

dog1.species = "Special Canine"; // Add 'species' directly to dog1 instance

console.log(dog1.species); // Output: Special Canine (Own property found first)
console.log(dog2.species); // Output: Canine (Finds property on prototype)
console.log(dog1.hasOwnProperty('species')); // Output: true
console.log(dog2.hasOwnProperty('species')); // Output: false

// Chapter 5 - Solution 35
JavaScript
function Dog(name, breed) { /* ... */ }
Dog.prototype.bark = function() { /* ... */ };
let dog1 = new Dog("Buddy", "Golden Retriever");

let dog1Proto = Object.getPrototypeOf(dog1);
console.log(dog1Proto === Dog.prototype); // Output: true

let dogProtoProto = Object.getPrototypeOf(Dog.prototype);
console.log(dogProtoProto === Object.prototype); // Output: true (Usually inherits from Object.prototype)

let objectProtoProto = Object.getPrototypeOf(Object.prototype);
console.log(objectProtoProto); // Output: null (End of the chain)

// Chapter 5 - Solution 36
JavaScript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.speed = 0;
}
Car.prototype.accelerate = function() {
  this.speed += 10;
  console.log(`Accelerate: ${this.speed} km/h`);
};
Car.prototype.brake = function() {
  this.speed -= 5;
  if (this.speed < 0) {
    this.speed = 0;
  }
  console.log(`Brake: ${this.speed} km/h`);
};

let car1 = new Car("Honda", "Civic", 2021);
car1.accelerate(); // Output: Accelerate: 10 km/h
car1.accelerate(); // Output: Accelerate: 20 km/h
car1.brake();      // Output: Brake: 15 km/h
car1.brake();      // Output: Brake: 10 km/h

// Chapter 5 - Solution 37
JavaScript
let myLiteral = { name: "Test" };
console.log(myLiteral.toString()); // Output: [object Object]
console.log(myLiteral.hasOwnProperty('name')); // Output: true
console.log(myLiteral.hasOwnProperty('toString')); // Output: false

let literalProto = Object.getPrototypeOf(myLiteral);
console.log(literalProto === Object.prototype); // Output: true
console.log(Object.prototype.hasOwnProperty('toString')); // Output: true

// Chapter 5 - Solution 38
JavaScript
// **WARNING:** Modifying built-in prototypes like Object.prototype is generally
// considered bad practice as it can affect all objects and lead to conflicts.
// This is for demonstration purposes only.
Object.prototype.customMethod = function() {
  console.log("Called custom method!");
};

let obj1 = {};
let obj2 = { name: "Another" };
function Person(name){ this.name = name; }
let p1 = new Person("Alice");

obj1.customMethod(); // Output: Called custom method!
obj2.customMethod(); // Output: Called custom method!
p1.customMethod();   // Output: Called custom method!

// Clean up (important for demos like this)
delete Object.prototype.customMethod;
console.log(obj1.customMethod); // Output: undefined (after deletion)

// Chapter 5 - Solution 39
JavaScript
function Dog(name, breed) { /* ... */ }
console.log(Dog.prototype.constructor); // Output: [Function: Dog]
console.log(Dog.prototype.constructor === Dog); // Output: true

// Chapter 5 - Solution 40
JavaScript
function Dog(name, breed) { /* ... */ }
let dog1 = new Dog("Buddy", "Golden Retriever");

console.log(dog1.constructor); // Output: [Function: Dog]
console.log(dog1.constructor === Dog); // Output: true
console.log(dog1.hasOwnProperty('constructor')); // Output: false

// Chapter 5 - Solution 41
JavaScript
let playlist = {
  name: "My Chill Mix",
  songs: ["Song A", "Song B"],
  addSong(title) {
    this.songs.push(title);
    console.log(`Added "${title}" to ${this.name}`);
  },
  listSongs() {
    console.log(`${this.name} Songs:`);
    if (this.songs.length === 0) {
      console.log(" Playlist is empty.");
    } else {
      this.songs.forEach((song, index) => {
        console.log(` ${index + 1}. ${song}`);
      });
    }
  }
};

playlist.listSongs();
playlist.addSong("Song C");
playlist.listSongs();

// Chapter 5 - Solution 42
JavaScript
function Playlist(name) {
  this.name = name;
  this.songs = [];
}

Playlist.prototype.addSong = function(title) {
  this.songs.push(title);
  console.log(`Added "${title}" to ${this.name}`);
};

Playlist.prototype.listSongs = function() {
  console.log(`${this.name} Songs:`);
  if (this.songs.length === 0) {
    console.log(" Playlist is empty.");
  } else {
    this.songs.forEach((song, index) => {
      console.log(` ${index + 1}. ${song}`);
    });
  }
};

let workoutPlaylist = new Playlist("Workout Beats");
let studyPlaylist = new Playlist("Focus Music");

workoutPlaylist.addSong("Energy Track 1");
workoutPlaylist.addSong("Power Up");
studyPlaylist.addSong("Ambient Flow");

workoutPlaylist.listSongs();
studyPlaylist.listSongs();

// Chapter 5 - Solution 43
JavaScript
function Vehicle(make) {
  this.make = make;
}
Vehicle.prototype.startEngine = function() {
  console.log(`Starting engine for ${this.make}... Vroom!`);
};

function Car(make, model) {
  // Call Vehicle constructor to set 'make' (more advanced technique)
  // Vehicle.call(this, make); // Optional: for setting parent properties
  this.make = make; // Simpler for now
  this.model = model;
}

// --- Prototypal Inheritance Setup ---
// 1. Create a new object whose prototype is Vehicle.prototype
Car.prototype = Object.create(Vehicle.prototype);
// 2. Reset the constructor property (it was overwritten in step 1)
Car.prototype.constructor = Car;
// --- End Setup ---

// Add methods specific to Car
Car.prototype.drive = function() {
  console.log(`Driving the ${this.make} ${this.model}.`);
};

let myCar = new Car("Toyota", "Corolla");
myCar.startEngine(); // Inherited from Vehicle.prototype
myCar.drive();       // Own method from Car.prototype

console.log(myCar instanceof Car);      // Output: true
console.log(myCar instanceof Vehicle); // Output: true

// Chapter 5 - Solution 44
JavaScript
// Assuming code from exercise 43 is present...
let myCar = new Car("Toyota", "Corolla");

console.log(myCar.hasOwnProperty('startEngine')); // Output: false
console.log(typeof myCar.startEngine); // Output: function (found on prototype chain)

console.log(Object.getPrototypeOf(myCar) === Car.prototype); // Output: true
console.log(Object.getPrototypeOf(Car.prototype) === Vehicle.prototype); // Output: true

// Chapter 5 - Solution 45
JavaScript
function BankAccount(accountNumber) {
  this.accountNumber = accountNumber;
  this.balance = 0;
}

BankAccount.prototype.deposit = function(amount) {
  if (amount > 0) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  } else {
    console.log("Deposit amount must be positive.");
  }
};

BankAccount.prototype.withdraw = function(amount) {
  if (amount <= 0) {
    console.log("Withdrawal amount must be positive.");
  } else if (amount > this.balance) {
    console.log(`Insufficient funds. Cannot withdraw $${amount}. Balance: $${this.balance}`);
  } else {
    this.balance -= amount;
    console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
  }
};

let account1 = new BankAccount("ACC123");
account1.deposit(100);
account1.withdraw(30);
account1.withdraw(80); // Insufficient funds
account1.deposit(-10); // Invalid amount

// Chapter 5 - Solution 46
JavaScript
function BankAccount(accountNumber) { /* ... */ }
BankAccount.prototype.deposit = function(amount) {
  console.log("Context ('this') in deposit:", this); // Log 'this'
  if (amount > 0) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  } else { /* ... */ }
};
BankAccount.prototype.withdraw = function(amount) { /* ... */ };

let account1 = new BankAccount("ACC123");
account1.deposit(50);
// Output will include: Context ('this') in deposit: BankAccount { accountNumber: 'ACC123', balance: 0 } (before update)

// Chapter 5 - Solution 47
JavaScript
let employee = {
  company: "Tech Corp",
  greet() {
    console.log(`Hello from ${this.company}`);
  }
};

// Create manager, setting its prototype to employee
let manager = Object.create(employee);
manager.department = "Engineering"; // Add property specific to manager

manager.greet(); // Output: Hello from Tech Corp (Inherited method, 'this' is manager)
console.log(manager.company); // Output: Tech Corp (Inherited property)
console.log(manager.department); // Output: Engineering (Own property)

console.log(Object.getPrototypeOf(manager) === employee); // Output: true

// Chapter 5 - Solution 48
JavaScript
let employee = { company: "Tech Corp" /* ... */ };
let manager = Object.create(employee);
manager.department = "Engineering";
manager.level = 5; // Add own property

console.log(manager.hasOwnProperty('level'));      // Output: true
console.log(manager.hasOwnProperty('department')); // Output: true
console.log(manager.hasOwnProperty('company'));    // Output: false (Inherited)

// Chapter 5 - Solution 49
JavaScript
function Dog(name, breed) { /* ... */ }
Dog.prototype.bark = function() { /* ... */ };
let dog1 = new Dog("Buddy", "Golden Retriever");

console.log(dog1.nonExistent); // Output: undefined

try {
  dog1.fly(); // Attempt to call non-existent method
} catch (error) {
  console.error(error.name + ": " + error.message); // Output: TypeError: dog1.fly is not a function
}

