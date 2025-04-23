// Chapter 3 - Solution 1
JavaScript
const num = 10;
if (num > 0) {
  console.log("Number is positive"); // Output: Number is positive
}

// Chapter 3 - Solution 2
JavaScript
const temperature = 15;
if (temperature < 20) {
  console.log("Wear a jacket"); // Output: Wear a jacket
} else {
  console.log("Jacket not needed");
}

// Chapter 3 - Solution 3
JavaScript
const score = 75;
if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70) {
  console.log("Good"); // Output: Good
} else if (score >= 50) {
  console.log("Fair");
} else {
  console.log("Fail");
}

// Chapter 3 - Solution 4
JavaScript
const isMember = true;
const orderValue = 45;
if (isMember || orderValue > 50) {
  console.log("Eligible for free shipping"); // Output: Eligible for free shipping
} else {
  console.log("Shipping fee applies");
}

// Chapter 3 - Solution 5
JavaScript
const userName = "";
if (userName === "") {
  console.log("Username cannot be empty"); // Output: Username cannot be empty
}

// Chapter 3 - Solution 6
JavaScript
const age = 12;
const isSupervised = true;
if (age < 13 && isSupervised) {
  console.log("Allowed on ride"); // Output: Allowed on ride
} else {
  console.log("Not allowed");
}

// Chapter 3 - Solution 7
JavaScript
const dayCode = "TUE";
let dayName;

switch (dayCode) {
  case "MON":
    dayName = "Monday";
    break;
  case "TUE":
    dayName = "Tuesday";
    break;
  case "WED":
    dayName = "Wednesday";
    break;
  case "THU":
    dayName = "Thursday";
    break;
  case "FRI":
    dayName = "Friday";
    break;
  case "SAT":
    dayName = "Saturday";
    break;
  case "SUN":
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day code";
}
console.log(dayName); // Output: Tuesday

// Chapter 3 - Solution 8
JavaScript
const statusCode = 404;
let statusMessage;

switch (statusCode) {
  case 200:
    statusMessage = "OK";
    break;
  case 404:
    statusMessage = "Not Found";
    break;
  case 500:
    statusMessage = "Server Error";
    break;
  default:
    statusMessage = "Unknown status";
}
console.log(`Status: ${statusMessage}`); // Output: Status: Not Found

// Chapter 3 - Solution 9
JavaScript
const statusCode = 403; // Or 401
let statusMessage;

switch (statusCode) {
  case 200:
    statusMessage = "OK";
    break;
  case 401: // Intentionally fall through
  case 403:
    statusMessage = "Unauthorized";
    break;
  case 404:
    statusMessage = "Not Found";
    break;
  case 500:
    statusMessage = "Server Error";
    break;
  default:
    statusMessage = "Unknown status";
}
console.log(`Status: ${statusMessage}`); // Output: Status: Unauthorized

// Chapter 3 - Solution 10
JavaScript
const size = "M";
let sizeDescription;
switch (size) {
  case "S":
    sizeDescription = "Small";
    break;
  case "M":
    sizeDescription = "Medium";
    break;
  case "L":
    sizeDescription = "Large";
    break;
  case "XL":
    sizeDescription = "Extra Large";
    break;
  default:
    sizeDescription = "Unknown size";
}
console.log(`Size: ${sizeDescription}`); // Output: Size: Medium

// Chapter 3 - Solution 11
JavaScript
console.log("Numbers 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Chapter 3 - Solution 12
JavaScript
console.log("Even numbers 2 to 20:");
// Option 1: Increment by 2
for (let i = 2; i <= 20; i += 2) { // Increment by 2
  console.log(i);
}
// Option 2: Check with if inside loop
/*
for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
*/

// Chapter 3 - Solution 13
JavaScript
let totalSum = 0;
for (let i = 1; i <= 100; i++) {
  totalSum += i; // Add current number to totalSum
}
console.log(`Sum of 1 to 100: ${totalSum}`); // Output: Sum of 1 to 100: 5050

// Chapter 3 - Solution 14
JavaScript
const number = 5;
console.log(`Multiplication table for ${number}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// Chapter 3 - Solution 15
JavaScript
console.log("Countdown 10 to 1:");
for (let i = 10; i >= 1; i--) { // Start at 10, continue while >= 1, decrement
  console.log(i);
}

// Chapter 3 - Solution 16
JavaScript
console.log("Numbers 1 to 5 (while):");
let counter = 1; // Initialize outside
while (counter <= 5) { // Condition check
  console.log(counter);
  counter++; // Increment inside
}

// Chapter 3 - Solution 17
JavaScript
console.log("Generating random numbers until > 0.8:");
let randomNumber;
while (true) { // Loop potentially forever, rely on break
  randomNumber = Math.random();
  console.log(`Generated: ${randomNumber.toFixed(4)}`);
  if (randomNumber > 0.8) {
    console.log("Found number > 0.8, stopping.");
    break; // Exit the loop
  }
}
// Alternative using condition:
/*
let randomNumber = 0; // Initialize to satisfy condition first
while (randomNumber <= 0.8) {
    randomNumber = Math.random();
    console.log(`Generated: ${randomNumber.toFixed(4)}`);
}
console.log("Loop finished (condition became false).");
*/

// Chapter 3 - Solution 18
JavaScript
let power = 1;
while (power <= 1000) {
  power *= 2; // Double the power in each iteration
}
console.log(`First power of 2 > 1000: ${power}`); // Output: First power of 2 > 1000: 1024

// Chapter 3 - Solution 19
JavaScript
console.log("Countdown 5 to 1 (while):");
let count = 5;
while (count >= 1) {
  console.log(count);
  count--; // Decrement inside
}

// Chapter 3 - Solution 20
JavaScript
console.log("Numbers 1 to 5 (do...while):");
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);

// Chapter 3 - Solution 21
JavaScript
const secretNumber = 7;
let guess;
let attempts = 0; // To prevent potential infinite loops in simulation

console.log("Guess the secret number (it's 7)!");
do {
  // Simulate user input - replace with actual prompt in browser
  attempts++;
  if (attempts === 1) guess = 5;
  else if (attempts === 2) guess = 8;
  else guess = 7; // Correct guess on 3rd attempt

  console.log(`Your guess: ${guess}`);
  if (guess !== secretNumber) {
      console.log("Incorrect, try again!");
  }
} while (guess !== secretNumber && attempts < 10); // Loop while incorrect (add attempt limit for safety)

if (guess === secretNumber) {
    console.log("Correct! You guessed the secret number.");
} else {
    console.log("Too many attempts.");
}

// Chapter 3 - Solution 22
JavaScript
console.log("Countdown 10 to 1 (do...while):");
let x = 10;
do {
  console.log(x);
  x--;
} while (x > 0);

// Chapter 3 - Solution 23
JavaScript
console.log("Looping 1 to 10, break > 5:");
for (let i = 1; i <= 10; i++) {
  if (i > 5) {
    console.log(`i is ${i}, breaking loop.`);
    break; // Exit loop
  }
  console.log(`Processing ${i}`);
}
console.log("Loop finished.");
// Output:
// Processing 1
// Processing 2
// Processing 3
// Processing 4
// Processing 5
// i is 6, breaking loop.
// Loop finished.

// Chapter 3 - Solution 24
JavaScript
console.log("while(true) loop, break at 3:");
let counter = 0;
while (true) {
  console.log(`Counter is ${counter}`);
  if (counter >= 3) { // Check if counter reached target
    console.log("Reached target, breaking.");
    break;
  }
  counter++; // Increment after check
}
console.log("Loop finished.");
// Output:
// Counter is 0
// Counter is 1
// Counter is 2
// Counter is 3
// Reached target, breaking.
// Loop finished.

// Chapter 3 - Solution 25
JavaScript
const numbers = [2, 4, 6, 7, 8, 10];
let foundIndex = -1; // Initialize to indicate not found

console.log("Searching for 7:");
for (let i = 0; i < numbers.length; i++) {
  console.log(`Checking index ${i}, value ${numbers[i]}`);
  if (numbers[i] === 7) {
    foundIndex = i;
    console.log(`Found 7 at index ${foundIndex}`);
    break; // Exit loop once found
  }
}

if (foundIndex === -1) {
    console.log("7 not found in the array.");
}
// Output:
// Checking index 0, value 2
// Checking index 1, value 4
// Checking index 2, value 6
// Checking index 3, value 7
// Found 7 at index 3

// Chapter 3 - Solution 26
JavaScript
console.log("Printing 1 to 10, skipping 5:");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Skipping 5...");
    continue; // Skip the rest of this iteration
  }
  console.log(i);
}
// Output: 1, 2, 3, 4, Skipping 5..., 6, 7, 8, 9, 10

// Chapter 3 - Solution 27
JavaScript
console.log("Printing 1 to 15, skipping multiples of 3:");
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0) { // Check if divisible by 3
    continue; // Skip this iteration if divisible by 3
  }
  console.log(`Processing ${i}`);
}

// Chapter 3 - Solution 28
JavaScript
const items = ["apple", "banana", "skip", "orange", "skip", "grape"];
console.log("Processing items, skipping 'skip':");
for (let i = 0; i < items.length; i++) {
  const currentItem = items[i];
  if (currentItem === "skip") {
    continue; // Skip to next item
  }
  console.log(`Processing: ${currentItem}`);
}
// Output:
// Processing: apple
// Processing: banana
// Processing: orange
// Processing: grape

// Chapter 3 - Solution 29
JavaScript
console.log("Nested loops:");
for (let outer_i = 1; outer_i <= 3; outer_i++) {
  console.log(`--- Outer Loop Iteration: ${outer_i} ---`);
  for (let inner_j = 1; inner_j <= 2; inner_j++) {
    console.log(`  Outer: ${outer_i}, Inner: ${inner_j}`);
  }
}

// Chapter 3 - Solution 30
JavaScript
console.log("Numbers 1 to 20, checking divisibility by 2 and 3:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    console.log(`${i} is Divisible by 2 and 3`);
  }
}
// Output:
// 6 is Divisible by 2 and 3
// 12 is Divisible by 2 and 3
// 18 is Divisible by 2 and 3

// Chapter 3 - Solution 31
JavaScript
console.log("Printing odd numbers < 10 (while loop):");
let x = 0;
while (x < 10) {
  if (x % 2 !== 0) { // Check if odd
    console.log(x);
  }
  x++; // Increment regardless
}
// Output: 1, 3, 5, 7, 9

// Chapter 3 - Solution 32
JavaScript
console.log("Countdown 10 to 1 with message:");
for (let i = 10; i >= 1; i--) {
  if (i === 5) {
    console.log("Halfway there!");
  } else {
    console.log(i);
  }
}

// Chapter 3 - Solution 33
JavaScript
console.log("Loop with switch:");
for (let i = 1; i <= 5; i++) {
  let message;
  switch (i) {
    case 1:
      message = "One";
      break;
    case 2:
      message = "Two";
      break;
    default: // Handles 3, 4, 5
      message = "Other";
  }
  console.log(`Number ${i} is ${message}`);
}

// Chapter 3 - Solution 34
JavaScript
console.log("Flipping coin until 3 consecutive heads:");
let consecutiveHeads = 0;
let totalFlips = 0;

while (consecutiveHeads < 3) {
  totalFlips++;
  const isHeads = Math.random() < 0.5; // true for heads, false for tails

  if (isHeads) {
    consecutiveHeads++;
    console.log(`Flip ${totalFlips}: Heads (Consecutive: ${consecutiveHeads})`);
  } else {
    consecutiveHeads = 0; // Reset count on tails
    console.log(`Flip ${totalFlips}: Tails (Consecutive: ${consecutiveHeads})`);
  }
}
console.log(`Achieved 3 consecutive heads in ${totalFlips} flips.`);

// Chapter 3 - Solution 35
JavaScript
console.log("Printing 1 to 10, skipping 3 and 7:");
for (let i = 1; i <= 10; i++) {
  if (i === 3 || i === 7) { // Check if number is 3 OR 7
    continue; // Skip this iteration
  }
  console.log(i);
}

// Chapter 3 - Solution 36
JavaScript
console.log("Summing numbers until sum > 20:");
let currentSum = 0;
let lastNumberAdded = 0;
for (let i = 1; ; i++) { // Infinite loop, rely on break
  currentSum += i;
  lastNumberAdded = i;
  console.log(`Added ${i}, sum is now ${currentSum}`);
  if (currentSum > 20) {
    console.log("Sum exceeds 20, breaking.");
    break;
  }
}
console.log(`Final sum: ${currentSum}, Last number added: ${lastNumberAdded}`);
// Output: Sum will be 21 (1+2+3+4+5+6), last number added is 6

// Chapter 3 - Solution 37
JavaScript
const targetNumber = Math.floor(Math.random() * 10) + 1; // Random integer 1-10
let userGuess;
let guessCount = 0;
console.log("Guess a number between 1 and 10."); // Hint: console.log(targetNumber) for testing ;)

do {
  guessCount++;
  // Simulate user input (replace with prompt in browser)
  userGuess = Math.floor(Math.random() * 10) + 1; // Random guess 1-10
  console.log(`Attempt ${guessCount}: You guessed ${userGuess}`);

  if (userGuess < targetNumber) {
    console.log("Too low!");
  } else if (userGuess > targetNumber) {
    console.log("Too high!");
  }
} while (userGuess !== targetNumber);

console.log(`Correct! You guessed ${targetNumber} in ${guessCount} attempts.`);

// Chapter 3 - Solution 38
JavaScript
console.log("Checking iterations:");
for (let i = 1; i <= 5; i++) { // Start i at 1 for 1-based count
  if (i % 2 === 0) {
    console.log(`Iteration ${i}: Even iteration`);
  } else {
    console.log(`Iteration ${i}: Odd iteration`);
  }
}

// Chapter 3 - Solution 39
JavaScript
console.log("Incrementing by 2, break > 10:");
let x = 0;
while (true) {
    console.log(`x is ${x}`);
    if (x > 10) {
        console.log("x > 10, breaking.");
        break;
    }
    x += 2; // Increment by 2
}
console.log("Loop finished.");
 // Output: x is 0, x is 2, x is 4, x is 6, x is 8, x is 10, x is 12, x > 10, breaking.

// Chapter 3 - Solution 40
JavaScript
console.log("Printing 1 to 10, skipping evens:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) { // Check if even
        continue; // Skip the rest of the iteration
    }
    console.log(i); // Only logs if i is odd
}
// Output: 1, 3, 5, 7, 9

// Chapter 3 - Solution 41
JavaScript
const n = -5; // Test with 0, 5 as well
if (n < 0) {
  console.log("Negative");
} else if (n === 0) {
  console.log("Zero");
} else { // Only remaining possibility is n > 0
  console.log("Positive");
}

// Chapter 3 - Solution 42
JavaScript
const color = "green";
let colorType;
switch (color) {
  case "red":
  case "yellow":
  case "blue":
    colorType = "Primary";
    break;
  case "green":
  case "orange":
  case "purple":
    colorType = "Secondary";
    break;
  default:
    colorType = "Other";
}
console.log(`${color} is a ${colorType} color.`); // Output: green is a Secondary color.

// Chapter 3 - Solution 43
JavaScript
console.log("Triangle pattern:");
let stars = "";
for (let i = 1; i <= 5; i++) {
  stars += "*"; // Add one star in each iteration
  console.log(stars);
}
// Alternative using string.repeat()
/*
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}
*/

// Chapter 3 - Solution 44
JavaScript
console.log("Random numbers with conditions and break:");
for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 10); // 0-9
  console.log(`Iteration ${i+1}, Random: ${randomNumber}`);
  if (randomNumber < 3) {
    console.log("  Low");
  } else if (randomNumber >= 7) {
    console.log("  High");
  } else if (randomNumber === 5) {
    console.log("  Found 5! Breaking.");
    break; // Exit loop
  }
  // No 'else' needed, implicitly continues if not caught by if/else if
}
console.log("Loop finished.");

// Chapter 3 - Solution 45
JavaScript
let n = 0;
while (n * n <= 12000) {
  n++; // Increment n until its square exceeds 12000
}
console.log(`Smallest n where n*n > 12000 is: ${n}`); // Output: Smallest n where n*n > 12000 is: 110
// (109*109 = 11881, 110*110 = 12100)

// Chapter 3 - Solution 46
JavaScript
console.log("Factorials 1! to 10!:");
let factorial = 1; // Initialize factorial for n=0 (or start at n=1)
for (let n = 1; n <= 10; n++) {
  factorial *= n; // Update factorial: factorial = factorial * n
  console.log(`${n}! = ${factorial}`);
}

// Chapter 3 - Solution 47
JavaScript
console.log("Collecting signatures:");
let totalSignatures = 0;
const targetSignatures = 50;
let steps = 0;

do {
  steps++;
  const newSignatures = Math.floor(Math.random() * 5) + 1; // Random 1-5
  totalSignatures += newSignatures;
  console.log(`Step ${steps}: Collected ${newSignatures}, Total: ${totalSignatures}`);
} while (totalSignatures < targetSignatures);

console.log(`Finished! Collected ${totalSignatures} signatures in ${steps} steps.`);

// Chapter 3 - Solution 48
JavaScript
console.log("FizzBuzz 1 to 30:");
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) { // Check for both first!
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Chapter 3 - Solution 49
JavaScript
const fruit = "banana";
const firstLetter = fruit.charAt(0).toLowerCase(); // Get first letter, make lowercase
let message;

switch (firstLetter) {
  case 'a':
    message = "Starts with A";
    break;
  case 'b':
    message = "Starts with B";
    break;
  case 'c':
    message = "Starts with C";
    break;
  default:
    message = "Starts with other letter";
}
console.log(`${fruit}: ${message}`); // Output: banana: Starts with B

// Chapter 3 - Solution 50
JavaScript
console.log("Loop with break and continue:");
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    console.log(`Number is ${i}. About to break.`);
    break; // Exit loop
  }
  if (i % 2 === 0) {
    console.log(`Skipping even number ${i}.`);
    continue; // Skip to next iteration
  }
  // Only runs if odd and not 7
  console.log(`Processing odd number ${i}.`);
}
console.log("Loop finished.");

