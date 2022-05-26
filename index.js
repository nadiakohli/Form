const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
];

const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

document.querySelector('.dog-img').src = `images/${images[getRandomNumber(0, 6)]}`;   