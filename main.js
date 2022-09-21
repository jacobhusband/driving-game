var $car = document.querySelector('.car-container');
var degrees = 0;

document.addEventListener('keydown', changeCarDirection);

function changeCarDirection(event) {
  if (event.key === 'w' || event.keyCode === 38) {
    degrees = -90;
  }
  if (event.key === 'a' || event.keyCode === 37) {
    degrees = 180;
  }
  if (event.key === 's' || event.keyCode === 40) {
    degrees = 90;
  }
  if (event.key === 'd' || event.keyCode === 39) {
    degrees = 0;
  }
  turnCar();
}

function turnCar() {
  $car.style.transform = `rotate(${degrees}deg)`;
}
