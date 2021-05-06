var sunYpos = 500;
var yoff = 0.0; 
let cloudx =100;
let cloudy =100;

function setup() {
	createCanvas(800, 500);
}

function draw() {
	background(161,224,255);

	var c;
	noStroke();

	//SUN
	c = color(255, 212, 0);
	fill(c);
	ellipseMode(CENTER);
	ellipse(400, sunYpos, 300);
	if (sunYpos > 250)
		sunYpos--;


	//MOUNTAIN MIDDLE
	c = color(61, 41, 28);
	fill(c);
	triangle(350, 220, 600, 370, 130, 370);

	//MOUNTAIN LEFT
	c = color(81, 47, 25);
	fill(c);
	triangle(150, 215, 500, 380, -150, 380);

	//MOUNTAIN RIGHT
	c = color(102, 52, 20);
	fill(c);
	triangle(600, 200, 930, 400, 300, 400);

	//WATER
	c = color(58, 115, 206);
	fill(c);
	rect(0, 380, 800, 120);
    beginShape();
    let xoff = 0; 
    for (let x = 0; x <= width; x += 10) {
    let y = map(noise(xoff, yoff), 0, 1, 400, 300);
    vertex(x, y);
    xoff += 0.05;
  }
   yoff += 0.01;
   vertex(width, height);
   vertex(0, height);
   endShape(CLOSE);
  
}