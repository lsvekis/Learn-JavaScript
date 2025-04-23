// Chapter 8 - Solution 1
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
console.log("Timer set!"); // This logs first

// Chapter 8 - Solution 2
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  setTimeout(callback, 1000);
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// Chapter 8 - Solution 3
setTimeout(() => console.log("First (500ms)"), 500);
setTimeout(() => console.log("Second (1000ms)"), 1000);
setTimeout(() => console.log("Third (300ms)"), 300);
console.log("Timers started...");
// Expected Output Order:
// Timers started...
// Third (300ms)
// First (500ms)
// Second (1000ms)

// Chapter 8 - Solution 4
function fetchUser(userId, callback) {
  console.log(`Fetching user ${userId}...`);
  setTimeout(() => {
    const user = { id: userId, name: 'User' + userId };
    console.log("User fetched:", user);
    callback(user);
  }, 1000);
}

function fetchPosts(user, callback) {
  console.log(`Fetching posts for ${user.name}...`);
  setTimeout(() => {
    const posts = [`${user.name}'s Post 1`, `${user.name}'s Post 2`];
    console.log("Posts fetched:", posts);
    callback(posts);
  }, 500);
}

// Nested callbacks (demonstrating potential "hell")
fetchUser(1, (fetchedUser) => {
  fetchPosts(fetchedUser, (fetchedPosts) => {
    console.log("Final posts result:", fetchedPosts);
  });
});
console.log("Initiated fetch sequence...");

// Chapter 8 - Solution 5
const successPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

successPromise.then((message) => {
  console.log("Promise resolved:", message); // Output after 1 sec: Promise resolved: Success!
});
console.log("Promise started...");

// Chapter 8 - Solution 6
const failurePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Failed!")); // Reject with an Error object
  }, 1500);
});

failurePromise
  .then((result) => { // This will be skipped
    console.log("Success (will not run):", result);
  })
  .catch((error) => { // This will run
    console.error("Promise rejected:", error.message); // Output after 1.5 sec: Promise rejected: Failed!
  });
console.log("Failure promise started...");

// Chapter 8 - Solution 7
// Assuming successPromise exists from Exercise 5
successPromise
  .then((message) => {
    console.log("Promise resolved again:", message);
  })
  .catch((error) => {
    console.error("Error (won't run):", error.message);
  })
  .finally(() => {
    console.log("Promise settled."); // This will run after .then
  });

// Chapter 8 - Solution 8
const promiseStep1 = new Promise(resolve => setTimeout(() => resolve(10), 500));

promiseStep1
  .then(value1 => {
    console.log("Step 1 resolved with:", value1);
    return value1 + 5; // Return value for the next .then
  })
  .then(value2 => {
    console.log("Step 2 received:", value2); // Output after ~500ms: Step 2 received: 15
  })
  .catch(err => console.error("Chain error:", err));

// Chapter 8 - Solution 9
Promise.resolve("A") // Start with an already resolved promise
  .then(result => {
    console.log("After step 1:", result); // A
    return result + "B";
  })
  .then(result => {
    console.log("After step 2:", result); // AB
    return result + "C";
  })
  .then(finalResult => {
    console.log("Final result:", finalResult); // Output: Final result: ABC
  })
  .catch(err => console.error("Chain error:", err));

// Chapter 8 - Solution 10
const fastPromise = new Promise(res => setTimeout(() => res("Fast"), 600));
const slowPromise = new Promise(res => setTimeout(() => res("Slow"), 1200));

console.log("Starting Promise.all...");
Promise.all([fastPromise, slowPromise])
  .then(results => {
    // Results array order matches input promise order
    console.log("Promise.all results:", results); // Output after ~1200ms: Promise.all results: [ 'Fast', 'Slow' ]
  })
  .catch(err => console.error("Promise.all error:", err));

// Chapter 8 - Solution 11
// Assuming fastPromise and slowPromise exist from Exercise 10
console.log("Starting Promise.race...");
Promise.race([fastPromise, slowPromise])
  .then(firstResult => {
    console.log("Promise.race result:", firstResult); // Output after ~600ms: Promise.race result: Fast
  })
  .catch(err => console.error("Promise.race error:", err));

// Chapter 8 - Solution 12
Promise.resolve(5) // Start with resolved value 5
  .then(num => {
    console.log("Original number:", num);
    return num * num; // Return the square
  })
  .then(squaredNum => {
    console.log("Squared number:", squaredNum); // Output: Squared number: 25
  });

// Chapter 8 - Solution 13
Promise.resolve("Start")
  .then(value => {
    console.log("Step 1:", value);
    return "Step 1 OK";
  })
  .then(value => {
    console.log("Step 2:", value);
    // Simulate an error in this step
    throw new Error("Something broke in Step 2!");
    // Or: return Promise.reject(new Error("Something broke in Step 2!"));
    // console.log("This won't be reached");
  })
  .then(value => {
    // This .then will be skipped due to the error above
    console.log("Step 3 (skipped):", value);
  })
  .catch(error => {
    console.error("Caught error in chain:", error.message); // Output: Caught error in chain: Something broke in Step 2!
  });

// Chapter 8 - Solution 14
async function getGreeting() {
  return "Hello Async!"; // Implicitly wraps this in a resolved Promise
}

getGreeting().then(message => {
  console.log(message); // Output: Hello Async!
});

// Chapter 8 - Solution 15
// Assuming delay function exists:
// function delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function waitAndLog() {
  console.log("Starting wait...");
  await delay(1000); // Pauses here until the promise resolves
  console.log("Waited 1 second");
}

waitAndLog();

// Chapter 8 - Solution 16
// Helper functions returning promises (or could be inline await)
function stepA() { return Promise.resolve("A"); }
function stepB(val) { return Promise.resolve(val + "B"); }
function stepC(val) { return Promise.resolve(val + "C"); }

async function runSequence() {
  try {
    console.log("Starting async sequence...");
    const result1 = await stepA();
    console.log("After step A:", result1);
    const result2 = await stepB(result1);
    console.log("After step B:", result2);
    const finalResult = await stepC(result2);
    console.log("Final async result:", finalResult); // Output: Final async result: ABC
  } catch (error) {
    console.error("Async sequence error:", error);
  }
}

runSequence();

// Chapter 8 - Solution 17
// Assuming failurePromise exists from Exercise 6
// const failurePromise = new Promise((res, rej) => setTimeout(() => rej(new Error("Failed!")), 1500));

async function handleFailureAsync() {
  console.log("Trying operation that will fail...");
  try {
    const result = await failurePromise; // await will throw the rejection reason
    console.log("Success (won't happen):", result);
  } catch (error) {
    console.error("Caught error with async/await:", error.message); // Output after 1.5s: Caught error with async/await: Failed!
  } finally {
      console.log("Async failure handling finished.");
  }
}

handleFailureAsync();

// Chapter 8 - Solution 18
// Assuming delay function exists that resolves with a value, e.g.:
function delayWithValue(ms, value) { return new Promise(resolve => setTimeout(() => resolve(value), ms)); }

async function runParallel() {
  console.log("Running promises in parallel...");
  try {
    const results = await Promise.all([
      delayWithValue(400, "Result A"),
      delayWithValue(600, "Result B")
    ]);
    console.log("Parallel results:", results); // Output after ~600ms: Parallel results: [ 'Result A', 'Result B' ]
  } catch (error) {
    console.error("Parallel error:", error);
  }
}

runParallel();

// Chapter 8 - Solution 19
async function simpleAwait() {
    const x = await Promise.resolve(10); // Await unwraps the resolved value
    console.log("Value of x:", x); // Output: Value of x: 10
}
simpleAwait();

// Chapter 8 - Solution 20
const todoUrl = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(todoUrl)
  .then(response => {
    console.log("Fetch response received (raw):", response);
    // Basic check - a real app might need more detail
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Returns a promise
  })
  .then(todoData => {
    console.log("Todo data:", todoData);
  })
  .catch(error => {
    console.error("Fetch failed:", error.message);
  });

// Chapter 8 - Solution 21
const todoUrlAsync = 'https://jsonplaceholder.typicode.com/todos/1';

async function fetchTodo() {
  console.log("Fetching todo with async/await...");
  try {
    const response = await fetch(todoUrlAsync);
    console.log("Fetch response received (raw):", response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const todoData = await response.json(); // Wait for JSON parsing
    console.log("Todo data (async):", todoData);
  } catch (error) {
    console.error("Fetch failed (async):", error.message);
  }
}

fetchTodo();

// Chapter 8 - Solution 22
const userUrl = 'https://jsonplaceholder.typicode.com/users/2';

async function fetchSpecificUserData() {
  try {
    const response = await fetch(userUrl);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const userData = await response.json();
    console.log(`User Name: ${userData.name}`);
    console.log(`User Email: ${userData.email}`);
  } catch (error) {
    console.error("Failed to fetch user data:", error.message);
  }
}
fetchSpecificUserData();

// Chapter 8 - Solution 23
const invalidUrl = 'https://jsonplaceholder.typicode.com/invalid-path';

async function fetchInvalidUrl() {
  console.log("Fetching invalid URL...");
  try {
    const response = await fetch(invalidUrl);
    console.log(`Response Status: ${response.status}`); // Will likely be 404
    if (!response.ok) { // This condition will be true
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); // This might fail or succeed depending on 404 response body
    console.log("Data (should not be reached easily):", data);
  } catch (error) {
    console.error("Caught expected fetch error:", error.message); // Should log HTTP error 404
  }
}
fetchInvalidUrl();

// Chapter 8 - Solution 24
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const postPayload = { title: 'async test', userId: 5 };

async function submitPost() {
  console.log("Submitting post...");
  try {
    const response = await fetch(postsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postPayload)
    });
    console.log(`POST Response Status: ${response.status}`); // Should be 201 Created
    if (!response.ok && response.status !== 201) { // Allow 201
       throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const createdData = await response.json();
    console.log("Created Post Data:", createdData);
  } catch (error) {
    console.error("POST request failed:", error.message);
  }
}
submitPost();

// Chapter 8 - Solution 25
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments?postId=1';

async function fetchComments() {
    try {
        const response = await fetch(commentsUrl);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const comments = await response.json(); // comments should be an array
        console.log(`Number of comments for post 1: ${comments.length}`);
    } catch (error) {
        console.error("Failed to fetch comments:", error.message);
    }
}
fetchComments();

// Chapter 8 - Solution 26
const userBaseUrl = 'https://jsonplaceholder.typicode.com';

async function fetchUserAndPosts(userId) {
    try {
        console.log(`Fetching data for user ${userId}...`);
        // Fetch user data
        const userResponse = await fetch(`${userBaseUrl}/users/${userId}`);
        if (!userResponse.ok) throw new Error(`User fetch failed: ${userResponse.status}`);
        const userData = await userResponse.json();
        console.log(`User Name: ${userData.name}`);

        // Fetch user posts
        const postsResponse = await fetch(`${userBaseUrl}/posts?userId=${userId}`);
        if (!postsResponse.ok) throw new Error(`Posts fetch failed: ${postsResponse.status}`);
        const postsData = await postsResponse.json();

        console.log(`Posts by ${userData.name}:`);
        postsData.forEach(post => {
            console.log(`- ${post.title}`);
        });

    } catch (error) {
        console.error("Error fetching user data or posts:", error.message);
    }
}

fetchUserAndPosts(3);

// Chapter 8 - Solution 27
const userBaseUrl = 'https://jsonplaceholder.typicode.com';
const userIds = [1, 2, 3];

async function fetchMultipleUsers() {
    console.log("Fetching multiple users concurrently...");
    try {
        // Create an array of fetch promises
        const fetchPromises = userIds.map(id =>
            fetch(`${userBaseUrl}/users/${id}`).then(response => {
                if (!response.ok) throw new Error(`HTTP Error ${response.status} for user ${id}`);
                return response.json(); // Need to parse JSON here
            })
        );

        // Wait for all promises to resolve
        const usersData = await Promise.all(fetchPromises);

        console.log("Fetched Users:");
        usersData.forEach(user => {
            console.log(`- ${user.name}`);
        });

    } catch (error) {
        console.error("Error fetching multiple users:", error.message);
    }
}

fetchMultipleUsers();

// Chapter 8 - Solution 28
function riskyOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("OK");
            } else {
                reject(new Error("Simulated Error"));
            }
        }, 1000);
    });
}

async function runRisky() {
    console.log("Running risky operation...");
    try {
        const result = await riskyOperation();
        console.log("Risky operation succeeded:", result);
    } catch (error) {
        console.error("Risky operation failed:", error.message);
    }
}

runRisky(); // Run multiple times to see both outcomes

// Chapter 8 - Solution 29
function delayLog(ms, message) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve(); // Resolve void to signal completion
        }, ms);
    });
}

console.log("Start");
delayLog(500, "A")
  .then(() => delayLog(500, "B")) // Chain the next delay/log
  .catch(err => console.error("Error:", err));

// Chapter 8 - Solution 30
// Assuming delayLog function from Exercise 29 exists

async function runLogsAsync() {
    console.log("Start (async)");
    try {
        await delayLog(500, "A");
        await delayLog(500, "B");
    } catch (err) {
        console.error("Error (async):", err);
    }
}

runLogsAsync();

// Chapter 8 - Solution 31
const todoBaseUrl = 'https://jsonplaceholder.typicode.com/todos';

async function fetchTwoTodos() {
    console.log("Fetching todos 1 and 2 concurrently...");
    try {
        const fetchPromises = [
            fetch(`${todoBaseUrl}/1`).then(res => res.ok ? res.json() : Promise.reject(`Todo 1 Error: ${res.status}`)),
            fetch(`${todoBaseUrl}/2`).then(res => res.ok ? res.json() : Promise.reject(`Todo 2 Error: ${res.status}`))
        ];
        const [todo1, todo2] = await Promise.all(fetchPromises); // Destructure results array

        console.log(`Todo 1 Title: ${todo1.title}`);
        console.log(`Todo 2 Title: ${todo2.title}`);
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
}
fetchTwoTodos();

// Chapter 8 - Solution 32
const p = new Promise(resolve => setTimeout(() => {
    console.log("Promise p resolved");
    resolve("Done");
}, 1000));

async function awaitTwice() {
    console.time("awaitTwice"); // Start timer
    console.log("Waiting for p (1st time)...");
    await p;
    console.log("Waiting for p (2nd time)...");
    await p; // Awaits the *same* already resolved promise
    console.log("Finished awaiting twice.");
    console.timeEnd("awaitTwice"); // End timer
}

awaitTwice();
// Approx time: Slightly over 1 second.

// Chapter 8 - Solution 33
const user4Url = 'https://jsonplaceholder.typicode.com/users/4';

async function getUser4Name() {
    try {
        const response = await fetch(user4Url);
        if (!response.ok) {
            // Throw error to be caught below
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const userData = await response.json();
        return userData.name; // Return name on success
    } catch (error) {
        console.error("getUser4Name failed:", error.message);
        return null; // Return null on failure
    }
}

// Call the async function and handle its returned promise
getUser4Name()
    .then(name => {
        if (name) {
            console.log("Fetched User 4 Name:", name);
        } else {
            console.log("Could not fetch User 4 name.");
        }
    });

// Chapter 8 - Solution 34
function getUser(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id: id, name: 'User' + id }), 500);
    });
}
function getOrders(user) {
    console.log(`Getting orders for ${user.name}`);
    return new Promise(resolve => {
        setTimeout(() => resolve([`${user.name}-Order1`, `${user.name}-Order2`]), 300);
    });
}

console.log("Fetching user 5 and orders (.then)...");
getUser(5)
  .then(user => { // Receive user object
      console.log("Got user:", user);
      return getOrders(user); // Return the promise from getOrders
  })
  .then(orders => { // Receive orders array
      console.log("Got orders:", orders);
  })
  .catch(err => console.error("Error:", err));

// Chapter 8 - Solution 35
// Assuming getUser and getOrders functions exist from Exercise 34

async function fetchUserAndOrdersAsync(userId) {
    console.log(`Fetching user ${userId} and orders (async)...`);
    try {
        const user = await getUser(userId);
        console.log("Got user (async):", user);
        const orders = await getOrders(user);
        console.log("Got orders (async):", orders);
    } catch (err) {
        console.error("Error (async):", err);
    }
}

fetchUserAndOrdersAsync(5);

// Chapter 8 - Solution 36
const post1Url = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(post1Url)
    .then(response => {
        console.log("Response received.");
        // Access headers using the headers property (a Headers object)
        const contentType = response.headers.get('Content-Type');
        console.log(`Content-Type header: ${contentType}`); // e.g., application/json; charset=utf-8
        // We don't need response.json() if only interested in headers
    })
    .catch(error => {
        console.error("Fetch headers failed:", error.message);
    });

// Chapter 8 - Solution 37
const user5Url = 'https://jsonplaceholder.typicode.com/users/5';

async function findChelsey() {
    try {
        const response = await fetch(user5Url);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const user = await response.json();

        if (user.name === "Chelsey Dietrich") {
            console.log("Found Chelsey!");
        } else {
            console.log(`User is not Chelsey, found ${user.name}`);
        }
    } catch (error) {
        console.error("Error finding user:", error.message);
    }
}
findChelsey();

// Chapter 8 - Solution 38
function delayMsg(ms, msg) { return new Promise(res => setTimeout(() => { console.log(msg); res(); }, ms)); }

async function sequentialDelays() {
    console.log("Starting sequential delays...");
    await delayMsg(100, "100ms done");
    await delayMsg(200, "200ms done (after previous)");
    await delayMsg(300, "300ms done (after previous)");
    console.log("All delays finished.");
}
sequentialDelays();

// Chapter 8 - Solution 39
async function handleImmediateReject() {
    const rejectPromise = Promise.reject(new Error("Immediate Reject"));
    try {
        console.log("Awaiting immediate rejection...");
        await rejectPromise;
        console.log("This line will not be reached.");
    } catch (error) {
        console.error("Caught immediate rejection:", error.message);
    }
}
handleImmediateReject();

// Chapter 8 - Solution 40
const postBaseUrl = 'https://jsonplaceholder.typicode.com/posts';

async function fetchTwoPosts() {
    console.log("Fetching posts 1 and 2 concurrently...");
    try {
        const fetchPromises = [
            fetch(`${postBaseUrl}/1`).then(res => res.ok ? res.json() : Promise.reject(`Post 1 Error: ${res.status}`)),
            fetch(`${postBaseUrl}/2`).then(res => res.ok ? res.json() : Promise.reject(`Post 2 Error: ${res.status}`))
        ];
        const [post1, post2] = await Promise.all(fetchPromises);

        console.log(`Post 1 Title: ${post1.title}`);
        console.log(`Post 2 Title: ${post2.title}`);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}
fetchTwoPosts();

// Chapter 8 - Solution 41
function saveSettings(settings) {
    console.log("Saving settings:", settings);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Settings saved successfully.");
            } else {
                reject(new Error("Failed to save settings."));
            }
        }, 500);
    });
}

async function trySave() {
    const mySettings = { theme: "dark" };
    try {
        const result = await saveSettings(mySettings);
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}
trySave();

// Chapter 8 - Solution 42
const usersUrl = 'https://jsonplaceholder.typicode.com/users';

async function getAllUsernames() {
    try {
        const response = await fetch(usersUrl);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const users = await response.json(); // users is an array of user objects

        // Use map on the resulting array
        const usernames = users.map(user => user.username);

        console.log("Usernames:", usernames);
    } catch (error) {
        console.error("Failed to get usernames:", error.message);
    }
}
getAllUsernames();

// Chapter 8 - Solution 43
const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

async function getCompletedTodos() {
    try {
        const response = await fetch(todosUrl);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const todos = await response.json(); // todos is an array

        // Use filter on the resulting array
        const completedTodos = todos.filter(todo => todo.completed === true);
        // Or shorter: const completedTodos = todos.filter(todo => todo.completed);

        console.log("Completed Todos:", completedTodos);
        console.log(`Found ${completedTodos.length} completed todos.`);
    } catch (error) {
        console.error("Failed to get todos:", error.message);
    }
}
getCompletedTodos();

// Chapter 8 - Solution 44
const albumsUrl = 'https://jsonplaceholder.typicode.com/albums';

async function countUniqueUserIdsInAlbums() {
    try {
        const response = await fetch(albumsUrl);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const albums = await response.json(); // albums is an array

        // Use reduce to count unique userIds
        const uniqueUserIds = albums.reduce((accumulatorSet, album) => {
            accumulatorSet.add(album.userId); // Add userId to a Set (automatically handles uniqueness)
            return accumulatorSet;
        }, new Set()); // Initial value is an empty Set

        console.log(`Number of unique user IDs: ${uniqueUserIds.size}`);

    } catch (error) {
        console.error("Failed to process albums:", error.message);
    }
}
countUniqueUserIdsInAlbums();

// Chapter 8 - Solution 45
async function funcA() {
    await new Promise(res => setTimeout(res, 500));
    return "A";
}
async function funcB() {
    await new Promise(res => setTimeout(res, 300));
    return "B";
}

async function runBoth() {
    console.log("Running funcA and funcB concurrently...");
    console.time("runBoth");
    try {
        // IMPORTANT: Call the functions *before* Promise.all to start them concurrently
        const promiseA = funcA();
        const promiseB = funcB();

        const [resultA, resultB] = await Promise.all([promiseA, promiseB]);
        console.log("Results:", resultA, resultB); // Output: Results: A B
    } catch (error) {
        console.error("Error running both:", error);
    }
    console.timeEnd("runBoth"); // Approx 500ms (waits for the longest)
}
runBoth();

// Chapter 8 - Solution 46
const user999Url = 'https://jsonplaceholder.typicode.com/users/999';

async function checkUser999() {
    try {
        const response = await fetch(user999Url);
        if (response.status === 404) {
            console.log("User 999 not found.");
            return; // Exit function after handling 404
        }
        // If not 404, check if it was still some other error
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        // If OK (though unlikely for 999)
        const userData = await response.json();
        console.log("Found unexpected user data:", userData);

    } catch (error) {
        // Catches network errors or the thrown HTTP error
        console.error("An error occurred:", error.message);
    }
}
checkUser999();

// Chapter 8 - Solution 47
const timerPromise = new Promise(resolve => setTimeout(resolve, 2000));

async function waitTimer() {
    console.log("Start");
    await timerPromise;
    console.log("End (after 2 seconds)");
}
waitTimer();

// Chapter 8 - Solution 48
const post1TextUrl = 'https://jsonplaceholder.typicode.com/posts/1';

async function fetchPostAsText() {
    try {
        const response = await fetch(post1TextUrl);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const postText = await response.text(); // Use .text() instead of .json()
        console.log("Post Text Content:");
        console.log(postText); // Logs the raw JSON string
    } catch (error) {
        console.error("Failed to fetch post text:", error.message);
    }
}
fetchPostAsText();

// Chapter 8 - Solution 49
function createTimeoutPromise(ms, value) {
    return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

async function raceTimeouts() {
    console.log("Racing timeouts...");
    try {
        const winner = await Promise.race([
            createTimeoutPromise(500, "500ms Wins"),
            createTimeoutPromise(700, "700ms Wins")
        ]);
        console.log("Race winner:", winner); // Output: Race winner: 500ms Wins
    } catch (error) {
        console.error("Race error:", error);
    }
}
raceTimeouts();

// Chapter 8 - Solution 50
const user1Url = 'https://jsonplaceholder.typicode.com/users/1';

async function fetchUserWithFinally() {
    try {
        console.log("Fetching user 1...");
        const response = await fetch(user1Url);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const user = await response.json();
        console.log(`User name: ${user.name}`); // Logged on success
    } catch (error) {
        console.error("Fetch user failed:", error.message);
    } finally {
        // This runs whether the try block succeeded or the catch block ran
        console.log("User fetch attempt complete.");
    }
}
fetchUserWithFinally();

