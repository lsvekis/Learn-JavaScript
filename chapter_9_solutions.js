// Chapter 9 - Solution 1
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

// Chapter 9 - Solution 2
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() { // Method definition
        console.log(`Car: ${this.make} ${this.model}`);
    }
}

// Chapter 9 - Solution 3
// Assuming Car class from Exercise 10 exists
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

console.log(car1); // Logs the Car object instance
console.log(car2);

// Chapter 9 - Solution 4
// Assuming car1 and car2 exist from Exercise 11
car1.displayInfo(); // Output: Car: Toyota Camry
car2.displayInfo(); // Output: Car: Honda Civic

// Chapter 9 - Solution 5
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

// Chapter 9 - Solution 6
// Assuming Rectangle class exists
const rect = new Rectangle(10, 5);
const area = rect.getArea();
console.log(`Rectangle Area: ${area}`); // Output: Rectangle Area: 50

// Chapter 9 - Solution 7
class Logger {
    log(message) {
        console.log(`INFO: ${message}`);
    }

    error(message) {
        console.error(`ERROR: ${message}`); // Use console.error for errors
    }
}

// Chapter 9 - Solution 8
// Assuming Logger class exists
const myLogger = new Logger();
myLogger.log("Process started.");    // Output: INFO: Process started.
myLogger.error("Something went wrong!"); // Output (usually in red): ERROR: Something went wrong!

// Chapter 9 - Solution 9
const userName = "Alex";
const score = 150;
const message = `User ${userName} has a score of ${score}.`;
console.log(message); // Output: User Alex has a score of 150.

// Chapter 9 - Solution 10
const address = `123 Main Street

Anytown, ON A1B 2C3 Canada`; console.log(address); // Output: // 123 Main Street // Anytown, ON A1B 2C3 // Canada ```

// Chapter 9 - Solution 11
const price = 19.99;
const taxRate = 0.13;
const totalMessage = `Total: $${(price * (1 + taxRate)).toFixed(2)}`;
console.log(totalMessage); // Output: Total: $22.59

// Chapter 9 - Solution 12
const person = { name: "Bob", age: 30, city: "Toronto" };
const { name, city } = person;
console.log(`Name: ${name}, City: ${city}`); // Output: Name: Bob, City: Toronto

// Chapter 9 - Solution 13
const person = { name: "Bob", age: 30, city: "Toronto" };
const { age: years } = person; // Rename age to years
console.log(`Years: ${years}`); // Output: Years: 30

// Chapter 9 - Solution 14
const settings = { theme: "light" };
const { theme, fontSize = 16 } = settings;
console.log(`Theme: ${theme}, Font Size: ${fontSize}`); // Output: Theme: light, Font Size: 16

// Chapter 9 - Solution 15
const data = { id: 1, info: { title: "Post", description: "..." } };
const { id, info: { title } } = data;
console.log(`ID: ${id}, Title: ${title}`); // Output: ID: 1, Title: Post

// Chapter 9 - Solution 16
const person = { name: "Charlie", age: 25, city: "Ajax" };

function displayPersonInfo({ name, age }) { // Destructuring in parameter list
  console.log(`Person: ${name}, Age: ${age}`);
}

displayPersonInfo(person); // Output: Person: Charlie, Age: 25

// Chapter 9 - Solution 17
const obj = { a: 1, b: 2, c: 3 };
const { a, ...restProps } = obj;
console.log(`Value a: ${a}`);       // Output: Value a: 1
console.log("Rest Props:", restProps); // Output: Rest Props: { b: 2, c: 3 }

// Chapter 9 - Solution 18
const user = { name: "Dave" }; // profile does not exist
const email = user?.profile?.email;
console.log(`Email: ${email}`); // Output: Email: undefined

// Chapter 9 - Solution 19
const data = { info: null };
const title = data?.info?.title;
console.log(`Title: ${title}`); // Output: Title: undefined

// Chapter 9 - Solution 20
const config = { settings: { timeout: 500 } };
const timeout = config?.settings?.timeout;
console.log(`Timeout: ${timeout}`); // Output: Timeout: 500

// Chapter 9 - Solution 21
const obj = { getData: () => "Some Data" };
const obj2 = {};

const result1 = obj?.getData?.(); // Method exists, so it's called
console.log(`Result 1: ${result1}`); // Output: Result 1: Some Data

const result2 = obj2?.getData?.(); // Method doesn't exist on obj2
console.log(`Result 2: ${result2}`); // Output: Result 2: undefined

// Chapter 9 - Solution 22
const arr = null;
const firstElement = arr?.[0];
console.log(`First element: ${firstElement}`); // Output: First element: undefined

// Chapter 9 - Solution 23
const userSetting = null;
const finalSetting = userSetting ?? "Default Value";
console.log(`Setting: ${finalSetting}`); // Output: Setting: Default Value

// Chapter 9 - Solution 24
const count = 0;
const finalCountNullish = count ?? 10;
const finalCountOr = count || 10;

console.log(`Using ??: ${finalCountNullish}`); // Output: Using ??: 0
console.log(`Using ||: ${finalCountOr}`);    // Output: Using ||: 10

// Chapter 9 - Solution 25
const inputText = "";
const displayTextNullish = inputText ?? "No input";
const displayTextOr = inputText || "No input";

console.log(`Using ??: "${displayTextNullish}"`); // Output: Using ??: ""
console.log(`Using ||: "${displayTextOr}"`);    // Output: Using ||: "No input"

// Chapter 9 - Solution 26
const isEnabled = false;
const finalStatusNullish = isEnabled ?? true;
const finalStatusOr = isEnabled || true;

console.log(`Using ??: ${finalStatusNullish}`); // Output: Using ??: false
console.log(`Using ||: ${finalStatusOr}`);    // Output: Using ||: true

// Chapter 9 - Solution 27
// Simulate process.env.PORT being undefined
const process = { env: {} };

const port = process.env.PORT ?? 3000;
console.log(`Port: ${port}`); // Output: Port: 3000

// Chapter 9 - Solution 28
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const products = [
    new Product("Laptop", 1200),
    new Product("Mouse", 25),
    new Product("Keyboard", 75),
    new Product("Webcam", 45)
];

const cheapProducts = products.filter(product => product.price < 50);

console.log("Cheap Products:", cheapProducts);
// Output: Cheap Products: [ Product { name: 'Mouse', price: 25 }, Product { name: 'Webcam', price: 45 } ]

// Chapter 9 - Solution 29
// Assuming products array and Product class exist from Exercise 37
const productDescriptions = products.map(product => {
    return `Item: ${product.name} - Price: $${product.price}`;
});

console.log(productDescriptions);
// Output: [ 'Item: Laptop - Price: $1200', 'Item: Mouse - Price: $25', 'Item: Keyboard - Price: $75', 'Item: Webcam - Price: $45' ]

// Chapter 9 - Solution 30
const response = { data: { items: ["A", "B"], count: 2 }, error: null };

// Destructure first, then use optional chaining if needed (though not strictly needed here)
const { data } = response;
const firstItem = data?.items?.[0]; // Safely access items array and its first element

// Or combined destructuring (more advanced)
// const { data: { items: [firstItemCombined] = [] } = {} } = response; // Provides defaults

console.log(`First Item: ${firstItem}`); // Output: First Item: A

// Chapter 9 - Solution 31
// Assuming config object from Exercise 5 exists:
// const config = { theme: 'dark', debugMode: false };

function getConfigValue(key, defaultValue) {
    // Access property using bracket notation for dynamic key
    return config[key] ?? defaultValue;
}

console.log(`Theme: ${getConfigValue('theme', 'light')}`);     // Output: Theme: dark
console.log(`API Key: ${getConfigValue('apiKey', 'default_key')}`); // Output: API Key: default_key
console.log(`Debug Mode: ${getConfigValue('debugMode', true)}`); // Output: Debug Mode: false

// Chapter 9 - Solution 32
const users = [{id:1, name:"A"}, {id:2}, {id:3, name:"C"}];

const usersWithDefaults = users.map(user => {
    const { id, name = "Guest" } = user; // Destructure with default for name
    return { id, name }; // Return new object
});

console.log(usersWithDefaults);
// Output: [ { id: 1, name: 'A' }, { id: 2, name: 'Guest' }, { id: 3, name: 'C' } ]

// Chapter 9 - Solution 33
const apiResponse = { statusCode: 200, data: null };

const value = apiResponse.data?.value ?? "No value found";
// 1. apiResponse.data is null.
// 2. Optional chaining `?.` stops and returns undefined from `apiResponse.data?.value`.
// 3. `undefined ?? "No value found"` evaluates to "No value found".

console.log(value); // Output: No value found

// Chapter 9 - Solution 34
const modules = [{ name: 'A', enabled: false }, { name: 'B', enabled: true }, { name: 'C' }];

const enabledModules = modules.filter(mod => {
    const { enabled = false } = mod; // Destructure 'enabled', default to false if missing
    return enabled; // Keep only if enabled is true
});

console.log(enabledModules); // Output: [ { name: 'B', enabled: true } ]

// Chapter 9 - Solution 35
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Getter method
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person("Jane", "Doe");
// Access the getter like a property (no parentheses)
console.log(person1.fullName); // Output: Jane Doe

// Chapter 9 - Solution 36
const obj1 = { a: 1 };
const obj2 = { b: 2, c: 3 };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // Output: { a: 1, b: 2, c: 3 }

// Chapter 9 - Solution 37
const user = { id: 10, settings: null };
const theme = user?.settings?.theme ?? 'light';
// 1. user?.settings evaluates to null
// 2. ?. stops, returns undefined
// 3. undefined ?? 'light' evaluates to 'light'
console.log(`User theme: ${theme}`); // Output: User theme: light

