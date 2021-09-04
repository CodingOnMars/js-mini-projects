const btn = document.querySelector('.btn');
const idHex = document.getElementById('hex');
const idRgb = document.getElementById('rgb');
const idHsl = document.getElementById('hsl');
const hexSquares = document.querySelectorAll('.square-hex');
const rgbSquares = document.querySelectorAll('.square-rgb');
const hslSquares = document.querySelectorAll('.square-hsl');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

btn.addEventListener('click', () => {
  let hexColor = '';
  hexColor += getRandomHex();
  idHex.textContent = hexColor;
  hexSquares.forEach((square) => {
    square.style.backgroundColor = hexColor;
  });

  let rgbColor = '';
  rgbColor += getRandomRgb();
  idRgb.textContent = rgbColor;
  rgbSquares.forEach((square) => {
    square.style.backgroundColor = rgbColor;
  });

  let hslColor = '';
  hslColor += getRandomHsl();
  idHsl.textContent = hslColor;
  hslSquares.forEach((square) => {
    square.style.backgroundColor = hslColor;
  });
});

// Generate random hex color
const getRandomHex = () => {
  const hexRandomNumber = () => Math.floor(Math.random() * hex.length);
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[hexRandomNumber()];
  }
  return color;
};

// Generate random rgb color
const getRandomRgb = () => {
  const randomNumberBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomNumberBetween(0, 255);
  const g = randomNumberBetween(0, 255);
  const b = randomNumberBetween(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
};

// Generate random hsl color
const getRandomHsl = () => {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * (100 + 1)) + '%';
  const l = Math.floor(Math.random() * (100 + 1)) + '%';
  return `hsl(${h}, ${s}, ${l})`;
};
