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
  for (let index = 0; index < 4; index += 1) {
    colors[index].style.backgroundColor = generateColor();
    colors[0].style.backgroundColor = 'black';
  }
};
const buttonRandomColor = document.querySelector('#button-random-color');
buttonRandomColor.addEventListener('click', generateColorPalette);
