angleMode(DEGREES);
let vehicleY = 100;
let velocity = 2;
let acceleration = 0.2;
let vehicleTilting = 35;
let vehicleCrashed = 180;
let gameIsRunning = true;

function setup() {
  createCanvas(600, 300);
  background(255, 255, 255);
}

function scenary() {
  push();
  noStroke();

  //the sky
  fill(100, 190, 255);
  rect(0, 0, width, height);

  //the ground
  fill(50, 150, 50);
  rect(0, 200, width, height);
  pop();
}

function vehicle(x, y) {
  push();
  translate(x, y);

  // saucer
  fill(255, 0, 0);
  ellipse(0, 0, 80, 30);

  //Glass dome
  fill(255, 255, 255, 100);
  beginShape();
  vertex(-20, 0);
  bezierVertex(-20, 5, 20, 5, 20, 0);
  bezierVertex(20, -40, -20, -40, -20, 0);
  endShape();
  pop();
}

let obstacleX = 600;

function obstacle(x, y) {
  push();
  translate(x, y);

  //obstacle 1 - a house
  fill(200, 50, 30);
  rect(0, 0, 100, 60);

  //window
  fill(255, 255, 255);
  rect(20, 10, 20, 20);

  //door + handle
  rect(55, 20, 30, 40);
  ellipse(60, 40, 5);
  pop();
}

function draw() {
  scenary();
  obstacle(obstacleX, 150);
  vehicle(100, vehicleY);

  if (gameIsRunning === true) {
    obstacleX += -4;

    if (obstacleX < -100) {
      obstacleX = width;
    }

    vehicleY += velocity;
    velocity += acceleration;

    if (mouseIsPressed) {
      velocity -= 0.4;
    }

    if (vehicleY > 200) {
      gameIsRunning = false;
      console.log("game over");
    }
  }
}
