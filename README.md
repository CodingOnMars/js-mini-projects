# Mini JavaScript projects

Simple projects to improve my knowledge of JavaScript.

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
