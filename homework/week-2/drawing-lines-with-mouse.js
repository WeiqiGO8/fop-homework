frameRate(60);
background(255, 255, 255);
let lastMouseX = mouseX;
let lastMouseY = mouseY;

function draw() {
  background(255, 255, 255, 25);
  stroke(24, 92, 60);
  strokeWeight(4);
  line(lastMouseX, lastMouseY, mouseX, mouseY);
  line(width - lastMouseX, width - lastMouseY, width - mouseX, width - mouseY);
  lastMouseX = mouseX;
  lastMouseY = mouseY;
}
