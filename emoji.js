/*
 * This is my emoji,
 * created for the Foundations of programming course at the Jönköping University 2024
 */

//background
background(50, 50, 50);

//head
strokeWeight(2.5);
fill(255, 255, 0);
ellipse(200, 200, 300);

//right eye and pupil
fill(255, 255, 255);
ellipse(270, 150, 80);

fill(0, 0, 0);
ellipse(250, 150, 20);

//left eye and pupil
fill(255, 255, 255);
ellipse(150, 150, 120);

fill(0, 0, 0);
ellipse(170, 150, 40);

//mouth and teeth
fill(255, 255, 255);
rect(130, 223, 150, 80, 100);

stroke(0, 0, 0);
line(137, 240, 273, 240);
line(134, 280, 275, 280);

//fill(0, 0, 0);
//beginShape();
//vertex(100, 100);
//bezierVertex(80, 160, 90, 160, 160, 40);
//endShape();
//arc(210, 250, 150, 100, 0, PI);
