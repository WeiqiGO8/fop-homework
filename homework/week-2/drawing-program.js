frameRate(60);
let lastMouseX = 0;
let lastMouseY = 0;
let mouseIsActive = false;

background(255, 255, 255);
// function draw() {
//   strokeWeight(4);
//   stroke((mouseX / width) * 255, 0, mouseY * 255);
//   line(lastX, lastY, mouseX, mouseY);

//   lastX = mouseX;
//   lastY = mouseY;
// }

function draw() {
  strokeWeight(4);
  if (mouseIsPressed) {
    if (mouseIsActive) {
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
  console.log("The mouse button was pressed");
}

function mouseReleased() {
  console.log("The mouse button was released");
}

function mouseClicked() {
  console.log("The mouse button was clicked");
}
