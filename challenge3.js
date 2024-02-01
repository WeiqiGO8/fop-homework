let snowing = [];

for (let i = 0; i < 200; i++) {
  let snow = {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
    alpha: Math.random(),
    velocity: Math.floor(Math.random()),
    acceleration: Math.floor(Math.random()),
  };

  snowing.push(snow);
}

function draw() {
  noStroke();
  background(0, 0, 0);

  for (let snow of snowing) {
    fill(255, 255, 255, Math.abs(Math.sin(snow.alpha)) * 255);
    ellipse(snow.x, snow.y, 6);
    snow.alpha += 0.1;
    console.log(snow.alpha);
    // for (let m in snowY) {
    // }
  }
}
