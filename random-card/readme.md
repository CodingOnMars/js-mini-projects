# Random business card

This project uses the following APIs:

- [Random user API](https://randomuser.me);
- [Corporate Bullshit/Buzzword Generator API](https://github.com/sameerkumar18/corporate-bs-generator-api).

The main purpose was to practice work with:

- Third party APIs;
- AJAX, JSON, promises, async/await;
- Arrays, objects, destructuring;
- ES6 modules.

When you click 'Generate data' button, default data will be replaced with random values.

##### Company name

To generate random company name:

- getNames helper function returns an object with an array of hardcoded names (first or last);
- pickRandomName helper function accepts an array with names and returns a random name from the array;
- generateRandomName function:

  - uses getNames to get two objects with arrays of first and last names;
  - passes these arrays to pickRandomName;
  - returns two random names combined via template literals.

##### User data and company slogan

To generate random data Random user and Corporate BS Generator APIs are used. I assigned API URLs to separate variables. The main reason - there are only two URLs in this project. I think more optimal solution to work with multiple urls would be to assign them to one variable, like const urls = [] and use array methods like map() to work with them.

- getData function uses browser fetch method to get server requests;
- Async/await syntax to work with promises. Try/catch for error handling;
- Since I work with multiple APIs and need to wait for multiple promises, I wrap them in Promises.all();
- getData functions waits to receive data from server, receives JSON with data, destructures it and then return specific values;
- From Random User it returns phone, email, photo, login (that I use as a social nickname in the business card) and name (first and last);
- From Corporate BS Generator it returns phrase.

##### Display random data

displayData function receives data and adds it to elements from DOM. To display company name it uses generateRandomName function.

showData waits till getData receives and return data, then passes it to displayData.

##### CSS Loading spinner

- Since it may take some time to receive data from server, I added spinner loading icon;
- It appears each time when new data requested from server and hides after it was received;
- With the help of CSS animations (@keyframes spin) static svg icon gets nice spinning animation.

##### Error message

- I also implemented an error message that should appear in case if data could not be received from server.
- If there is an error with getting data, catch block in getData logs an error, hides spinning circle, shows an error and hides it after 7 sec.
