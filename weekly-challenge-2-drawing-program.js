frameRate(60);

let lastMouseX = 0;
let lastMouseY = 0;
let mouseIsActive = false;

//background color of the canvas
background(0, 0, 0);

function draw() {
  strokeWeight(4);
  //if the mouse is pressed a line will be created.
  //the line have a Start point & a End point.
  //true = you are drawing. False = you are not drawing.
  if (mouseIsPressed) {
    if (mouseIsActive) {
      //gives the line a color
      stroke(lastMouseX, 150, lastMouseY);
      line(lastMouseX, lastMouseY, mouseX, mouseY);
    }

    lastMouseX = mouseX;
    lastMouseY = mouseY;
    mouseIsActive = true;
  } else {
    mouseIsActive = false;
  }
}
