const generateColor = () => {
  const lettersNumbers = '0123456789ABCDEF';
  let colorHexa = '#';
  for (let index = 0; index < 6; index += 1) {
    colorHexa += lettersNumbers.charAt(Math.floor(Math.random() * lettersNumbers.length));
  }
  return colorHexa;
};

const buttonRandomColor = document.querySelector('#button-random-color');
buttonRandomColor.addEventListener('click', () => {
  const colors = document.querySelectorAll('.color');

  for (let index = 0; index < colors.length; index += 1) {
    colors[0].style.backgroundColor = 'black';
    colors[index].style.backgroundColor = generateColor();
    localStorage.setItem(`color_${index}`, colors[index].style.backgroundColor);
  }
});
