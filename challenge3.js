let snowing = [];

for (let i = 0; i < 200; i++) {
  let snow = {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
    alpha: Math.random(),
    velocityX: Math.abs(Math.sin(Math.random())) * -5 + 2,
    velocityY: Math.floor(Math.random() * 3 + 2),
    acceleration: Math.floor(Math.random() * 1),
  };

  snowing.push(snow);
}

function draw() {
  noStroke();
  background(0, 0, 0);

  for (let snow of snowing) {
    fill(255, 255, 255, Math.abs(Math.sin(snow.alpha)) * 255);
    ellipse(snow.x, snow.y, 6);
    snow.alpha += 0.02;

    if (snow.y > height) {
      snow.y = 0;
    }

    if (snow.x > width) {
      snow.x = 0;
    }

    snow.y += snow.velocityY;
    snow.x += snow.velocityX;
    snow.velocity += snow.acceleration;
  }
}
