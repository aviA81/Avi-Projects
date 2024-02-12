const canvas = document.querySelector('#theCanvas');
const context = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Ant {
  constructor(color) {
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.color = color;
    this.times = getRandomNumber(1, 15);
    this.time = 0;
    this.newX = getRandomNumber(-1, 1);
    this.newY = getRandomNumber(-1, 1);
  }

  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, 3, 5);
  }

  move() {
    if (this.time >= this.times) {
      this.times = getRandomNumber(1, 15);
      this.time = 0;
      this.newX = getRandomNumber(-1, 1);
      this.newY = getRandomNumber(-1, 1);
    }

    if (this.x + this.newX > 0 && this.x + this.newX < canvas.width - 3) {
      this.x += this.newX;
    }

    if (this.y + this.newY > 0 && this.y + this.newY < canvas.height - 5) {
      this.y += this.newY;
    }

    this.time++;
    this.draw();
  }
}

class RandomAnt {
  constructor(color) {
    this.x = getRandomNumber(0, window.innerWidth);
    this.y = getRandomNumber(0, window.innerHeight);
    this.color = color;
    this.times = getRandomNumber(1, 15);
    this.time = 0;
    this.newX = getRandomNumber(-1, 1);
    this.newY = getRandomNumber(-1, 1);
  }

  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, 3, 5);
  }

  move() {
    if (this.time >= this.times) {
      this.times = getRandomNumber(1, 15);
      this.time = 0;
      this.newX = getRandomNumber(-1, 1);
      this.newY = getRandomNumber(-1, 1);
    }

    if (this.x + this.newX > 0 && this.x + this.newX < canvas.width - 3) {
      this.x += this.newX;
    }

    if (this.y + this.newY > 0 && this.y + this.newY < canvas.height - 5) {
      this.y += this.newY;
    }

    this.time++;
    this.draw();
  }
}

const ants = [];
function addAnts(numberOfAnts, antColor) {
  for (let i = 0; i < numberOfAnts; i++) {
    ants.push(new Ant(antColor));
  }
}

function addRandomAnts(numberOfAnts, antColor) {
  for (let i = 0; i < numberOfAnts; i++) {
    ants.push(new RandomAnt(antColor));
  }
}

addAnts(1000, '#000000');

setInterval(() => {
  drawBackground();
  ants.forEach(ant => ant.move());
}, 100);

document.querySelector('#add').addEventListener('click', e => {
  e.preventDefault();
  addAnts(document.querySelector('#number').value, document.querySelector('#color').value);
});

document.querySelector('#addRandom').addEventListener('click', e => {
  e.preventDefault();
  addRandomAnts(document.querySelector('#number').value, document.querySelector('#color').value);
});

const img = new Image();
img.src = 'grass.jpg';

function drawBackground() {
  for (let i = 0; i < canvas.width; i += img.width) {
    for (let j = 0; j < canvas.height; j += img.height) {
      context.drawImage(img, i, j);
    }
  }
}
