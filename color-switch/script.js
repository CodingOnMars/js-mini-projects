const btn = document.querySelector('.btn');
const idHex = document.getElementById('hex');
const idRgb = document.getElementById('rgb');
const idHsl = document.getElementById('hsl');
const hexSquares = document.querySelectorAll('.square-hex');
const rgbSquares = document.querySelectorAll('.square-rgb');
const hslSquares = document.querySelectorAll('.square-hsl');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener('click', () => {
  // Generate random hex color
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[hexRandomNumber()];
  }
  idHex.textContent = hexColor;
  hexSquares.forEach((square) => {
    square.style.backgroundColor = hexColor;
  });
  // Generate random rgb color
  let rgbColor = '';
  rgbColor += getRandomRgb();
  idRgb.textContent = rgbColor;
  rgbSquares.forEach((square) => {
    square.style.backgroundColor = rgbColor;
  });
  // Generate random hsl color
  let hslColor = '';
  hslColor += getRandomHsl();
  idHsl.textContent = hslColor;
  hslSquares.forEach((square) => {
    square.style.backgroundColor = hslColor;
  });
});

const hexRandomNumber = () => Math.floor(Math.random() * hex.length);

const randomNumberBetween = (min, max) =>
  min + Math.floor(Math.random() * (max - min + 1));

const getRandomRgb = () => {
  const r = randomNumberBetween(0, 255);
  const g = randomNumberBetween(0, 255);
  const b = randomNumberBetween(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const getRandomHsl = () => {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * (100 + 1)) + '%';
  const l = Math.floor(Math.random() * (100 + 1)) + '%';
  return `hsl(${h}, ${s}, ${l})`;
};
