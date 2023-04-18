const generateColor = () => {
  const lettersNumbers = '0123456789ABCDEF';
  let colorHexa = '#';
  for (let index = 0; index < 6; index += 1) {
    colorHexa += lettersNumbers.charAt(Math.floor(Math.random() * lettersNumbers.length));
  }
  return colorHexa;
};

const generateColorPalette = () => {
  const colors = document.querySelectorAll('.color');
  const colorPalette = [];
  for (let index = 0; index < 4; index += 1) {
    const color = generateColor();
    colorPalette.push(color);
    colors[index].style.backgroundColor = generateColor();
    colors[0].style.backgroundColor = 'black';
  }
  localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
};
const buttonRandomColor = document.querySelector('#button-random-color');
buttonRandomColor.addEventListener('click', generateColorPalette);

window.onload = () => {
  const storedColorPalette = localStorage.getItem('colorPalette');
  if (storedColorPalette) {
    const colors = document.querySelectorAll('.color');
    const colorPalette = JSON.parse(storedColorPalette);
    for (let index = 0; index < colors.length; index += 1) {
      colors[index].style.backgroundColor = colorPalette[index];
      colors[0].style.backgroundColor = 'black';
    }
  } else {
    generateColorPalette();
  }
};

const pixelBoard = document.getElementById('pixel-board');
const createPixels = () => {
  for (let lines = 0; lines < 5; lines += 1) {
    const line = document.createElement('div');
    line.className = 'lines';
    for (let cell = 0; cell < 5; cell += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.id = 'cell';
      pixelBoard.appendChild(line);
      line.appendChild(pixel);
    }
  }
};
createPixels();

const colorPalette = document.getElementById('color-palette');
const selectColor = (event) => {
  const colors = colorPalette.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
  const selectedColor = event.target;
  selectedColor.classList.add('selected');
};
colorPalette.addEventListener('click', selectColor);

const colors = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');
const selectColors = (event) => {
  colors.forEach((colorHexa) => colorHexa.classList.remove('selected'));
  event.target.classList.add('selected');
  localStorage.setItem('selectedColor', event.target.style.backgroundColor);
};
const fillPixel = (event) => {
  if (event.target.classList.contains('pixel')) {
    // eslint-disable-next-line no-param-reassign
    event.target.style.backgroundColor = localStorage.getItem('selectedColor');
  }
};
colors.forEach((colorHexa) => colorHexa.addEventListener('click', selectColors));
pixels.forEach((pixel) => pixel.addEventListener('click', fillPixel));
const storedColor = localStorage.getItem('selectedColor');
if (storedColor) {
  colors.forEach((colorHexa) => {
    if (colorHexa.style.backgroundColor === storedColor) {
      colorHexa.classList.add('selected');
    }
  });
}
