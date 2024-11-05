let cloudOneX = 0;
let sunX = 0;
let moonX = -30;
let particles = [];
let housesVisible = true;

function setup() {
  createCanvas(400, 400);
  background(135, 206, 250);
  frameRate(15);
}

function draw() {
  if (sunX < width) {
    // Daytime background
    background(135, 206, 250);
  } else {
    // Nighttime background
    background(25, 25, 112);
  }
  
  // Sun
  fill('yellow');
  let sunY = (1/200) * (sunX - width/2) * (sunX - width/2) + 50;
  ellipse(sunX, sunY, 30, 30);

  if (sunX < width + 30) {
    sunX += 2;
  } else if (moonX >= width + 30) {
    sunX = -30; 
    moonX = -30;
  }
  
  // Moon
  if (sunX >= width) {
    fill('white');
    let moonY = (1/200) * (moonX - width/2) * (moonX - width/2) + 50;
    ellipse(moonX, moonY, 20, 20);

    if (moonX < width + 30) {
      moonX += 2;
    }
  }
  
  // Grass
  fill('green');
  rect(0, 250, 400, 200);
  
  // Volcano
  stroke(0);
  fill(80);
  quad(0, 250, 150, 100, 250, 100, 400, 250);

  // Left tree
  fill('brown');
  rect(42.5, 230, 15, 30);
  fill(0, 100, 0); 
  triangle(25, 230, 50 + 25, 230, 50, 175);

  // Right tree
  fill('brown');
  rect(342.5, 230, 15, 30);
  fill(0, 100, 0);
  triangle(325, 230, 375, 230, 350, 175);

  // Houses
  if (housesVisible) {
  fill(255, 228, 196);
  rect(100, 260, 60, 40);
  rect(200, 260, 60, 40);
  rect(300, 260, 60, 40);
  fill(139, 0, 0);
  triangle(100, 260, 130, 230, 160, 260);
  triangle(200, 260, 230, 230, 260, 260);
  triangle(300, 260, 330, 230, 360, 260);
  fill(139, 69, 19);
  rect(125, 280, 10, 20);
  rect(225, 280, 10, 20);
  rect(325, 280, 10, 20);

  // Windows
  fill(173, 216, 230);
  rect(110, 270, 10, 10);
  rect(140, 270, 10, 10);
  rect(210, 270, 10, 10);
  rect(240, 270, 10, 10);
  rect(310, 270, 10, 10);
  rect(340, 270, 10, 10);
}

  // Pond
  fill(65, 107, 223);
  ellipse(60, 350, 140, 60);
  
  // Lily pads
  fill('green');
  ellipse(45, 335, 20, 5);
  ellipse(85, 350, 20, 5);
  ellipse(35, 360, 20, 5);
  
  // Clouds
  fill(255);
  ellipse(cloudOneX, 50, 50, 20);
  ellipse(cloudOneX - 40, 100, 60, 20);

  // Update cloud position (resets at left edge)
  cloudOneX = frameCount % width;
  
  particles.push(new Particle(width / 2, height / 5));
 
  // Update and display each particle
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
   
    // Remove the particle if it becomes transparent
    if (particles[i].isFinished()) {
      particles.splice(i, 1);
    }
  }
  
  // Caption
  fill(255);
  textSize(12);
  textAlign(RIGHT, BOTTOM);
  text("Click Me", width - 10, height - 10);
}

// Toggle house visibility
function mousePressed() {
  housesVisible = !housesVisible;
}

// Particle class
class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(1, 3));
    this.lifespan = 255;
  }
 
  update() {
    this.pos.add(this.vel);
    this.lifespan -= 5;
  }
 
  display() {
    noStroke();
    fill(255, 0, 0, this.lifespan);
    ellipse(this.pos.x, this.pos.y, 10);
  }
 
  isFinished() {
    return this.lifespan < 0;
  }
}
