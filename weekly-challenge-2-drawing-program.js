frameRate(60);
// background(255, 255, 255);
background(0, 0, 0);
let lastMouseX = 0;
let lastMouseY = 0;
let mouseIsActive = false;

let x = 160;
let y = 200;

//buttons to change between line and shape to draw
function lineTool() {
  noStroke();
  fill(255, 255, 255);
  rect(x - 110, y + 300, 100, 100);

  stroke(0, 0, 0);
  strokeWeight(4);
  line(x - 90, y + 350, 130, 550);
}

function squareToolOne() {
  noStroke();
  fill(255, 255, 255);
  rect(x, y + 300, 100, 100);

  fill(0, 0, 0);
  rect(x + 10, y + 310, 80, 80);
}

function squareToolTwo() {
  noStroke();
  fill(255, 255, 255);
  rect(x + 110, y + 300, 100, 100);

  fill(0, 0, 0);
  rect(x + 120, y + 340, 80, 20);
}

function circleTool() {
  noStroke();
  fill(255, 255, 255);
  rect(x + 220, y + 300, 100, 100);

  fill(0, 0, 0);
  ellipse(x + 270, y + 350, 60);
}

function clearCanvas() {
  noStroke();
  fill(255, 255, 255);
  rect(x + 330, y + 300, 100, 100);

  fill(0, 0, 0);
  strokeWeight();
  text("clear canvas", x + 345, y + 355);
}

lineTool();
squareToolOne();
squareToolTwo();
circleTool();
clearCanvas();

function draw() {
  strokeWeight(4);
  if (mouseIsPressed) {
    if (mouseIsActive) {
      stroke(lastMouseX, 100, lastMouseY);
      line(lastMouseX, lastMouseY, mouseX, mouseY);
    }

    lastMouseX = mouseX;
    lastMouseY = mouseY;
    mouseIsActive = true;
  } else {
    mouseIsActive = false;
  }
}

function mousePressed() {
  console.log("The mouse was pressed");
}

function mouseReleased() {
  console.log("The mouse was released");
}

function mouseClicked() {
  console.log("The mouse was clicked");
}
