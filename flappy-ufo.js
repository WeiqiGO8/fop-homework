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

  //character

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

  //obstacle 1 - a barn
  fill(200, 100, 100);
  rect(0, 0, 100, 60);
  //obstacle 2
  //obstacle 3
  //obstacle 4
  pop();
}

let vehicleY = 100;
let velocity = 2;
let acceleration = 0.2;
let gameIsRunning = true;

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
