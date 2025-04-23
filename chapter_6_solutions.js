// Chapter 6 - Solution 1
JavaScript
const planets = ["Mercury", "Venus", "Earth"];
console.log(planets); // Output: [ 'Mercury', 'Venus', 'Earth' ]

// Chapter 6 - Solution 2
JavaScript
// Assuming planets array from Exercise 1 exists
const secondPlanet = planets[1]; // Index 1 for the second element
console.log(`Second planet: ${secondPlanet}`); // Output: Second planet: Venus

// Chapter 6 - Solution 3
JavaScript
// Assuming planets array from Exercise 1 exists
const numberOfPlanets = planets.length;
console.log(`Number of planets: ${numberOfPlanets}`); // Output: Number of planets: 3

// Chapter 6 - Solution 4
JavaScript
// Assuming planets array from Exercise 1 exists
planets[2] = "Terra"; // Assign new value to index 2
console.log("Updated planets:", planets); // Output: Updated planets: [ 'Mercury', 'Venus', 'Terra' ]

// Chapter 6 - Solution 5
JavaScript
const mixedBag = [101, "Widget", false, null];
console.log(mixedBag);       // Output: [ 101, 'Widget', false, null ]
console.log(mixedBag.length); // Output: 4

// Chapter 6 - Solution 6
JavaScript
// Assuming mixedBag array from Exercise 5 exists
const lastElement = mixedBag[mixedBag.length - 1];
console.log(`Last element: ${lastElement}`); // Output: Last element: null

// Chapter 6 - Solution 7
JavaScript
const tasks = ["Wash dishes"];
tasks.push("Do laundry");
console.log(tasks); // Output: [ 'Wash dishes', 'Do laundry' ]

// Chapter 6 - Solution 8
JavaScript
// Assuming tasks array from Exercise 7 exists
const removedTask = tasks.pop();
console.log(tasks);        // Output: [ 'Wash dishes' ]
console.log(removedTask); // Output: Do laundry

// Chapter 6 - Solution 9
JavaScript
const colors = ["Red", "Green"];
colors.unshift("Blue");
console.log(colors); // Output: [ 'Blue', 'Red', 'Green' ]

// Chapter 6 - Solution 10
JavaScript
// Assuming colors array from Exercise 9 exists
const removedColor = colors.shift();
console.log(colors);       // Output: [ 'Red', 'Green' ]
console.log(removedColor); // Output: Blue

// Chapter 6 - Solution 11
JavaScript
const results = [];
results.push(10);
results.push(20);
results.push(30);
// Or results.push(10, 20, 30);
console.log(results); // Output: [ 10, 20, 30 ]

// Chapter 6 - Solution 12
JavaScript
const queue = ["Alice", "Bob", "Charlie"];
console.log("Initial queue:", queue);
queue.push("David"); // David joins the end
console.log("After push('David'):", queue);
const servedPerson = queue.shift(); // Alice is served from the front
console.log("Served:", servedPerson);
console.log("Final queue:", queue); // Output: Final queue: [ 'Bob', 'Charlie', 'David' ]

// Chapter 6 - Solution 13
JavaScript
const letters = ['X', 'Y', 'Z'];
console.log("Letters:");
for (const letter of letters) {
  console.log(letter);
}
// Output: X, Y, Z (each on a new line)

// Chapter 6 - Solution 14
JavaScript
const prices = [10.50, 22.00, 8.75];
let totalPrice = 0;
for (const price of prices) {
  totalPrice += price;
}
console.log(`Total price: ${totalPrice.toFixed(2)}`); // Output: Total price: 41.25

// Chapter 6 - Solution 15
JavaScript
const words = ["One", "Two", "Three"];
console.log("Words and lengths:");
for (const word of words) {
  console.log(`<span class="math-inline">\{word\} \(</span>{word.length})`);
}
// Output:
// One (3)
// Two (3)
// Three (5)

// Chapter 6 - Solution 16
JavaScript
const numbers = [1, 2, 3];
console.log("Numbers multiplied by 10:");
numbers.forEach((num) => {
  console.log(num * 10);
});
// Output: 10, 20, 30 (each on a new line)

// Chapter 6 - Solution 17
JavaScript
const names = ["Alice", "Bob"];
console.log("Names with index:");
names.forEach((name, index) => {
  console.log(`Index ${index}: ${name}`);
});
// Output:
// Index 0: Alice
// Index 1: Bob

// Chapter 6 - Solution 18
JavaScript
const values = [10, 20, 30];
let sum = 0; // Initialize sum outside
values.forEach((value) => {
  sum += value;
});
console.log(`Sum: ${sum}`); // Output: Sum: 60

// Chapter 6 - Solution 19
JavaScript
const nums = [1, 4, 9, 16];
const roots = nums.map((num) => {
  return Math.sqrt(num);
});
// Or const roots = nums.map(Math.sqrt); // Can pass function directly if signature matches
console.log(roots); // Output: [ 1, 2, 3, 4 ]

// Chapter 6 - Solution 20
JavaScript
const strings = ["a", "b", "c"];
const upperCaseStrings = strings.map((str) => {
  return str.toUpperCase();
});
console.log(upperCaseStrings); // Output: [ 'A', 'B', 'C' ]

// Chapter 6 - Solution 21
JavaScript
const users = [{id: 1, name: "A"}, {id: 2, name: "B"}];
const userNames = users.map((user) => {
  return user.name; // Return only the name property
});
console.log(userNames); // Output: [ 'A', 'B' ]

// Chapter 6 - Solution 22
JavaScript
const numbers = [10, 20, 30];
const formattedStrings = numbers.map((num) => {
  return `Value: ${num}`; // Use template literal
});
console.log(formattedStrings); // Output: [ 'Value: 10', 'Value: 20', 'Value: 30' ]

// Chapter 6 - Solution 23
JavaScript
const scores = [15, 88, 42, 91, 5];
const highScores = scores.filter((score) => {
  return score > 50; // Keep if score > 50
});
console.log(highScores); // Output: [ 88, 91 ]

// Chapter 6 - Solution 24
JavaScript
const words = ["run", "jump", "swim", "fly", "crawl"];
const shortWords = words.filter((word) => {
  return word.length <= 3; // Keep if length <= 3
});
console.log(shortWords); // Output: [ 'run', 'fly' ]

// Chapter 6 - Solution 25
JavaScript
const mixed = [0, 1, "hello", false, "", 100];
// The filter callback naturally uses the truthiness/falsiness of the return value
const truthyValues = mixed.filter((value) => {
  return value; // Return the value itself - filter keeps if truthy
});
// Concise version: const truthyValues = mixed.filter(Boolean);
console.log(truthyValues); // Output: [ 1, 'hello', 100 ]

// Chapter 6 - Solution 26
JavaScript
const products = [{name: "A", price: 50}, {name: "B", price: 150}, {name: "C", price: 75}];
const expensiveProducts = products.filter((product) => {
  return product.price > 80; // Keep if price > 80
});
console.log(expensiveProducts); // Output: [ { name: 'B', price: 150 } ]

// Chapter 6 - Solution 27
JavaScript
const numbers = [5, 10, 15, 20];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // Initial value for sum is 0
console.log(`Sum: ${sum}`); // Output: Sum: 50

// Chapter 6 - Solution 28
JavaScript
const nums = [2, 3, 4];
const product = nums.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
}, 1); // Initial value for product must be 1
console.log(`Product: ${product}`); // Output: Product: 24

// Chapter 6 - Solution 29
JavaScript
const words = ["Combine", " ", "these", " ", "words"];
const sentence = words.reduce((accumulator, currentWord) => {
  return accumulator + currentWord;
}, ""); // Initial value is an empty string
console.log(sentence); // Output: Combine these words

// Chapter 6 - Solution 30
JavaScript
const grades = [65, 92, 81, 70, 92, 81];
const countOf92 = grades.reduce((count, currentGrade) => {
  if (currentGrade === 92) {
    return count + 1; // Increment count if grade is 92
  } else {
    return count; // Otherwise, keep count as is
  }
  // Shorter: return currentGrade === 92 ? count + 1 : count;
}, 0); // Initial count is 0
console.log(`Count of 92s: ${countOf92}`); // Output: Count of 92s: 2

// Chapter 6 - Solution 31
JavaScript
const values = [10, 5, 30, 15];
const maxVal = values.reduce((max, current) => {
    return current > max ? current : max;
}, -Infinity); // Or values[0] if sure array isn't empty
console.log(`Max value: ${maxVal}`); // Output: Max value: 30

// Chapter 6 - Solution 32
JavaScript
const coords = [100, 200];
const [x, y] = coords;
console.log(`x: ${x}, y: ${y}`); // Output: x: 100, y: 200

// Chapter 6 - Solution 33
JavaScript
const rgb = [255, 128, 0];
const [red, , blue] = rgb; // Comma skips the element at index 1
console.log(`Red: ${red}, Blue: ${blue}`); // Output: Red: 255, Blue: 0

// Chapter 6 - Solution 34
JavaScript
const scores = [95, 80, 75, 70, 65];
const [firstScore, ...otherScores] = scores;
console.log(`First Score: ${firstScore}`);   // Output: First Score: 95
console.log(`Other Scores:`, otherScores); // Output: Other Scores: [ 80, 75, 70, 65 ]

// Chapter 6 - Solution 35
JavaScript
const settings = ["Arial"];
const [fontFamily = "Sans-serif"] = settings;
console.log(`Font Family: ${fontFamily}`); // Output: Font Family: Arial

// Chapter 6 - Solution 36
JavaScript
const arrA = [1, 2];
const arrB = [3, 4];
const merged = [...arrA, ...arrB];
console.log(merged); // Output: [ 1, 2, 3, 4 ]

// Chapter 6 - Solution 37
JavaScript
const original = ["a", "b", "c"];
const copy = [...original];
console.log(copy);          // Output: [ 'a', 'b', 'c' ]
console.log(original === copy); // Output: false (different arrays)

// Chapter 6 - Solution 38
JavaScript
const start = [10];
const end = [30];
const middle = [...start, 20, ...end];
console.log(middle); // Output: [ 10, 20, 30 ]

// Chapter 6 - Solution 39
JavaScript
function logArgs(arg1, arg2, arg3) {
  console.log("Arg 1:", arg1);
  console.log("Arg 2:", arg2);
  console.log("Arg 3:", arg3);
}

const argsArray = ["One", "Two", "Three"];
logArgs(...argsArray); // Spreads array elements into individual arguments
// Output:
// Arg 1: One
// Arg 2: Two
// Arg 3: Three

// Chapter 6 - Solution 40
JavaScript
const numbers = [5, 1, 8, 3];
// Math.max() expects individual arguments, not an array
const maxNumber = Math.max(...numbers); // Spreads numbers into: Math.max(5, 1, 8, 3)
console.log(`Max number: ${maxNumber}`); // Output: Max number: 8

// Chapter 6 - Solution 41
JavaScript
const data = [1, 2, 3, 4, 5, 6];
const squaresOfEvens = data
  .filter(num => num % 2 === 0) // Filter: keep only even numbers [2, 4, 6]
  .map(evenNum => evenNum * evenNum); // Map: square each remaining number [4, 16, 36]

console.log(squaresOfEvens); // Output: [ 4, 16, 36 ]

// Chapter 6 - Solution 42
JavaScript
const users = [{ name: "A", age: 25 }, { name: "B", age: 30 }, { name: "C", age: 25 }];

// Option 1: Using reduce directly
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
const averageAge = totalAge / users.length;

// Option 2: Using map then reduce
// const ages = users.map(user => user.age); // [25, 30, 25]
// const totalAgeMap = ages.reduce((sum, age) => sum + age, 0);
// const averageAgeMap = totalAgeMap / users.length;

console.log(`Average Age: ${averageAge}`); // Output: Average Age: 26.666...

// Chapter 6 - Solution 43
JavaScript
const items = ["Apple", "Banana", "Apple", "Orange", "Banana", "Apple"];

const fruitCounts = items.reduce((counts, fruit) => {
  // If fruit is not yet a key in counts, initialize it to 0
  counts[fruit] = (counts[fruit] || 0) + 1;
  // Or:
  // if (!counts[fruit]) {
  //   counts[fruit] = 0;
  // }
  // counts[fruit]++;
  return counts; // Return the updated counts object for the next iteration
}, {}); // Initial value is an empty object {}

console.log(fruitCounts); // Output: { Apple: 3, Banana: 2, Orange: 1 }

// Chapter 6 - Solution 44
JavaScript
const sentence = "This is a sample sentence";
const processedWords = sentence
  .split(' ') // Split into array: ["This", "is", "a", "sample", "sentence"]
  .filter(word => word.length > 3) // Filter: ["This", "sample", "sentence"]
  .map(word => word.toUpperCase()); // Map: ["THIS", "SAMPLE", "SENTENCE"]

console.log(processedWords); // Output: [ 'THIS', 'SAMPLE', 'SENTENCE' ]

// Chapter 6 - Solution 45
JavaScript
const arr = [1, [2, 3], 4, [5]];

const flattened = arr.reduce((accumulator, currentValue) => {
  if (Array.isArray(currentValue)) {
    // If current value is an array, spread its elements into the accumulator
    return accumulator.concat(...currentValue); // Or [...accumulator, ...currentValue]
  } else {
    // If current value is not an array, just add it
    return accumulator.concat(currentValue); // Or [...accumulator, currentValue]
  }
}, []); // Initial value is an empty array

console.log(flattened); // Output: [ 1, 2, 3, 4, 5 ]

// Chapter 6 - Solution 46
JavaScript
const people = [{ name: "A", city: "X" }, { name: "B", city: "Y" }, { name: "C", city: "X" }];

const namesInCityX = people
  .filter(person => person.city === "X") // Keep only people in city "X" [{ name: "A", city: "X" }, { name: "C", city: "X" }]
  .map(person => person.name); // Extract the name from the filtered people ["A", "C"]

console.log(namesInCityX); // Output: [ 'A', 'C' ]

// Chapter 6 - Solution 47
JavaScript
const nested = [[1, 2], [3, 4], [5, 6]];

const sumsOfInnerArrays = nested.map(innerArray => {
  // Use reduce on each innerArray
  return innerArray.reduce((sum, num) => sum + num, 0);
});

console.log(sumsOfInnerArrays); // Output: [ 3, 7, 11 ]

// Chapter 6 - Solution 48
JavaScript
const inventory = [{ item: 'A', stock: 5 }, { item: 'B', stock: 0 }, { item: 'C', stock: 10 }];
const inStockItems = inventory.filter(product => product.stock > 0);
console.log(inStockItems);
// Output: [ { item: 'A', stock: 5 }, { item: 'C', stock: 10 } ]

// Chapter 6 - Solution 49
JavaScript
let arr = [10, 20, 30];
const [first, second, ...rest] = arr; // Destructure
arr = [second, first, ...rest]; // Reconstruct using spread
console.log(arr); // Output: [ 20, 10, 30 ]

// Chapter 6 - Solution 50
JavaScript
const temps = [15, 20, 25, 18];
const tempsFormatted = temps.map(celsiusTemp => {
    const fahrenheitTemp = (celsiusTemp * 9/5) + 32;
    return { celsius: celsiusTemp, fahrenheit: fahrenheitTemp };
});
console.log(tempsFormatted);
// Output:
// [
//   { celsius: 15, fahrenheit: 59 },
//   { celsius: 20, fahrenheit: 68 },
//   { celsius: 25, fahrenheit: 77 },
//   { celsius: 18, fahrenheit: 64.4 }
// ]

