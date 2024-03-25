//background
//The following 3 lines of code was added by courtesy of Garrit Schaap
function setup() {
  createCanvas(800, 1000);
}

let blackColor = color(0, 0, 0);

let whiteColor = color(255, 255, 255);

let x = 200;
let y = 200;
let width = 200;
let height = 200;

//The following 2 lines of code + closing } was added by courtesy of Garrit Schaap
function draw() {
  background(60, 60, 60);

  //arms
  noStroke();
  fill(blackColor);
  rect(x - 190, y + 140, width + 100, height - 145, 100);
  rect(x + 130, y + 140, width + 100, height - 145, 100);

  //legs
  fill(blackColor);
  rect(x + 20, y + 310, width - 135, height, 100);
  rect(x + 130, y + 310, width - 135, height, 100);

  //body
  fill(whiteColor);
  ellipse(x + 110, y + 240, width + 100);

  //belly
  fill(blackColor);
  ellipse(x + 110, y + 240, width - 40, height);

  //ears
  fill(blackColor);
  ellipse(x, y - 100, width - 100);
  ellipse(x + 200, y - 100, width - 100);

  //head
  fill(whiteColor);
  ellipse(x + 100, y, width);

  //eyes
  fill(blackColor);
  ellipse(x + 60, y - 20, width - 140);
  ellipse(x + 140, y - 20, width - 140);

  //pupils
  noFill();
  stroke(whiteColor);
  strokeWeight(6);
  ellipse(x + 60, y - 20, width - 180);
  ellipse(x + 140, y - 20, width - 180);

  //mouth
  fill(blackColor);
  noStroke();
  ellipse(x + 100, y + 40, width - 145);

  noFill();
  stroke(whiteColor);
  strokeWeight(2);
  ellipse(x + 100, y + 30, width - 175, height - 184);
}
