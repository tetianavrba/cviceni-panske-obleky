console.log('funguju');

let whiteButton = document.querySelector('.color-box__white');
let blackButton = document.querySelector('.color-box__black');
let redButton = document.querySelector('.color-box__red');
let skyblueButton = document.querySelector('.color-box__skyblue');

let svgElement = document.getElementById('product-image');

// Přidavam posluchače událostí pro každé tlačítko s barvou
whiteButton.addEventListener('click', function () {
  svgElement.style.fill = 'white';
});

blackButton.addEventListener('click', function () {
  svgElement.style.fill = 'black';
});

redButton.addEventListener('click', function () {
  svgElement.style.fill = 'red';
});

skyblueButton.addEventListener('click', function () {
  svgElement.style.fill = 'skyblue';
});
