let particleX = [];
let particleY = [];
let particleAlpha = [];
let particleMovementX = [];
let particleMovementY = [];
let particleAcceleration = [];

for (let i = 0; i < 200; i++) {
  let x = Math.floor(Math.random() * width);
  let y = Math.floor(Math.random() * height);
  let alpha = Math.random();

  particleX.push(x);
  particleY.push(y);
  particleAlpha.push(alpha);
}

function draw() {
  noStroke();
  background(0, 0, 0);

  for (let index in particleX) {
    fill(255, 255, 255, Math.abs(Math.sin(particleAlpha[index])) * 255);
    ellipse(particleX[index], particleY[index], 3);
    particleAlpha += 0.02;

    for (let m = 0; m < 2; m++) {
      //m = movementY
    }
  }
}
