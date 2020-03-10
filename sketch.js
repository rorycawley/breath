let framerate = 35;
let breath = 'Breath';
let minRadius = 120;
let maxRadius = minRadius + 140;
let radius;
let increment = -1;
let font,
  fontsize = 40;
let  gravity = 0.02;  
let speed = 0;   // speed of square

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    textFont('Helvetica');
  textSize(32);
  textAlign(CENTER, CENTER);
}

function setup() {
  // createCanvas(displayWidth, displayHeight);
	createCanvas(windowWidth, windowHeight);

  radius = maxRadius;
  stroke(255); // Set line drawing color to white

  frameRate(framerate);

  textFont('Helvetica');
  textSize(32);
  textAlign(CENTER, CENTER);

}



function draw() {
  let bgColor = 51   + radius - minRadius;
  background(bgColor);
  
  let textColor = color(bgColor);
  
  if (radius <= minRadius) {
    speed = 0;
    increment = 1;
  }

  if (radius >= maxRadius) {
    speed = 0;
    increment = -1;
  }
  
  
//    y = y + speed;
  speed = speed + gravity;

  radius = radius + (increment * speed);
      // fill(100);
  let c = color('red');
  fill(c);

  ellipse(windowWidth/2, windowHeight/2, radius, radius);
   c = color('green');
    fill(c);

  ellipse(windowWidth/2, windowHeight/2, radius-2, radius-2);
  
    fill(230);

  ellipse(windowWidth/2, windowHeight/2, radius -4, radius -4);

  fill(51); 

  
  text(breath, windowWidth/2, windowHeight/2);

}
