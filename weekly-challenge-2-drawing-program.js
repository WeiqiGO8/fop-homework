frameRate(60);
background(0, 0, 0);

let lastMouseX = 0;
let lastMouseY = 0;
let mouseIsActive = false;

let brushShape = "line";
let brushColor = "mouseColoring";

//buttons to change brush color
function mouseColor(x, y) {
  noStroke();
  fill(155, 20, 230);
  rect(x + 350, y + 50, 40, 40);
}

function redColor(x, y) {
  noStroke();
  fill(255, 0, 0);
  rect(x + 350, y + 100, 40, 40);
}

function greenColor(x, y) {
  noStroke();
  fill(0, 255, 0);
  rect(x + 350, y + 150, 40, 40);
}

function blueColor(x, y) {
  noStroke();
  fill(0, 0, 255);
  rect(x + 350, y + 200, 40, 40);
}

function whiteColor(x, y) {
  noStroke();
  fill(255, 255, 255);
  rect(x + 350, y + 250, 40, 40);
}

//buttons to change brush shape
function lineTool(x, y) {
  noStroke();
  fill(255, 255, 255);
  rect(x - 110, y + 300, 100, 100);

  stroke(0, 0, 0);
  strokeWeight(4);
  line(x - 100, y + 350, 180, 550);
}

function squareTool(x, y) {
  noStroke();
  fill(255, 255, 255);
  rect(x, y + 300, 100, 100);

  fill(0, 0, 0);
  rect(x + 10, y + 310, 80, 80);
}

function circleTool(x, y) {
  noStroke();
  fill(255, 255, 255);
  rect(x + 110, y + 300, 100, 100);

  fill(0, 0, 0);
  ellipse(x + 160, y + 350, 60);
}

function clearCanvas(x, y) {
  noStroke();
  fill(255, 255, 255);
  rect(x + 220, y + 300, 100, 100);

  fill(0, 0, 0);
  strokeWeight();
  text("Clear Canvas", x + 235, y + 355);
}

function mouseClicked() {
  console.log("The mouse was clicked");
  if (mouseX > 90 && mouseX < 90 + 100 && mouseY > 500 && mouseY < 500 + 100) {
    console.log("you are drawing a line!");
    brushShape = "line";
  } else if (
    mouseX > 200 &&
    mouseX < 200 + 100 &&
    mouseY > 500 &&
    mouseY < 500 + 100
  ) {
    console.log("you are drawing a square!");
    brushShape = "square";
  } else if (
    mouseX > 310 &&
    mouseX < 310 + 100 &&
    mouseY > 500 &&
    mouseY < 500 + 100
  ) {
    console.log("you are drawing a circle!");
    brushShape = "circle";
  } else if (
    mouseX > 420 &&
    mouseX < 420 + 100 &&
    mouseY > 500 &&
    mouseY < 500 + 100
  ) {
    console.log("you have cleared the canvas");
    brushShape = "cleared";
  } else if (
    mouseX > 550 &&
    mouseX < 550 + 40 &&
    mouseY > 250 &&
    mouseY < 250 + 40
  ) {
    console.log("mouse color");
    brushColor = "mouseColoring";
  } else if (
    mouseX > 550 &&
    mouseX < 550 + 40 &&
    mouseY > 300 &&
    mouseY < 300 + 40
  ) {
    console.log("color red");
    brushColor = "redColoring";
  } else if (
    mouseX > 550 &&
    mouseX < 550 + 40 &&
    mouseY > 350 &&
    mouseY < 350 + 40
  ) {
    console.log("color green");
    brushColor = "greenColoring";
  } else if (
    mouseX > 550 &&
    mouseX < 550 + 40 &&
    mouseY > 400 &&
    mouseY < 400 + 40
  ) {
    console.log("color blue");
    brushColor = "blueColoring";
  } else if (
    mouseX > 550 &&
    mouseX < 550 + 40 &&
    mouseY > 450 &&
    mouseY < 450 + 40
  ) {
    console.log("color white");
    brushColor = "whiteColoring";
  }
}

function draw() {
  strokeWeight(4);
  if (mouseIsPressed) {
    if (mouseIsActive) {
      if (brushColor === "mouseColoring") {
        stroke(lastMouseX, 100, lastMouseY);
      } else if (brushColor === "redColoring") {
        stroke(255, 0, 0);
      } else if (brushColor === "greenColoring") {
        stroke(0, 255, 0);
      } else if (brushColor === "blueColoring") {
        stroke(0, 0, 255);
      } else if (brushColor === "whiteColoring") {
        stroke(255, 255, 255);
      }
      if (brushShape === "line") {
        line(lastMouseX, lastMouseY, mouseX, mouseY);
      } else if (brushShape === "square") {
        if (brushColor === "mouseColoring") {
          fill(lastMouseX, 100, lastMouseY);
        } else if (brushColor === "redColoring") {
          fill(255, 0, 0);
        } else if (brushColor === "greenColoring") {
          fill(0, 255, 0);
        } else if (brushColor === "blueColoring") {
          fill(0, 0, 255);
        } else if (brushColor === "whiteColoring") {
          fill(255, 255, 255);
        }

        rect(mouseX, mouseY, 80, 80);
      } else if (brushShape === "circle") {
        if (brushColor === "mouseColoring") {
          fill(lastMouseX, 100, lastMouseY);
        } else if (brushColor === "redColoring") {
          fill(255, 0, 0);
        } else if (brushColor === "greenColoring") {
          fill(0, 255, 0);
        } else if (brushColor === "blueColoring") {
          fill(0, 0, 255);
        } else if (brushColor === "whiteColoring") {
          fill(255, 255, 255);
        }

        ellipse(mouseX, mouseY, 60);
      } else if (brushShape === "cleared") {
        clear();
        background(0, 0, 0);
      }
    }
    lastMouseX = mouseX;
    lastMouseY = mouseY;
    mouseIsActive = true;
  } else {
    mouseIsActive = false;
  }

  lineTool(200, 200);
  squareTool(200, 200);
  circleTool(200, 200);
  clearCanvas(200, 200);
  redColor(200, 200);
  greenColor(200, 200);
  blueColor(200, 200);
  whiteColor(200, 200);
  mouseColor(200, 200);
}

function mousePressed() {
  console.log("The mouse was pressed");
}

function mouseReleased() {
  console.log("The mouse was released");
}
