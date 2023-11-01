console.log('funguji');

const colorButtons = Array.from(document.querySelectorAll('.color-option'));
const shirt = document.querySelector('#product-image');

const shirtColorChange = (e) => {
  const color = getComputedStyle(e.target);
  console.log(color);
  const shirtColor = color.getPropertyValue('background-color');
  shirt.style.fill = shirtColor;
};

colorButtons.forEach((button) =>
  button.addEventListener('click', shirtColorChange),
);
