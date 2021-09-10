# Random color palette generator

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
