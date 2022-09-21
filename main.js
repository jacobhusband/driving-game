var $car = document.querySelector('.car-container');
var $image = $car.firstElementChild;
var degrees = 0;
var currentX = 0;
var currentY = 0;
var engine = false;
var id;

document.addEventListener('keydown', manipulateCar);
document.addEventListener('keypress', turnCarOnOrOff);

function manipulateCar(event) {
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
  changeCar();
}

function turnCarOnOrOff(event) {
  if (event.key === ' ' && !engine) {
    id = setInterval(increasePos, 16);
    engine = true;
  } else if (event.key === ' ' && engine) {
    clearInterval(id);
    engine = false;
  }
}

function increasePos() {
  if (degrees === -90) {
    currentY -= 3;
  } else if (degrees === 180) {
    currentX -= 3;
  } else if (degrees === 90) {
    currentY += 3;
  } else if (degrees === 0) {
    currentX += 3;
  }
  changeCar();
}

function changeCar() {
  $car.style.transform = `translate(${currentX}px, ${currentY}px)`;
  $image.style.transform = `rotate(${degrees}deg)`;
}
