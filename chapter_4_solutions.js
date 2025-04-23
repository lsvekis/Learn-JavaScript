// Chapter 4 - Solution 1
JavaScript
function printMyName() {
  console.log("Your Name Here"); // Replace with your actual name
}
printMyName();

// Chapter 4 - Solution 2
JavaScript
sayHello(); // Called before definition

function sayHello() {
  console.log("Hello!");
}

// Chapter 4 - Solution 3
JavaScript
const printMessage = function() {
  console.log("Learning Functions!");
};
printMessage();

// Chapter 4 - Solution 4
JavaScript
// printMessage(); // This line would cause a ReferenceError

const printMessage = function() {
  console.log("Learning Functions!");
};
printMessage(); // Call works here

// Chapter 4 - Solution 5
JavaScript
const adder = function calculateSum() {
  console.log("Calculating...");
};
adder();

// Chapter 4 - Solution 6
JavaScript
function greet(name) {
  console.log("Greetings, " + name + "!");
}
greet("Your Name");

// Chapter 4 - Solution 7
JavaScript
function showDetails(firstName, age) {
  console.log(firstName + " is " + age + " years old.");
}
showDetails("Alice", 30);

// Chapter 4 - Solution 8
JavaScript
function showDetails(firstName, age) {
  console.log(firstName + " is " + age + " years old.");
}
showDetails("Bob"); // Output: Bob is undefined years old.

// Chapter 4 - Solution 9
JavaScript
function showDetails(firstName, age) {
  console.log(firstName + " is " + age + " years old.");
  console.log("Arguments object:", arguments); // Bonus: Shows all passed arguments
}
showDetails("Charlie", 25, "Extra Argument"); // Output: Charlie is 25 years old.
                                             // Output: Arguments object: { '0': 'Charlie', '1': 25, '2': 'Extra Argument' }

// Chapter 4 - Solution 10
JavaScript
function multiplyTwo(num1, num2) {
  console.log(num1 * num2);
}
multiplyTwo(6, 7); // Output: 42
multiplyTwo(10, -2); // Output: -20

// Chapter 4 - Solution 11
JavaScript
function addNumbers(a, b) {
  return a + b;
}
let resultSum = addNumbers(15, 10);
console.log("Sum:", resultSum); // Output: Sum: 25

// Chapter 4 - Solution 12
JavaScript
function isEven(number) {
  return number % 2 === 0;
}
console.log("Is 4 even?", isEven(4));   // Output: Is 4 even? true
console.log("Is 7 even?", isEven(7));   // Output: Is 7 even? false

// Chapter 4 - Solution 13
JavaScript
function formatName(firstName, lastName) {
  return lastName + ", " + firstName;
}
let formatted = formatName("John", "Doe");
console.log(formatted); // Output: Doe, John

// Chapter 4 - Solution 14
JavaScript
function logOnly(message) {
  console.log("Message:", message);
}
let returnValue = logOnly("Test Message"); // Output: Message: Test Message
console.log("Return value:", returnValue);   // Output: Return value: undefined

// Chapter 4 - Solution 15
JavaScript
function addNumbers(a, b) {
  return a + b;
}
console.log("Direct sum:", addNumbers(5, 3)); // Output: Direct sum: 8

// Chapter 4 - Solution 16
JavaScript
function greet(name = "Guest") {
  console.log("Greetings, " + name + "!");
}
greet("Alice"); // Output: Greetings, Alice!
greet();        // Output: Greetings, Guest!

// Chapter 4 - Solution 17
JavaScript
function power(base, exponent = 2) {
  return Math.pow(base, exponent);
}
console.log(power(5));     // Output: 25 (5^2)
console.log(power(2, 4));  // Output: 16 (2^4)

// Chapter 4 - Solution 18
JavaScript
function createMessage(text, sender = "System", priority = "Normal") {
  console.log("[" + priority + "] From: " + sender + " - Message: " + text);
}
createMessage("File saved.");                     // Output: [Normal] From: System - Message: File saved.
createMessage("User logged out.", "Auth");         // Output: [Normal] From: Auth - Message: User logged out.
createMessage("Disk almost full!", "Kernel", "High"); // Output: [High] From: Kernel - Message: Disk almost full!

// Chapter 4 - Solution 19
JavaScript
function createMessage(text, sender = "System", priority = "Normal") {
  console.log("[" + priority + "] From: " + sender + " - Message: " + text);
}
createMessage("Network error", undefined, "Critical");
// Output: [Critical] From: System - Message: Network error

// Chapter 4 - Solution 20
JavaScript
function setDefaultValue(a, b = a) {
  console.log("a:", a, "b:", b);
}
setDefaultValue(10);     // Output: a: 10 b: 10
setDefaultValue(5, 20); // Output: a: 5 b: 20

// Chapter 4 - Solution 21
JavaScript
function sumRest(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
console.log(sumRest(1, 2, 3));    // Output: 6
console.log(sumRest(10, 20));     // Output: 30
console.log(sumRest(5));          // Output: 5
console.log(sumRest());           // Output: 0

// Chapter 4 - Solution 22
JavaScript
function logFirstAndRest(firstArg, ...restArgs) {
  console.log("First Argument:", firstArg);
  console.log("Rest Arguments:", restArgs);
}
logFirstAndRest("Apple", "Banana", "Cherry");
// Output:
// First Argument: Apple
// Rest Arguments: [ 'Banana', 'Cherry' ]
logFirstAndRest(100);
// Output:
// First Argument: 100
// Rest Arguments: []

// Chapter 4 - Solution 23
JavaScript
function multiplyFirstByRestSum(multiplier, ...numbers) {
  let sumOfRest = 0;
  for (let num of numbers) {
    sumOfRest += num;
  }
  return multiplier * sumOfRest;
}
console.log(multiplyFirstByRestSum(2, 1, 2, 3)); // Output: 12 (2 * (1+2+3))
console.log(multiplyFirstByRestSum(10, 5, 5));   // Output: 100 (10 * (5+5))
console.log(multiplyFirstByRestSum(3));          // Output: 0 (3 * sum of empty array)

// Chapter 4 - Solution 24
JavaScript
// function testRest(...args, lastArg) { // SyntaxError: Rest parameter must be last formal parameter
//   console.log(args, lastArg);
// }

// Chapter 4 - Solution 25
JavaScript
function sumRest(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
console.log(sumRest()); // Output: 0

// Chapter 4 - Solution 26
JavaScript
const sayHelloArrow = () => {
  console.log("Hello!");
};
sayHelloArrow();

// Chapter 4 - Solution 27
JavaScript
const addArrow = (a, b) => a + b;

let resultArrow = addArrow(15, 10);
console.log("Arrow Sum:", resultArrow); // Output: Arrow Sum: 25

// Chapter 4 - Solution 28
JavaScript
const isEvenArrow = number => number % 2 === 0;

console.log("Arrow: Is 4 even?", isEvenArrow(4)); // Output: Arrow: Is 4 even? true
console.log("Arrow: Is 7 even?", isEvenArrow(7)); // Output: Arrow: Is 7 even? false

// Chapter 4 - Solution 29
JavaScript
const processData = data => {
  console.log("Processing...");
  return data.toUpperCase();
};
let processed = processData("example"); // Output: Processing...
console.log(processed);                // Output: EXAMPLE

// Chapter 4 - Solution 30
JavaScript
const greetDefaultArrow = (name = "Guest") => {
  console.log("Arrow Greetings, " + name + "!");
};
greetDefaultArrow("Bob"); // Output: Arrow Greetings, Bob!
greetDefaultArrow();     // Output: Arrow Greetings, Guest!

// Chapter 4 - Solution 31
JavaScript
var color = "blue"; // Global scope

function showColor() {
  var color = "green"; // Function scope
  console.log("Inside function:", color); // Accesses function-scoped variable
}

showColor(); // Output: Inside function: green
console.log("Outside function:", color); // Accesses global-scoped variable
// Output: Outside function: blue

// Chapter 4 - Solution 32
JavaScript
if (true) {
  let x = 10;
  console.log("Inside block:", x); // Output: Inside block: 10
}
// console.log("Outside block:", x); // ReferenceError: x is not defined

// Chapter 4 - Solution 33
JavaScript
if (true) {
  var y = 20;
  console.log("Inside block:", y); // Output: Inside block: 20
}
console.log("Outside block:", y); // Output: Outside block: 20

// Chapter 4 - Solution 34
JavaScript
let level1 = "Global";

function outerFunc() {
  let level2 = "Outer Function";

  function innerFunc() {
    let level3 = "Inner Function"; // Not used outside, but exists
    console.log(level1); // Found in global scope
    console.log(level2); // Found in outer function's scope
    console.log(level3); // Found in inner function's scope
  }

  innerFunc();
}

outerFunc();
// Output:
// Global
// Outer Function
// Inner Function

// Chapter 4 - Solution 35
JavaScript
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I was hoisted";
console.log(hoistedVar); // Output: I was hoisted

// Chapter 4 - Solution 36
JavaScript
// console.log(tdzLet); // ReferenceError: Cannot access 'tdzLet' before initialization
let tdzLet = "No TDZ access";
console.log(tdzLet); // Output: No TDZ access

// Chapter 4 - Solution 37
JavaScript
declaredFunc(); // Output: Declared and Hoisted!

function declaredFunc() {
  console.log("Declared and Hoisted!");
}

// Chapter 4 - Solution 38
JavaScript
console.log(typeof exprFuncVar); // Output: undefined
// exprFuncVar(); // TypeError: exprFuncVar is not a function

var exprFuncVar = function() {
  console.log("Expression with var");
};
exprFuncVar(); // Output: Expression with var

// Chapter 4 - Solution 39
JavaScript
// console.log(typeof exprFuncLet); // ReferenceError: Cannot access 'exprFuncLet' before initialization
// exprFuncLet(); // ReferenceError: Cannot access 'exprFuncLet' before initialization

let exprFuncLet = function() {
  console.log("Expression with let");
};
exprFuncLet(); // Output: Expression with let

// Chapter 4 - Solution 40
JavaScript
function checkParamScope(param) {
  // 'param' initially holds the argument value (e.g., 10)
  console.log("Parameter value:", param);
  if (true) {
     let param = 20; // New variable 'param' scoped to the if block
     console.log("Inner block param:", param); // Accesses the inner 'param'
  }
  console.log("Outer function param:", param); // Accesses the parameter 'param'
}

checkParamScope(10);
// Output:
// Parameter value: 10
// Inner block param: 20
// Outer function param: 10

// Chapter 4 - Solution 41
JavaScript
const calculate = function(num1, num2, operation) {
  if (operation === 'add') {
    return num1 + num2;
  } else if (operation === 'subtract') {
    return num1 - num2;
  } else if (operation === 'multiply') {
    return num1 * num2;
  } else if (operation === 'divide') {
    if (num2 === 0) {
      return "Error: Division by zero";
    }
    return num1 / num2;
  } else {
    return "Invalid operation";
  }
};

console.log(calculate(10, 5, 'add'));      // Output: 15
console.log(calculate(10, 5, 'subtract')); // Output: 5
console.log(calculate(10, 5, 'multiply')); // Output: 50
console.log(calculate(10, 5, 'divide'));   // Output: 2
console.log(calculate(10, 0, 'divide'));   // Output: Error: Division by zero
console.log(calculate(10, 5, 'power'));    // Output: Invalid operation

// Chapter 4 - Solution 42
JavaScript
const calculateArrow = (num1, num2, operation) => {
  if (operation === 'add') {
    return num1 + num2;
  } else if (operation === 'subtract') {
    return num1 - num2;
  } else if (operation === 'multiply') {
    return num1 * num2;
  } else if (operation === 'divide') {
    if (num2 === 0) {
      return "Error: Division by zero";
    }
    return num1 / num2;
  } else {
    return "Invalid operation";
  }
};

console.log(calculateArrow(8, 2, 'add')); // Output: 10
console.log(calculateArrow(8, 2, 'divide'));// Output: 4

// Chapter 4 - Solution 43
JavaScript
function createCounter() {
  let count = 0; // Variable in the outer function's scope
  return function() { // Return the inner function
    count++; // Increment the outer 'count'
    return count; // Return the updated count
  };
}

const counter1 = createCounter();
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2

const counter2 = createCounter(); // Creates a separate counter
console.log(counter2()); // Output: 1
console.log(counter1()); // Output: 3 (counter1 continues independently)

// Chapter 4 - Solution 44
JavaScript
function logMessageWithTags(message = "No message", ...tags) {
  let tagString = tags.length > 0 ? " [" + tags.join(", ") + "]" : "";
  console.log(message + tagString);
}

logMessageWithTags("User updated", "user", "database", "audit");
// Output: User updated [user, database, audit]
logMessageWithTags("System check");
// Output: System check
logMessageWithTags(undefined, "error", "critical");
// Output: No message [error, critical]
logMessageWithTags();
// Output: No message

// Chapter 4 - Solution 45
JavaScript
var a = 1;
function puzzle() {
  console.log(a); // ?
  var a = 2;
  console.log(a); // ?
}
puzzle();
console.log(a); // ?

Prediction & Explanation:
console.log(a); // Output: undefined - Inside puzzle, var a is hoisted to the top of the function's scope (var a;). At this point, the function-scoped a exists but is undefined, shadowing the global a.
var a = 2; - The function-scoped a is assigned the value 2.
console.log(a); // Output: 2 - Logs the current value of the function-scoped a.
console.log(a); // Output: 1 - Outside the function, this logs the global variable a, which was never changed.
Block Scope Puzzle (let): Predict the output. Explain your reasoning.
Code:
 JavaScript
let b = 'global';
if (true) {
  // console.log(b); // ? (Uncomment to test TDZ)
  let b = 'block';
  console.log(b); // ?
}
console.log(b); // ?

Prediction & Explanation:
(Uncommented line) - ReferenceError: Cannot access 'b' before initialization. The let b inside the block is hoisted to the top of the block, creating a TDZ for b within that block, even though there's a global b.
let b = 'block'; - Initializes the block-scoped b.
console.log(b); // Output: block - Logs the block-scoped b.
console.log(b); // Output: global - Outside the block, this logs the global b, which was unaffected by the block-scoped variable.
Function Returning Function: Create a function multiplier(factor) that takes a number factor and returns a new function. The returned function should take a number n and return n * factor.
Code:
 JavaScript
function multiplier(factor) {
  return function(n) {
    return n * factor;
  };
}

const double = multiplier(2); // double is now a function that multiplies by 2
const triple = multiplier(3); // triple is now a function that multiplies by 3

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
console.log(double(10)); // Output: 20

// Chapter 4 - Solution 46
JavaScript
let b = 'global';
if (true) {
  // console.log(b); // ? (Uncomment to test TDZ)
  let b = 'block';
  console.log(b); // ?
}
console.log(b); // ?

Prediction & Explanation:
(Uncommented line) - ReferenceError: Cannot access 'b' before initialization. The let b inside the block is hoisted to the top of the block, creating a TDZ for b within that block, even though there's a global b.
let b = 'block'; - Initializes the block-scoped b.
console.log(b); // Output: block - Logs the block-scoped b.
console.log(b); // Output: global - Outside the block, this logs the global b, which was unaffected by the block-scoped variable.
Function Returning Function: Create a function multiplier(factor) that takes a number factor and returns a new function. The returned function should take a number n and return n * factor.
Code:
 JavaScript
function multiplier(factor) {
  return function(n) {
    return n * factor;
  };
}

const double = multiplier(2); // double is now a function that multiplies by 2
const triple = multiplier(3); // triple is now a function that multiplies by 3

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
console.log(double(10)); // Output: 20

// Chapter 4 - Solution 47
JavaScript
function multiplier(factor) {
  return function(n) {
    return n * factor;
  };
}

const double = multiplier(2); // double is now a function that multiplies by 2
const triple = multiplier(3); // triple is now a function that multiplies by 3

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
console.log(double(10)); // Output: 20

// Chapter 4 - Solution 48
JavaScript
(function() {
  let secret = "This is private";
  console.log("Inside IIFE:", secret); // Output: Inside IIFE: This is private
})(); // The final () invokes the function immediately

// console.log(secret); // ReferenceError: secret is not defined

// Chapter 4 - Solution 49
JavaScript
(() => {
  let secret = "Arrow IIFE private";
  console.log("Inside Arrow IIFE:", secret); // Output: Inside Arrow IIFE: Arrow IIFE private
})();

// console.log(secret); // ReferenceError: secret is not defined

// Chapter 4 - Solution 50
JavaScript
var x = 10;
function testScope() {
  console.log(x); // ?
  if (true) {
    var x = 20;
    console.log(x); // ?
  }
  console.log(x); // ?
}
testScope();
console.log(x); // ?

Prediction & Explanation:
console.log(x); // Output: undefined - Inside testScope, var x (from the if block) is hoisted to the top of the function scope. This function-scoped x shadows the global x and is undefined at this point.
var x = 20; - The function-scoped x is assigned the value 20.
console.log(x); // Output: 20 - Logs the function-scoped x.
console.log(x); // Output: 20 - Still inside the function, logs the function-scoped x again (remember var is not block-scoped).
console.log(x); // Output: 10 - Outside the function, logs the global x, which was never modified by the function's local x.

Congratulations! You've covered the essentials of JavaScript functions and scope. These concepts are critical, and mastering them through practice is key. Keep experimenting and building!

Chapter 5: Working with Objects and Prototypes
Welcome to Chapter 5! So far, we've worked with basic data types like numbers, strings, and booleans. Now, we'll explore objects, a powerful way to group related data and functionality together. Objects allow you to model real-world things (like a user, a car, or a product) or abstract concepts within your code. We'll also dive into prototypes, the underlying mechanism that JavaScript uses for inheritance and sharing properties among objects.
Learning Objectives
By the end of this chapter, you will be able to:
Define what JavaScript objects are and explain their structure (key-value pairs).
Create objects using object literal syntax ({}).
Access, add, modify, and delete object properties using dot (.) and bracket ([]) notation.
Define and call methods (functions stored as object properties).
Understand and correctly use the this keyword within object methods.
Create blueprint-like constructor functions to generate multiple similar objects.
Use the new keyword to instantiate objects from constructor functions.
Explain the concept of a prototype and the prototype chain.
Add shared properties and methods to a constructor's prototype.
Understand how prototypal inheritance allows objects to access properties and methods from their prototypes.
Let's begin exploring the versatile world of JavaScript objects!
What is an Object?
In JavaScript, an object is a collection of related data and/or functionality. Think of it like a container where you store information and actions related to a specific entity. This information is stored as key-value pairs.
Key: A string (or Symbol) that acts as the name or identifier for a piece of data or functionality.
Value: Any valid JavaScript value (like a number, string, boolean, array, another object, or even a function).
When the value associated with a key is a simple data type (string, number, etc.) or another object/array, it's called a property. When the value is a function, it's called a method.
Example: Imagine modeling a simple user object.
User:
  Properties:
    - firstName: "Alice"
    - lastName: "Wonderland"
    - age: 30
    - isLoggedIn: true
  Methods:
    - login()
    - logout()
    - greet()

Objects help organize code by keeping related data and the functions that operate on that data together.
Creating Objects: Object Literals
The easiest and most common way to create an object is using object literal syntax: curly braces {}. Inside the braces, you define key-value pairs separated by commas.
Syntax:
JavaScript
let objectName = {
  key1: value1,
  key2: value2,
  methodKey: function() {
    // code for the method
  },
  // ES6 shorthand for methods:
  anotherMethod() {
    // code for this method
  }
};

Example:
JavaScript
let person = {
  firstName: "Bob",
  lastName: "Ross",
  occupation: "Painter",
  hobbies: ["Painting", "Nature", "Happy Little Trees"],
  isHappy: true,

  // A method (function as a property value)
  sayHello: function() {
    console.log("Hello there! Happy painting!");
  },

  // ES6 method shorthand syntax
  describe() {
    console.log("A happy painter who loves nature.");
  }
};

console.log(person);
// Output: { firstName: 'Bob', lastName: 'Ross', occupation: 'Painter', hobbies: [ 'Painting', 'Nature', 'Happy Little Trees' ], isHappy: true, sayHello: [Function: sayHello], describe: [Function: describe] }

Accessing Object Properties
Once you have an object, you need ways to get (access), set (modify), or add properties. There are two main ways:
1. Dot Notation (.)
This is the most common and generally preferred method when the property key is a valid JavaScript identifier (starts with a letter, $ or _, and contains only letters, numbers, $, or _).
Syntax: objectName.propertyName
Example:
JavaScript
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Silver"
};

// Accessing properties
console.log(car.make);   // Output: Toyota
console.log(car.year);   // Output: 2022

// Modifying properties
car.color = "Blue";
console.log(car.color);  // Output: Blue

// Adding new properties
car.isRunning = false;
console.log(car.isRunning); // Output: false

console.log(car);
// Output: { make: 'Toyota', model: 'Camry', year: 2022, color: 'Blue', isRunning: false }

2. Bracket Notation ([])
Bracket notation is more versatile. You must use it when:
The property key is stored in a variable.
The property key contains spaces, hyphens, or other special characters that are not valid in dot notation.
The property key is a number (though this can sometimes be confusing, keys are usually strings).
Syntax: objectName['propertyNameAsString'] or objectName[variableContainingKeyName]
Example:
JavaScript
let settings = {
  'user-id': 12345,
  'theme color': 'dark',
  'font size': 14,
  isEnabled: true
};

// Accessing properties with special characters
console.log(settings['user-id']);      // Output: 12345
console.log(settings['theme color']);  // Output: dark

// Using a variable to hold the key name
let settingToAccess = 'font size';
console.log(settings[settingToAccess]); // Output: 14

// Modifying properties
settings['theme color'] = 'light';
console.log(settings['theme color']); // Output: light

// Adding new properties
let newPropKey = 'notifications-enabled';
settings[newPropKey] = false;
console.log(settings[newPropKey]); // Output: false

// Accessing a property that works with dot notation using brackets
console.log(settings['isEnabled']); // Output: true (works, but settings.isEnabled is cleaner)

console.log(settings);
// Output: {
//   'user-id': 12345,
//   'theme color': 'light',
//   'font size': 14,
//   isEnabled: true,
//   'notifications-enabled': false
// }

Property Access Checklist:
Export to Sheets
Action Item: Create an object representing a book with properties like title, author, page count, and publication year. Access and log each property using both dot and bracket notation where applicable. Try adding a new property like genre.
Methods and the this Keyword
As mentioned, when a function is stored as a property of an object, it's called a method. Methods define the behavior or actions an object can perform.
JavaScript
let rectangle = {
  width: 10,
  height: 5,
  calculateArea: function() {
    // How do we access width and height *of this rectangle*?
    // We need a way to refer to the object itself from within the method.
    return this.width * this.height; // 'this' refers to the 'rectangle' object here
  },
  // ES6 shorthand
  describe() {
      console.log(`Rectangle is ${this.width} wide and ${this.height} high.`);
  }
};

// Calling the methods
let area = rectangle.calculateArea();
console.log("Area:", area); // Output: Area: 50

rectangle.describe(); // Output: Rectangle is 10 wide and 5 high.

The Mysterious this
The this keyword is one of the more confusing aspects of JavaScript for beginners. Its value is determined by how a function is called (known as the "call site").
For this chapter, we'll focus on the most common and intuitive case:
Rule: When a function is called as a method of an object (using dot notation like myObject.myMethod()), the this keyword inside that method refers to the object the method was called on (the object before the dot).
In the rectangle.calculateArea() example:
calculateArea is called as a method of the rectangle object.
Therefore, inside calculateArea, this refers to rectangle.
this.width becomes rectangle.width (which is 10).
this.height becomes rectangle.height (which is 5).
What happens if this isn't used correctly?
JavaScript
let counter = {
  count: 0,
  increment: function() {
    // If we forget 'this':
    // count++; // ReferenceError: count is not defined
    // We need to specify we mean the 'count' property of *this* object
    this.count++;
    console.log("Count is now:", this.count);
  }
};

counter.increment(); // Output: Count is now: 1 ('this' refers to 'counter')
counter.increment(); // Output: Count is now: 2 ('this' refers to 'counter')

Important Note: The behavior of this can change in other situations (like in standalone functions, arrow functions, or when using methods like .call(), .apply(), .bind()). We are focusing only on the standard object method call scenario here. Arrow functions, notably, do not get their own this value; they inherit it from their surrounding scope, which makes them unsuitable for object methods that need to refer to the object itself using this.
Action Item: Add a getFullName method to the person object (from earlier) that uses this to access the firstName and lastName properties and returns the full name string. Call the method and log the result.
Creating Multiple Objects: Constructor Functions
Object literals are great for single objects. But what if you need to create many similar objects, like multiple users, products, or game characters? Writing the same literal structure over and over is repetitive and error-prone.
This is where constructor functions come in. They act as blueprints or templates for creating objects.
Convention: Constructor function names usually start with a capital letter.
Syntax:
JavaScript
function ConstructorName(param1, param2) {
  // 'this' refers to the new empty object being created
  this.propertyName1 = param1;
  this.propertyName2 = param2;
  // You can also define methods here, but it's often better
  // to put them on the prototype (see later)
  this.methodName = function() {
    console.log("Method called on object with property1:", this.propertyName1);
  };
}

How it works: A constructor function is a regular function, but it's designed to be used with the new keyword.
The new Keyword
When you call a constructor function using new, JavaScript does four main things automatically:
Creates a new, empty object. {}
Sets the this keyword inside the constructor function to point to this new empty object.
Links the new object's internal prototype ([[Prototype]]) to the constructor function's prototype object (more on this soon!). This is how inheritance works.
Returns the new object automatically (unless the constructor explicitly returns a different object).
Example:
JavaScript
// Constructor Function for creating 'Product' objects
function Product(name, price, category) {
  console.log("Inside constructor, 'this' starts as:", this); // {} initially
  this.productName = name;
  this.price = price;
  this.category = category;
  this.isOnSale = false; // Default property

  this.displayInfo = function() {
    console.log(`${this.productName} ($${this.price}) - Category: ${this.category}`);
  };
  console.log("Inside constructor, 'this' after assignments:", this);
  // Implicitly returns 'this'
}

// Creating instances (objects) using the constructor and 'new'
let product1 = new Product("Laptop", 1200, "Electronics");
let product2 = new Product("Coffee Mug", 15, "Kitchenware");

console.log("Product 1:", product1);
console.log("Product 2:", product2);

// Calling methods on the instances
product1.displayInfo(); // Output: Laptop ($1200) - Category: Electronics
product2.displayInfo(); // Output: Coffee Mug ($15) - Category: Kitchenware

// Each object has its own properties and methods (for now)
console.log(product1.productName); // Output: Laptop
console.log(product2.price);       // Output: 15

Using constructors with new provides a structured way to create multiple objects with the same properties and methods.
new Keyword Checklist:
[ ] Create empty object {}? Yes.
[ ] Set this to the new object? Yes.
[ ] Link object's [[Prototype]] to Constructor.prototype? Yes.
[ ] Return the new object? Yes (implicitly).
Action Item: Create a Book constructor function that takes title, author, and pages as arguments and assigns them as properties to the new object using this. Create two different book objects using your constructor and new. Log both book objects.
Prototypes and Prototypal Inheritance
Look back at the Product constructor example. Notice that the displayInfo method was defined directly inside the constructor using this.displayInfo = function() {...}. This means every single Product object created with new Product(...) gets its own separate copy of the displayInfo function in memory. For hundreds or thousands of products, this is inefficient.
JavaScript offers a better way using prototypes.
Key Concepts:
Every JavaScript function automatically has a special property called prototype. This prototype property itself is an object. (e.g., Product.prototype).
When you create an object using new ConstructorFunction(), the new object's internal, hidden [[Prototype]] property is set to point to the same object that the constructor's prototype property points to (ConstructorFunction.prototype).
Objects inherit properties and methods from their prototype. When you try to access a property or method on an object (e.g., product1.someMethod()), JavaScript follows these steps:
Does product1 itself have a someMethod property? If yes, use it.
If not, does product1's prototype (Product.prototype) have someMethod? If yes, use it.
If not, does the prototype's prototype (Object.prototype, usually) have someMethod? If yes, use it.
This continues up the prototype chain until the property is found or the chain ends (at null). If not found anywhere, the result is undefined (for properties) or a TypeError (if trying to call undefined as a function).
Putting Methods on the Prototype:
Instead of defining methods inside the constructor, we should add them to the constructor's prototype object. This way, all instances share the same function, saving memory.
Example (Refactored Product):
JavaScript
// Constructor Function - only sets data properties
function Product(name, price, category) {
  this.productName = name;
  this.price = price;
  this.category = category;
  this.isOnSale = false;
}

// Add methods to the Product constructor's 'prototype' object
Product.prototype.displayInfo = function() {
  // 'this' inside a prototype method still refers to the instance
  // the method was called on (e.g., product1 or product2)
  console.log(`${this.productName} ($${this.price}) - Category: ${this.category}`);
};

Product.prototype.toggleSale = function() {
  this.isOnSale = !this.isOnSale;
  console.log(`${this.productName} on sale status: ${this.isOnSale}`);
};

// Creating instances
let product1 = new Product("Laptop", 1200, "Electronics");
let product2 = new Product("Coffee Mug", 15, "Kitchenware");

console.log("Product 1:", product1); // Note: displayInfo & toggleSale are NOT directly on product1
console.log("Product 2:", product2);

// Calling methods - JavaScript finds them on Product.prototype via the chain
product1.displayInfo(); // Output: Laptop ($1200) - Category: Electronics
product2.displayInfo(); // Output: Coffee Mug ($15) - Category: Kitchenware

product1.toggleSale();  // Output: Laptop on sale status: true
product2.toggleSale();  // Output: Coffee Mug on sale status: true

// Check where the method actually exists
console.log(product1.hasOwnProperty('displayInfo')); // Output: false
console.log(Product.prototype.hasOwnProperty('displayInfo')); // Output: true
console.log(product1.displayInfo === product2.displayInfo); // Output: true (They share the exact same function!)

This mechanism is called prototypal inheritance. Objects inherit properties and methods from their prototype object, which inherits from its prototype, and so on up the chain. This is JavaScript's core inheritance model, differing from the "class-based" inheritance found in languages like Java or C++. (Note: ES6 class syntax is largely "syntactic sugar" over this prototypal system).
Action Item: Refactor your Book constructor. Move the creation of any methods (e.g., a displaySummary method that logs "Title by Author") out of the constructor function itself and add them to the Book.prototype instead. Verify that your book instances can still call the method.
Exercises (1-50)
Time to practice these concepts!
Object Literals & Properties
Create Empty Object: Create an empty object literal named student.
Code:
 JavaScript
let student = {};
console.log(student); // Output: {}

