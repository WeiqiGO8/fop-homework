# Challenge 3 - Create an alternative night sky --> snow /snowflakes that falls

#### Rules

- particles = snow

- snowflakes that falls with gravity/velocity

- When they reach the bottom -- > they should appear at the top again.

- (the particles will fall non-linear, with varying gravity and acceleration --> use x, y to move the particles)

#### Build order

1. create variables:

- for the snow in the x, y direction and alpha channel,
- velocity/gravity,
- acceleration,

2. functions:

- function draw() {} to draw the snow and canvas

3. for loop:

- one that generate random numbers for x, y, alpha
- one that goes through the arrays and and draw the particles
