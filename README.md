# Mini JavaScript projects

Simple projects to improve my knowledge of JavaScript.

[Click to open a page with all projects](https://codingonmars.github.io/js-mini-projects/index.html).

## 1. Time traveler year counter

[Click to open live version](https://codingonmars.github.io/js-mini-projects/time-traveler-counter/index.html).

_Inspired by classic 80s movies_

The main purpose was to practice OOP principles of multiple instances.

- There are two active counters, but there can be added thousands more and all of them will be independent from each other;
- To achieve that and to avoid adding new functionality for each new counter, I use one class 'Counter'. This class sets functionality for all counters;
- You can increase or decrease the year value, as well as reset the counter to zero.
  The value cannot be decreased to negative;
- To select elements from DOM a helper function getElement is used;
- As a bonus, I added a separate block that shows current year, updating it dynamically, eliminating the need to change it manually. Such functionality can be useful for website footers with copyright info.

## 2. Random color palette generator

[Click to open live version](https://codingonmars.github.io/js-mini-projects/color-switch/index.html).

The main purpose was ~~to have fun with Math.random()~~ to create a random color generator that uses different color formats.

- There are three color formats: HEX, RGB and HSL;
- When you click "Click me" button, each color formats generates randomly and applies as a background color to squares (two squares per color format);
- Randomly generated value is displayed as a string with HEX, RGB and HSL respectively.

##### Random HEX generator. To generate HEX color:

- I use combination of hex array and for loop;
- Hex array contains hardcoded values that represent hex integers;
- For loop generates 6 HEX numbers;
- This combination allows to avoid getting HEX numbers with less than 6 digits.

##### Random RGB generator. To generate RGB color:

- In RGB each main color can range from 0 to 255. The goal is to randomize main color and stay within that range;
- A helper function randomNumberBetween allows to get a random number within range;
- This function applies to each const (r, g, b) with specifeid range from 0 to 255;
- Result is returned and added together using template literals.

##### Random HSL generator. To generate HSL color:

- HSL stands for Hue, saturation, light. Hue value ranges from 0 to 359. Saruration and light - from 0 to 100%;
- Math.random() generates random values for each const (h, s, l). For saturation (s) and light (l) 100 + 1 is used because their value can be 100%.

## 3. Random business card

[Click to open live version](https://codingonmars.github.io/js-mini-projects/random-card/index.html).

The main purpose was to practice work with:

- Third party APIs;
- AJAX, JSON, Promises, async/await;
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
