// Chapter 1 - Solution 1
JavaScript
let favoriteColor = "blue";
console.log(favoriteColor);

// Chapter 1 - Solution 2
JavaScript
const birthYear = 1995; // Replace 1995 with your birth year
console.log(birthYear);
// birthYear = 1996; // Uncommenting this line will cause a TypeError

// Chapter 1 - Solution 3
JavaScript
let city = "Paris";
console.log("Original city:", city);
city = "Tokyo";
console.log("New city:", city);

// Chapter 1 - Solution 4
Visible!

// Chapter 1 - Solution 5
Hidden!
 If you uncomment the second console.log, you will get a ReferenceError: secret is not defined.

// Chapter 1 - Solution 6
JavaScript
let itemCount = 15;
console.log(itemCount);
console.log(typeof itemCount); // Output: "number"

// Chapter 1 - Solution 7
JavaScript
const username = "Coder123";
console.log(username);
console.log(typeof username); // Output: "string"

// Chapter 1 - Solution 8
JavaScript
let isActiveUser = false;
console.log(isActiveUser);
console.log(typeof isActiveUser); // Output: "boolean"

// Chapter 1 - Solution 9
JavaScript
let couponCode = null;
console.log(couponCode);
console.log(typeof couponCode); // Output: "object"

// Chapter 1 - Solution 10
JavaScript
let userPreferences;
console.log(userPreferences);       // Output: undefined
console.log(typeof userPreferences); // Output: "undefined"

// Chapter 1 - Solution 11
JavaScript
let result = 100 / "apple";
console.log(result);       // Output: NaN
console.log(typeof result); // Output: "number"

// Chapter 1 - Solution 12
JavaScript
const apiKey = Symbol('unique api key');
console.log(apiKey);
console.log(typeof apiKey); // Output: "symbol"

// Chapter 1 - Solution 13
JavaScript
const yearNumber = 2024;
const yearString = String(yearNumber);
console.log(yearString);       // Output: "2024"
console.log(typeof yearString); // Output: "string"

// Chapter 1 - Solution 14
JavaScript
const priceString = "55.5";
const priceNumber = Number(priceString);
console.log(priceNumber);       // Output: 55.5
console.log(typeof priceNumber); // Output: "number"

// Chapter 1 - Solution 15
JavaScript
const text = "JavaScript";
const nanResult = Number(text);
console.log(nanResult);       // Output: NaN
console.log(typeof nanResult); // Output: "number"

// Chapter 1 - Solution 16
JavaScript
const boolTrue = true;
const trueNum = Number(boolTrue);
console.log(trueNum);       // Output: 1
console.log(typeof trueNum); // Output: "number"

// Chapter 1 - Solution 17
JavaScript
const boolFalse = false;
const falseNum = Number(boolFalse);
console.log(falseNum);       // Output: 0
console.log(typeof falseNum); // Output: "number"

// Chapter 1 - Solution 18
JavaScript
const numZero = 0;
const boolZero = Boolean(numZero);
console.log(boolZero);       // Output: false
console.log(typeof boolZero); // Output: "boolean"

// Chapter 1 - Solution 19
JavaScript
const strHello = "Hello";
const boolHello = Boolean(strHello);
console.log(boolHello);       // Output: true
console.log(typeof boolHello); // Output: "boolean"

// Chapter 1 - Solution 20
JavaScript
const emptyStr = "";
const boolEmpty = Boolean(emptyStr);
console.log(boolEmpty);       // Output: false
console.log(typeof boolEmpty); // Output: "boolean"

// Chapter 1 - Solution 21
JavaScript
const valNull = null;
const boolNull = Boolean(valNull);
console.log(boolNull);       // Output: false
console.log(typeof boolNull); // Output: "boolean"

// Chapter 1 - Solution 22
JavaScript
let valUndef; // Defaults to undefined
const boolUndef = Boolean(valUndef);
console.log(boolUndef);       // Output: false
console.log(typeof boolUndef); // Output: "boolean"

// Chapter 1 - Solution 23
JavaScript
const valNaN = NaN;
const boolNaN = Boolean(valNaN);
console.log(boolNaN);       // Output: false
console.log(typeof boolNaN); // Output: "boolean"

// Chapter 1 - Solution 24
JavaScript
const fruitCount = 10 + " apples";
console.log(fruitCount);       // Output: "10 apples"
console.log(typeof fruitCount); // Output: "string"

// Chapter 1 - Solution 25
JavaScript
const subResult = "25" - 5;
console.log(subResult);       // Output: 20
console.log(typeof subResult); // Output: "number"

// Chapter 1 - Solution 26
JavaScript
const multResult = "10" * "3";
console.log(multResult);       // Output: 30
console.log(typeof multResult); // Output: "number"

// Chapter 1 - Solution 27
JavaScript
const divResult = "banana" / 2;
console.log(divResult);       // Output: NaN
console.log(typeof divResult); // Output: "number"

// Chapter 1 - Solution 28
JavaScript
const looseCompare = (7 == "7");
console.log(looseCompare); // Output: true

// Chapter 1 - Solution 29
JavaScript
const strictCompare = (7 === "7");
console.log(strictCompare); // Output: false

// Chapter 1 - Solution 30
JavaScript
const looseCompareZero = (0 == false);
console.log(looseCompareZero); // Output: true

// Chapter 1 - Solution 31
JavaScript
const strictCompareZero = (0 === false);
console.log(strictCompareZero); // Output: false

// Chapter 1 - Solution 32
JavaScript
const looseCompareNull = (null == undefined);
console.log(looseCompareNull); // Output: true

// Chapter 1 - Solution 33
JavaScript
const strictCompareNull = (null === undefined);
console.log(strictCompareNull); // Output: false

// Chapter 1 - Solution 34
JavaScript
const firstName = "Jane";
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`;
console.log(fullName); // Output: Jane Doe

// Chapter 1 - Solution 35
JavaScript
const item = "Coffee";
const price = 3.50;
const sentence = `The price for ${item} is $${price}.`;
// Optionally format the price:
// const sentenceFormatted = `The price for ${item} is $${price.toFixed(2)}.`;
console.log(sentence); // Output: The price for Coffee is $3.5.
// console.log(sentenceFormatted); // Output: The price for Coffee is $3.50.

// Chapter 1 - Solution 36
JavaScript
const quantity = 5;
const unitPrice = 15;
const totalPrice = quantity * unitPrice; // Calculate first (or inside literal)
const costSentence = `${quantity} items cost $${totalPrice}.`;
// Or calculate directly inside:
// const costSentenceDirect = `${quantity} items cost $${quantity * unitPrice}.`;
console.log(costSentence); // Output: 5 items cost $75.

// Chapter 1 - Solution 37
JavaScript
const poem = `Roses are red,

Violets are blue, JavaScript is fun, And so are you!`; console.log(poem); ```

// Chapter 1 - Solution 38
JavaScript
const recipientName = "John Smith";
const street = "456 Tech Avenue";
const cityStateZip = "Codeville, JS 12345";

const shippingLabel = `To: ${recipientName}

${street} ${cityStateZip}`; console.log(shippingLabel); ```

// Chapter 1 - Solution 39
JavaScript
const temperature = 25.5;
const tempString = String(temperature) + " degrees Celsius";
// Or using template literal:
// const tempStringLiteral = `${temperature} degrees Celsius`;
console.log(tempString); // Output: 25.5 degrees Celsius
// console.log(tempStringLiteral); // Output: 25.5 degrees Celsius

// Chapter 1 - Solution 40
JavaScript
const scoreString = "100";
const scoreNumber = Number(scoreString);
const finalScore = scoreNumber + 50;
console.log(finalScore);       // Output: 150
console.log(typeof finalScore); // Output: "number"

// Chapter 1 - Solution 41
JavaScript
let val = 5;
let result = val + true;
console.log(result); // Output: 6

// Chapter 1 - Solution 42
JavaScript
let message = "The value is: " + (null + 10);
console.log(message); // Output: "The value is: 10"

// Chapter 1 - Solution 43
JavaScript
const isMember = false;
const memberStatus = `User is a member: ${isMember}`;
console.log(memberStatus); // Output: User is a member: false

// Chapter 1 - Solution 44
JavaScript
const input = " ";
const inputBool = Boolean(input);
console.log(inputBool); // Output: true

// Chapter 1 - Solution 45
JavaScript
const numA = 10;
const numB = "5";

console.log(`numA + numB = ${numA + numB}`); // Output: numA + numB = 105 (string)
console.log(`numA - numB = ${numA - numB}`); // Output: numA - numB = 5 (number)
console.log(`numA * numB = ${numA * numB}`); // Output: numA * numB = 50 (number)

// Chapter 1 - Solution 46
JavaScript
const GRAVITY = 9.8;
console.log(GRAVITY);
// GRAVITY = 10; // This line causes: TypeError: Assignment to constant variable.

// Chapter 1 - Solution 47
JavaScript
const value = 0;
console.log(`value == null: ${value == null}`);   // Output: value == null: false
console.log(`value === null: ${value === null}`); // Output: value === null: false

// Chapter 1 - Solution 48
JavaScript
// Assuming variables from previous exercises exist:
// const username = "Coder123";
// let favoriteColor = "blue";
const userProfile = `Username: ${username}, Favorite Color: ${favoriteColor}`;
console.log(userProfile); // Output: Username: Coder123, Favorite Color: blue

// Chapter 1 - Solution 49
JavaScript
const boolStringZero = Boolean("0");
console.log(boolStringZero); // Output: true

// Chapter 1 - Solution 50
JavaScript
let x = 10; // Outer x
console.log("Before block:", x); // Output: Before block: 10

if (true) {
  let x = 20; // Inner x, shadows the outer x within this block
  console.log("Inside block:", x); // Output: Inside block: 20
}

console.log("After block:", x); // Output: After block: 10

