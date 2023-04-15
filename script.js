const generateColor = () => {
  const lettersNumbers = '0123456789ABCDEF';
  let colorHexa = '#';
  for (let i = 0; i < 6; i += 1) {
    colorHexa += lettersNumbers.charAt(Math.floor(Math.random() * lettersNumbers.length));
  }
  return colorHexa;
};

const buttonRandomColor = document.querySelector('#button-random-color');
buttonRandomColor.addEventListener('click', () => {
  const colors = document.querySelectorAll('.color');

  for (let i = 0; i < colors.length; i += 1) {
    colors[0].style.backgroundColor = 'black';
    colors[i].style.backgroundColor = generateColor();
  }
});
