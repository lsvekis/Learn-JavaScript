// Chapter 7 - Solution 1
JavaScript
const headingElement = document.getElementById('main-heading');
console.log(headingElement);

// Chapter 7 - Solution 2
JavaScript
const firstPara = document.querySelector('p');
console.log(firstPara);

// Chapter 7 - Solution 3
JavaScript
const highlightedElement = document.querySelector('.highlight');
console.log(highlightedElement); // Logs the <span> element

// Chapter 7 - Solution 4
JavaScript
const itemsNodeList = document.querySelectorAll('.list-item');
console.log(itemsNodeList); // Logs the NodeList
console.log(itemsNodeList.length); // Output: 2

// Chapter 7 - Solution 5
JavaScript
// Assuming itemsNodeList exists from Exercise 4
console.log("List item texts:");
itemsNodeList.forEach(item => {
    console.log(item.textContent);
});
// Output: A, C (each on a new line)

// Chapter 7 - Solution 6
JavaScript
const usernameInput = document.querySelector('input[name="username"]');
// Or just: const usernameInput = document.querySelector('[name="username"]');
console.log(usernameInput);

// Chapter 7 - Solution 7
JavaScript
const messagePara = document.getElementById('message');
console.log(messagePara.textContent); // Output: Initial message.

// Chapter 7 - Solution 8
JavaScript
// Assuming messagePara exists from Exercise 7
messagePara.textContent = "Message updated!";
console.log(messagePara.textContent); // Output: Message updated!

// Chapter 7 - Solution 9
JavaScript
const contentArea = document.getElementById('content-area');
contentArea.innerHTML = "<button>Click Me</button>";
// Check browser dev tools: the div now contains a button element.

// Chapter 7 - Solution 10
JavaScript
const warningDiv = document.getElementById('warning');
console.log(warningDiv.innerHTML); // Output: <strong>Warning:</strong> Process failed.

// Chapter 7 - Solution 11
JavaScript
const logoImage = document.getElementById('logo');
console.log(logoImage.getAttribute('src')); // Output: logo.png

// Chapter 7 - Solution 12
JavaScript
// Assuming logoImage exists from Exercise 11
logoImage.setAttribute('src', 'new-logo.svg');
// Log using direct property - browser often resolves to full URL
console.log(logoImage.src); // Output: (Full URL ending in) new-logo.svg

// Chapter 7 - Solution 13
JavaScript
const docsLink = document.getElementById('docs-link');
docsLink.href = "./docs";
console.log(docsLink.href); // Output: (Full URL ending in) /docs

// Chapter 7 - Solution 14
JavaScript
const alertBox = document.getElementById('alert-box');
alertBox.classList.add('visible');
console.log(alertBox.className); // Output: alert visible

// Chapter 7 - Solution 15
JavaScript
// Assuming alertBox exists from Exercise 14
alertBox.classList.remove('alert');
console.log(alertBox.className); // Output: visible

// Chapter 7 - Solution 16
JavaScript
// Assuming alertBox exists from Exercise 15
alertBox.classList.toggle('highlight'); // Adds 'highlight'
console.log(alertBox.className); // Output: visible highlight
alertBox.classList.toggle('highlight'); // Removes 'highlight'
console.log(alertBox.className); // Output: visible

// Chapter 7 - Solution 17
JavaScript
const textBlock = document.getElementById('text-block');
textBlock.style.color = 'red';

// Chapter 7 - Solution 18
JavaScript
const resizableDiv = document.getElementById('resizable');
resizableDiv.style.width = '200px'; // Value must be a string
resizableDiv.style.backgroundColor = 'lightblue'; // Use camelCase for background-color

// Chapter 7 - Solution 19
JavaScript
const styledElement = document.getElementById('styled-element');
console.log(styledElement.style.fontSize); // Output: "" (empty string)

// Chapter 7 - Solution 20
JavaScript
const newDiv = document.createElement('div');
console.log(newDiv); // Logs the newly created (but detached) <div> element

// Chapter 7 - Solution 21
JavaScript
const newTextNode = document.createTextNode('Hello DOM!');
console.log(newTextNode); // Logs the text node object

// Chapter 7 - Solution 22
JavaScript
// Assuming newDiv and newTextNode exist
newDiv.appendChild(newTextNode);
console.log(newDiv.innerHTML); // Output: Hello DOM!

// Chapter 7 - Solution 23
JavaScript
// Assuming newDiv exists and contains text
document.body.appendChild(newDiv);
// Check the bottom of the HTML page - the new div with "Hello DOM!" should appear.

// Chapter 7 - Solution 24
JavaScript
const newList = document.createElement('ul');

for (let i = 1; i <= 3; i++) {
  const newItem = document.createElement('li');
  newItem.textContent = `Item ${i}`; // Set text content
  newList.appendChild(newItem); // Append li to ul
}

document.body.appendChild(newList); // Append ul to body

// Chapter 7 - Solution 25
JavaScript
// Assuming newList exists from Exercise 24 and is in the DOM
const firstExistingItem = newList.querySelector('li'); // Or newList.children[0]

if (firstExistingItem) { // Check if the list isn't empty
  const itemZero = document.createElement('li');
  itemZero.textContent = "Item 0";
  newList.insertBefore(itemZero, firstExistingItem);
} else {
  // Handle case where list might be empty if needed
  const itemZero = document.createElement('li');
  itemZero.textContent = "Item 0";
  newList.appendChild(itemZero);
}

// Chapter 7 - Solution 26
JavaScript
// Assuming newList exists and contains items including one with text "Item 2"
const items = newList.querySelectorAll('li');
let itemToRemove = null;
items.forEach(item => { // Find the item with specific text
    if (item.textContent === "Item 2") {
        itemToRemove = item;
    }
});

if (itemToRemove) {
  newList.removeChild(itemToRemove); // Remove using parent.removeChild(child)
  console.log("Removed 'Item 2'");
} else {
  console.log("'Item 2' not found.");
}

// Chapter 7 - Solution 27
JavaScript
// Assuming newList exists and is in the DOM
if (newList) { // Check if the element reference exists
    newList.remove(); // Removes the ul element itself
    console.log("Removed the entire list.");
}

// Chapter 7 - Solution 28
JavaScript
const myButton = document.getElementById('my-btn');
if (myButton) {
  myButton.addEventListener('click', function() {
    console.log("Button clicked!");
  });
}

// Chapter 7 - Solution 29
JavaScript
const hoverBox = document.getElementById('hover-box');
if (hoverBox) {
  hoverBox.addEventListener('mouseover', () => { // Using arrow function
    console.log("Mouse over!");
  });
}

// Chapter 7 - Solution 30
JavaScript
// Assuming hoverBox exists from Exercise 29
if (hoverBox) {
  hoverBox.addEventListener('mouseout', () => {
    console.log("Mouse out!");
  });
}

// Chapter 7 - Solution 31
JavaScript
const textInput = document.getElementById('text-input');
if (textInput) {
  textInput.addEventListener('keydown', function() {
    console.log("Key pressed!");
  });
}

// Chapter 7 - Solution 32
JavaScript
const runButton = document.getElementById('my-btn'); // Renamed for clarity
const statusPara = document.getElementById('status');
if (runButton && statusPara) {
  runButton.addEventListener('click', () => {
    statusPara.textContent = "Processing...";
  });
}

// Chapter 7 - Solution 33
JavaScript
// Assuming statusPara exists from Exercise 32
if (statusPara) {
  statusPara.addEventListener('dblclick', function() {
    statusPara.textContent = "Idle";
  });
}

// Chapter 7 - Solution 34
JavaScript
const logEventBtn = document.getElementById('log-event-btn');
if (logEventBtn) {
  logEventBtn.addEventListener('click', function(event) { // Receive the event object
    console.log("Event object:", event);
  });
}

// Chapter 7 - Solution 35
JavaScript
const outerDiv = document.getElementById('outer');
if (outerDiv) {
  outerDiv.addEventListener('click', (event) => {
    console.log("Clicked target:", event.target); // Logs the specific element clicked (span, button, or div itself)
    console.log("Listener attached to:", event.currentTarget); // Logs the element the listener is on (outerDiv)
  });
}

// Chapter 7 - Solution 36
JavaScript
const testForm = document.getElementById('test-form');
if (testForm) {
  testForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Stop default form submission (page reload)
    console.log("Form submission prevented.");
  });
}

// Chapter 7 - Solution 37
JavaScript
const keyInput = document.getElementById('key-input');
if (keyInput) {
  keyInput.addEventListener('keydown', function(e) {
    console.log(`Key pressed: ${e.key}`);
  });
}

// Chapter 7 - Solution 38
JavaScript
const navLink = document.getElementById('nav-link');
if (navLink) {
  navLink.addEventListener('click', function(event) {
    event.preventDefault();
    // 'this' inside a regular function handler often refers to the element
    // Or use event.currentTarget or the variable navLink
    console.log(`Link clicked, but navigation prevented. Href was: ${this.href}`);
    // console.log(`Link clicked, but navigation prevented. Href was: ${navLink.href}`);
  });
}

// Chapter 7 - Solution 39
JavaScript
const parentDiv = document.getElementById('parent');
const childButton = document.getElementById('child');

if (parentDiv) {
    parentDiv.addEventListener('click', () => {
        console.log("Div clicked (due to bubbling or direct click)");
    });
}
if (childButton) {
    childButton.addEventListener('click', () => {
        console.log("Button clicked");
    });
}
// Clicking the button logs:
// Button clicked
// Div clicked (due to bubbling or direct click)

// Chapter 7 - Solution 40
JavaScript
// Assuming parentDiv and childButton listeners exist from Exercise 39
if (childButton) {
    // Remove previous listener if needed, or just add new one for demo
    childButton.addEventListener('click', (event) => { // Add event parameter
        console.log("Button clicked (stopPropagation)");
        event.stopPropagation(); // Stop the event from bubbling up
    });
}
// Clicking the button now logs only:
// Button clicked (stopPropagation)
// The div's listener is NOT triggered.

// Chapter 7 - Solution 41
JavaScript
// Assuming parentDiv, childButton (with stopPropagation), and listeners exist
const outerButton = document.getElementById('outer-btn');

if (outerButton) {
    outerButton.addEventListener('click', () => {
        console.log("Outer Button clicked");
    });
}

document.body.addEventListener('click', (event) => {
    console.log(`Body clicked! Target was: <span class="math-inline">\{event\.target\.tagName\}\#</span>{event.target.id || '[no id]'}`);
});

// Click inner button: Logs "Button clicked (stopPropagation)" -> Body NOT reached
// Click outer button: Logs "Outer Button clicked" -> Body reached (Target: BUTTON#outer-btn)
// Click parent div background: Logs "Div clicked..." -> Body reached (Target: DIV#parent)

// Chapter 7 - Solution 42
HTML
<p id="count-display">0</p>
<button id="increment-btn">+</button>
<button id="decrement-btn">-</button>
 JavaScript
const countDisplay = document.getElementById('count-display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');

let count = 0;

if (incrementBtn) {
    incrementBtn.addEventListener('click', () => {
        count++;
        countDisplay.textContent = count;
    });
}
if (decrementBtn) {
    decrementBtn.addEventListener('click', () => {
        count--;
        countDisplay.textContent = count;
    });
}

// Chapter 7 - Solution 43
HTML
<input type="text" id="todo-input" placeholder="New task...">
<button id="add-todo-btn">Add Task</button>
<ul id="todo-list"></ul>
 JavaScript
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

if (addTodoBtn && todoInput && todoList) {
    addTodoBtn.addEventListener('click', () => {
        const taskText = todoInput.value.trim(); // Get input value, remove whitespace

        if (taskText !== "") { // Only add if input is not empty
            const newListItem = document.createElement('li');
            newListItem.textContent = taskText;
            todoList.appendChild(newListItem);
            todoInput.value = ""; // Clear the input field
        } else {
            alert("Please enter a task!");
        }
    });
}

// Chapter 7 - Solution 44
CSS
/* Add this CSS */
.completed {
    text-decoration: line-through;
    color: grey;
}
 JavaScript
// Assuming JS from Exercise 43 exists
if (todoList) {
    todoList.addEventListener('click', (event) => {
        // Check if the clicked element is actually an LI
        if (event.target && event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
        }
    });
}

// Chapter 7 - Solution 45
HTML
<img id="my-img" src="logo.png" alt="Logo" style="display: block;"> <br>
<button id="show-btn">Show</button>
<button id="hide-btn">Hide</button>
 JavaScript
const myImage = document.getElementById('my-img');
const showBtn = document.getElementById('show-btn');
const hideBtn = document.getElementById('hide-btn');

if (myImage && showBtn && hideBtn) {
    showBtn.addEventListener('click', () => {
        myImage.style.display = 'block'; // Or '' to reset to default
    });
    hideBtn.addEventListener('click', () => {
        myImage.style.display = 'none';
    });
}

// Chapter 7 - Solution 46
HTML
<img id="gallery-img" src="img1.jpg" alt="Gallery Image" width="200">
 JavaScript
const galleryImg = document.getElementById('gallery-img');
const imageUrls = ["img1.jpg", "img2.jpg", "img3.jpg"]; // Replace with actual URLs
let currentImageIndex = 0;

if (galleryImg) {
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % imageUrls.length; // Cycle index
        galleryImg.src = imageUrls[currentImageIndex];
        console.log(`Changed image to ${galleryImg.src}`);
    }, 2000); // Run every 2000 milliseconds (2 seconds)
}

// Chapter 7 - Solution 47
JavaScript
const trackerDiv = document.getElementById('mouse-tracker');
if (trackerDiv) {
    trackerDiv.addEventListener('mousemove', (event) => {
        // Log coordinates relative to the viewport
        console.log(`Mouse Coordinates: X=<span class="math-inline">\{event\.clientX\}, Y\=</span>{event.clientY}`);
    });
}

// Chapter 7 - Solution 48
JavaScript
const creatorPara = document.getElementById('creator');
if (creatorPara) {
    creatorPara.addEventListener('click', () => {
        const newPara = document.createElement('p');
        newPara.textContent = "Created by click!";
        // Modern way using .after()
        creatorPara.after(newPara);

        // Traditional way using insertBefore
        // creatorPara.parentNode.insertBefore(newPara, creatorPara.nextSibling);
    });
}

// Chapter 7 - Solution 49
JavaScript
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { // Check the key property
        console.log("Escape key pressed!");
    }
});

// Chapter 7 - Solution 50
JavaScript
const removeBtn = document.getElementById('remove-me-btn');
if (removeBtn) {
    removeBtn.addEventListener('click', function(event) { // Use regular function for 'this'
        console.log("Removing button...");
        // Option 1: Using 'this'
        // this.remove();

        // Option 2: Using event.target
        event.target.remove();

        // Option 3: Using the variable itself
        // removeBtn.remove();
    });
}

