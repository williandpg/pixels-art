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

window.addEventListener('load', () => {
  if (localStorage.getItem('colorPalette')) {
    const colors = document.querySelectorAll('.color');
    const colorPalette = JSON.parse(localStorage.getItem('colorPalette'));
    for (let index = 0; index < colorPalette.length; index += 1) {
      colors[index].style.backgroundColor = colorPalette[index];
      colors[0].style.backgroundColor = 'black';
    }
  }
});

const pixelBoard = document.getElementById('pixel-board');
function createPixels() {
  for (let lines = 0; lines < 5; lines += 1) {
    const line = document.createElement('div');
    line.className = 'lines';
    pixelBoard.appendChild(line);
    for (let cell = 0; cell < 5; cell += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.id = 'cell';
      line.appendChild(pixel);
    }
  }
}
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
