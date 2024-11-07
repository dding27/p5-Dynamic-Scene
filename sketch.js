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
    // Daytime background - When sun is in the canvas the background is     light blue
    background(135, 206, 250);
  } else {
    // Nighttime background - When sun is out of canvas the background       is dark blue
    background(25, 25, 112);
  }
  
  // Sun
  fill('yellow');
  // Parabola equation for sun path
  // ChatGPT was given 3 points on the Canvas to determine the key         points of the path. Using the 3 points a parabola equation was           generated and I inputted my own variables into the original equation.   I do not have the chatlog anymore as I deleted it but was given         permission this one time to use the generative function of ChatGPT.
  let sunY = (1/200) * (sunX - width/2) * (sunX - width/2) + 50;
  ellipse(sunX, sunY, 30, 30);

  // Start position and speed of sun
  if (sunX < width + 30) {
    sunX += 2;
  // Once the sun sets the position is reset and the moon will pop up     instead
  } else if (moonX >= width + 30) {
    sunX = -30; // Reset position so the sun isn't in canvas frame
    moonX = -30; // Reset position so the moon isn't in canvas frame
  }
  
  // Moon
  if (sunX >= width) {
    fill('white');
    // Parabola equation for moon path copied directly from sun path
    let moonY = (1/200) * (moonX - width/2) * (moonX - width/2) + 50;
    ellipse(moonX, moonY, 20, 20);

     // Start position and speed of moon
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
  // Instead of using triangle, quad was used so that the flat top of     the volcano could be created by determining 4 specific points
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

  // Houses (only shown if visible)
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
  //adds to the Letparticles [] array in the top
  //new.particle creates a particle at the width divided by two and height divided by 5.
 
  // Update and display each particle
  for (let i = particles.length - 1; i >= 0; i--){
    particles[i].update();
    particles[i].display();
  // for (let i = particles.length - 1; i >= 0; i--) is code that makes   the particles loop backwards. This happens until it reaches its first   particle back again.
  //Particle[i].update and particles[i] creates a new velocity change      and shape change
}
  
  // Caption
  fill(255);
  textSize(12);
  textAlign(RIGHT, BOTTOM);
  text("Click Me", width - 10, height - 10);
}

  // Toggle house visibility created using boolean
  function mousePressed() {
  housesVisible = !housesVisible;
}

// Particle class
class Particle {
  constructor(x, y) {
    this.x = 300;
    this.y = 100;
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(-5, -1));
    //this velocity creates random 2d particle movement that ranges from either the number -5,-1.
    this.lifespan = 255; // Starting transparency value
  }
 
  update() {
    this.pos.add(this.vel);//updates particles position using velocity.
    this.lifespan -= 5; // Fade out over time
  }
 
 
  display() {
    noStroke();
    fill(185, 0, 0, this.lifespan); // Red color
    ellipse(this.pos.x, this.pos.y, 13);
    // 13 defines the size of the circles of the particles
    //this.pos.x and this.pos.y shows th
  }
 
  isFinished() {
    return this.lifespan < 0; // Check if the particle is fully faded
  }

}
// Some sources I used.
//https://chatgpt.com/share/672a7ceb-5d20-8002-970a-07c406142102

//https://www.youtube.com/watch?v=UcdigVaIYAk
