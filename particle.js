let particles = [];

function createParticle(x, y) {
  let velocity = 0.2 + Math.random();
  let angle = Math.PI * 2 * Math.random();
  let maxLife = 100 + Math.floor(Math.random() * 100);
  return { x: x, y: y, velocity: velocity, maxLife, life: 0, angle: angle };
}

function updateParticle(particle) {
  particle.x = particle.x + Math.cos(particle.angle) * particle.velocity;
  particle.y = particle.y + Math.sin(particle.angle) * particle.velocity;
  particle.velocity *= 0.98;
  particle.life += 1;

  if (particle.life > particle.maxLife) {
    let particleIndex = particles.indexOf(particle);
    particles.splice(particleIndex, 3);
  }
}

function drawParticle(particle) {
  push();
  translate(particle.x, particle.y);
  noStroke();
  fill(255, 255, 0, 200);
  ellipse(0, 0, 6);
  pop();
}

function draw() {
  background(0, 0, 0);
  for (let particle of particles) {
    updateParticle(particle);
    drawParticle(particle);
  }
}

function mousePressed() {
  for (let i = 0; i < 200; i++) {
    particles.push(createParticle(mouseX, mouseY));
  }
}
