frameRate(60);
let lastX = mouseX;
let lastY = mouseY;

background(255, 255, 255);
function draw() {
  strokeWeight(4);
  stroke((mouseX / width) * 255, 0, mouseY * 255);
  line(lastX, lastY, mouseX, mouseY);

  lastX = mouseX;
  lastY = mouseY;
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
