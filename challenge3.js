let snowX = [];
let snowY = [];
let snowAlpha = [];
let snowMovementX = [];
let snowMovementY = [];
let snowAcceleration = [];

for (let i = 0; i < 200; i++) {
  let x = Math.floor(Math.random() * width);
  let fallX = Math.floor(Math.random() * width);
  let y = Math.floor(Math.random() * height);
  let fallY = Math.floor(Math.random() * height);
  let alpha = Math.random();
  let acceleration = 0.4;

  snowX.push(x);
  snowY.push(y);
  snowAlpha.push(alpha);
}

function draw() {
  noStroke();
  background(0, 0, 0);

  for (let index in snowX) {
    fill(255, 255, 255, Math.abs(Math.sin(snowAlpha[index])) * 255);
    ellipse(snowX[index], snowY[index], 6);
    snowAlpha += 0.4;
  }
}
