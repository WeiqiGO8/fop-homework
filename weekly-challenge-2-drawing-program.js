frameRate(60);
// background(255, 255, 255);
background(0, 0, 0);
let lastMouseX = 0;
let lastMouseY = 0;
let mouseIsActive = false;

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
