import Snake from "snake.js";

const gridLength = 10;
const gridSize = 30;

function getRandomPositionInGrid() {
  return Math.floor(Math.random() * gridLength);
}

const snake = new Snake(
  getRandomPositionInGrid(),
  getRandomPositionInGrid(),
  gridSize,
  gridLength
);

function setup() {
  createCanvas(400, 400);
  frameRate(10);
}
window.setup = setup;

function drawGrid() {
  push();
  stroke(255, 255, 255);
  fill(0, 0, 0);
  for (let x = 0; x < gridLength; x++) {
    for (let y = 0; y < gridLength; y++) {
      rect(x * gridSize, y * gridSize, gridSize, gridSize);
    }
  }
  pop();
}

function draw() {
  background(0, 0, 0);
  drawGrid();

  snake.update();
  snake.draw();
}
window.draw = draw;

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.direction.turnUp();
  }
  if (keyCode === DOWN_ARROW) {
    snake.direction.turnDown();
  }
  if (keyCode === LEFT_ARROW) {
    snake.direction.turnLeft();
  }
  if (keyCode === RIGHT_ARROW) {
    snake.direction.turnRight();
  }
}
window.keyPressed = keyPressed;
