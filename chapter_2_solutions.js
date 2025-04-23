// Chapter 2 - Solution 1
JavaScript
const length = 10;
const width = 5;
const area = length * width;
console.log(`Area: ${area}`); // Output: Area: 50

// Chapter 2 - Solution 2
JavaScript
const principal = 1000;
const rate = 0.05;
const years = 2;
const simpleInterest = principal * rate * years;
console.log(`Simple Interest: ${simpleInterest}`); // Output: Simple Interest: 100

// Chapter 2 - Solution 3
JavaScript
const totalCandies = 25;
const numberOfFriends = 4;
// Math.floor ensures whole candies per friend
const candiesPerFriend = Math.floor(totalCandies / numberOfFriends);
const leftoverCandies = totalCandies % numberOfFriends;

console.log(`Candies per friend: ${candiesPerFriend}`); // Output: Candies per friend: 6
console.log(`Leftover candies: ${leftoverCandies}`);   // Output: Leftover candies: 1

// Chapter 2 - Solution 4
JavaScript
const num = 5;
const numSquared = num ** 2; // 5 to the power of 2
console.log(`${num} squared is ${numSquared}`); // Output: 5 squared is 25

// Chapter 2 - Solution 5
JavaScript
let counter = 10;
counter++; // Increment counter
console.log(`Counter after increment: ${counter}`); // Output: Counter after increment: 11

// Chapter 2 - Solution 6
JavaScript
let value = 5;
console.log(`Result of value++: ${value++}`); // Output: Result of value++: 5
console.log(`Value after value++: ${value}`);  // Output: Value after value++: 6

// Chapter 2 - Solution 7
JavaScript
let otherValue = 5;
console.log(`Result of ++otherValue: ${++otherValue}`); // Output: Result of ++otherValue: 6
console.log(`otherValue after ++otherValue: ${otherValue}`); // Output: otherValue after ++otherValue: 6

// Chapter 2 - Solution 8
JavaScript
let timer = 20;
timer--; // Decrement timer
console.log(`Timer after decrement: ${timer}`); // Output: Timer after decrement: 19

// Chapter 2 - Solution 9
JavaScript
let myScore = 100;
myScore += 50; // Equivalent to myScore = myScore + 50;
console.log(`My score: ${myScore}`); // Output: My score: 150

// Chapter 2 - Solution 10
JavaScript
let accountBalance = 500;
accountBalance -= 75; // Equivalent to accountBalance = accountBalance - 75;
console.log(`Account balance: ${accountBalance}`); // Output: Account balance: 425

// Chapter 2 - Solution 11
JavaScript
let numberOfUnits = 12;
numberOfUnits *= 3; // Equivalent to numberOfUnits = numberOfUnits * 3;
console.log(`Number of units: ${numberOfUnits}`); // Output: Number of units: 36

// Chapter 2 - Solution 12
JavaScript
let totalValue = 1024;
totalValue /= 2; // Equivalent to totalValue = totalValue / 2;
console.log(`Total value: ${totalValue}`); // Output: Total value: 512

// Chapter 2 - Solution 13
JavaScript
let bigNumber = 100;
bigNumber %= 7; // Equivalent to bigNumber = bigNumber % 7; (100 % 7 = 2)
console.log(`Remainder: ${bigNumber}`); // Output: Remainder: 2

// Chapter 2 - Solution 14
JavaScript
const numA = 15;
const numB = 20;
const areEqual = (numA === numB);
console.log(`Are numA and numB equal? ${areEqual}`); // Output: Are numA and numB equal? false

// Chapter 2 - Solution 15
JavaScript
const str1 = "Hello";
const str2 = "hello";
const areStringsEqual = (str1 === str2);
console.log(`Are strings equal? ${areStringsEqual}`); // Output: Are strings equal? false

// Chapter 2 - Solution 16
JavaScript
const valX = 10;
const valY = "10";
console.log(`Loose equality (==): ${valX == valY}`);   // Output: Loose equality (==): true
console.log(`Strict equality (===): ${valX === valY}`); // Output: Strict equality (===): false

// Chapter 2 - Solution 17
JavaScript
const a = 50;
const b = 50;
const isAGreaterOrEqual = (a >= b);
console.log(`Is a >= b? ${isAGreaterOrEqual}`); // Output: Is a >= b? true

// Chapter 2 - Solution 18
JavaScript
const temp = -5;
const isFreezing = (temp < 0);
console.log(`Is it freezing? ${isFreezing}`); // Output: Is it freezing? true

// Chapter 2 - Solution 19
JavaScript
const num1 = 100;
const num2 = 99;
const areNotEqual = (num1 !== num2);
console.log(`Are num1 and num2 not equal? ${areNotEqual}`); // Output: Are num1 and num2 not equal? true

// Chapter 2 - Solution 20
JavaScript
const isLoggedIn = true;
const isAdmin = false;
const canAccessAdmin = isLoggedIn && isAdmin;
console.log(`Can access admin panel? ${canAccessAdmin}`); // Output: Can access admin panel? false

// Chapter 2 - Solution 21
JavaScript
const hasPremium = false;
const hasStandard = true;
const canWatchContent = hasPremium || hasStandard;
console.log(`Can watch content? ${canWatchContent}`); // Output: Can watch content? true

// Chapter 2 - Solution 22
JavaScript
const isEnabled = true;
const isDisabled = !isEnabled;
console.log(`Is disabled? ${isDisabled}`); // Output: Is disabled? false

// Chapter 2 - Solution 23
JavaScript
const age = 15;
const hasPermission = true;
const canAttend = (age >= 18) || hasPermission;
console.log(`Can attend? ${canAttend}`); // Output: Can attend? true

// Chapter 2 - Solution 24
JavaScript
const isWeekend = false;
const isHoliday = true;
const isDayOff = isWeekend || isHoliday;
console.log(`Is it a day off? ${isDayOff}`); // Output: Is it a day off? true

// Chapter 2 - Solution 25
JavaScript
const needsSave = true;
const safeToExit = !needsSave;
console.log(`Is it safe to exit? ${safeToExit}`); // Output: Is it safe to exit? false

// Chapter 2 - Solution 26
JavaScript
const userAge = 21; // In Ajax, Ontario, legal age is 19, adjust as needed for context
const legalDrinkingAge = 19; // Example for Ontario context
const drinkType = (userAge >= legalDrinkingAge) ? "Beer" : "Juice";
console.log(`Drink type: ${drinkType}`); // Output: Drink type: Beer

// Chapter 2 - Solution 27
JavaScript
const isValid = false;
const statusMessage = isValid ? "Valid" : "Invalid";
console.log(`Status: ${statusMessage}`); // Output: Status: Invalid

// Chapter 2 - Solution 28
JavaScript
const quantity = 0;
const availability = (quantity > 0) ? "In Stock" : "Out of Stock";
console.log(`Availability: ${availability}`); // Output: Availability: Out of Stock

// Chapter 2 - Solution 29
JavaScript
const isMember = true;
const fee = isMember ? "$2.00" : "$10.00";
console.log(`Membership Fee: ${fee}`); // Output: Membership Fee: $2.00

// Chapter 2 - Solution 30
JavaScript
const score = 59;
const passingMark = 60;
const grade = (score >= passingMark) ? "Pass" : "Fail";
console.log(`Grade: ${grade}`); // Output: Grade: Fail

// Chapter 2 - Solution 31
JavaScript
const result = 100 / 10 * 2;
console.log(result); // Output: 20

// Chapter 2 - Solution 32
JavaScript
const result = 5 + 6 % 4;
console.log(result); // Output: 7

// Chapter 2 - Solution 33
JavaScript
const result = (5 + 6) % 4;
console.log(result); // Output: 3

// Chapter 2 - Solution 34
JavaScript
const result = 10 === 5 + 5 && 20 > 10;
console.log(result); // Output: true

// Chapter 2 - Solution 35
JavaScript
const result = !true || false;
console.log(result); // Output: false

// Chapter 2 - Solution 36
JavaScript
const userName = "";
const result = userName || "Anonymous";
console.log(result); // Output: Anonymous

// Chapter 2 - Solution 37
JavaScript
const userConfig = { theme: "dark" };
const result = userConfig || { theme: "light" };
console.log(result); // Output: { theme: 'dark' }

// Chapter 2 - Solution 38
JavaScript
const canProceed = false;
const result = canProceed && alert("Proceeding!"); // Alert will NOT show
console.log(result); // Output: false

// Chapter 2 - Solution 39
JavaScript
const isAvailable = true;
const result = isAvailable && "Item is ready";
console.log(result); // Output: Item is ready

// Chapter 2 - Solution 40
JavaScript
const finalValue = null || 0 || "" || "Default" || true;
console.log(finalValue); // Output: Default

// Chapter 2 - Solution 41
JavaScript
const weight = 70; // kg
const height = 1.75; // meters
const bmi = weight / (height * height);
// Or using exponentiation: const bmi = weight / (height ** 2);
console.log(`BMI: ${bmi.toFixed(2)}`); // Output: BMI: 22.86 (formatted)

// Chapter 2 - Solution 42
JavaScript
let x = 5;
const result = x++ + --x * 2;
console.log(result); // Output: 15
console.log(`Final x: ${x}`); // Output: Final x: 5

// Chapter 2 - Solution 43
JavaScript
const myString = "JavaScript";
const checkString = (myString.length > 5) && myString.startsWith('J');
console.log(`String check result: ${checkString}`); // Output: String check result: true

// Chapter 2 - Solution 44
JavaScript
// Assume:
// const isAdmin = false;
// const isLoggedIn = true;

// Nested Ternary (use with caution for readability)
// const accessLevel = isAdmin ? "Admin" : (isLoggedIn ? "User" : "Guest");

// Often better with if-else for clarity:
let accessLevel;
if (isAdmin) {
    accessLevel = "Admin";
} else if (isLoggedIn) {
    accessLevel = "User";
} else {
    accessLevel = "Guest";
}

console.log(`Access Level: ${accessLevel}`); // Output: Access Level: User (based on assumed values)

// Chapter 2 - Solution 45
JavaScript
const result = typeof (100 + " apples");
console.log(result); // Output: string

// Chapter 2 - Solution 46
JavaScript
const a = true;
const b = false;
const result = a || b && !b;
console.log(result); // Output: true

// Chapter 2 - Solution 47
JavaScript
// In a real Node.js environment, process.env.PORT might exist.
// We simulate it being undefined here:
let process = { env: {} }; // Simulate empty env

const port = process.env.PORT || 3000;
console.log(`Port: ${port}`); // Output: Port: 3000

// Chapter 2 - Solution 48
JavaScript
const celsius = 25;
const fahrenheit = (celsius * 9/5) + 32;
// Parentheses around (celsius * 9/5) aren't strictly needed due to precedence
// but improve clarity. Multiplication/Division happen before Addition.
console.log(`${celsius}°C is ${fahrenheit}°F`); // Output: 25°C is 77°F

// Chapter 2 - Solution 49
JavaScript
const value = 10;
const isInRange = (value > 0) && (value <= 100);
console.log(`Is value in range (0, 100]? ${isInRange}`); // Output: Is value in range (0, 100]? true

// Chapter 2 - Solution 50
JavaScript
console.log( 0 || (5 && "Hello") || null ); // Output: Hello

