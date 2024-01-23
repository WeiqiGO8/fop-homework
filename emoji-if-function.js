/*
 * This is my emoji,
 * created for the Foundations of programming course at the Jönköping University 2024
 */

let colorBlack = color(0, 0, 0);
let colorWhite = color(255, 255, 255);
let emojiColor = color(255, 255, 0);

let w = 200;
let h = 200;

function emoji(x, y) {
  background(colorWhite);
  push();
  translate(180, 80);

  //head
  stroke(colorBlack);
  strokeWeight(2.5);
  fill(emojiColor);
  ellipse(x, y, w + 100);

  //mouth
  fill(colorWhite);
  rect(x - 70, y + 20, w - 50, h - 120, 100);

  //teeth - upper yaw - left to right
  line(x - 40, y + 21, x - 40, y + 40);
  line(x - 2, y + 21, x - 2, y + 40);
  line(x - 2, y + 21, x - 2, y + 40);
  line(x + 40, y + 21, x + 40, y + 40);

  line(x - 63, y + 40, x + 73, y + 40);

  //teeth - lower yaw - left to right
  line(x - 40, y + 80, x - 40, y + 100);
  line(x - 2, y + 80, x - 2, y + 100);
  line(x - 2, y + 80, x - 2, y + 100);
  line(x + 40, y + 80, x + 40, y + 100);

  line(x - 66, y + 80, x + 75, y + 80);

  //eyes and pupils
  fill(colorWhite);
  ellipse(x + 70, y - 50, w - 120);
  ellipse(x - 50, y - 50, w - 80);

  fill(colorBlack);
  ellipse(x + 50, y - 50, w - 180);
  ellipse(x - 80, y - 50, w - 160);
  pop();
}

let x = 200;
let y = 200;
let s = 0.1;

function draw() {
  //   background();
  push();
  translate(x, y - 100);
  pop();

  x = x + 5;

  emoji(100, 150);
  emoji(200, 400);
}
