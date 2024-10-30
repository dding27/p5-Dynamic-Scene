// Custom variable for x coordinate of clouds
let cloudOneX = 0;

function setup() {
  createCanvas(400, 400);
  background(135, 206, 250); // Light blue sky
  frameRate(15); // Set frame rate to 15
}

function draw() {
  // Redraw the background to clear previous frames
  background(135, 206, 250); // Light blue sky
  
  // Grass
  fill('green'); // Green for grass
  rect(0, 250, 400, 200); // Grass at the bottom
  
  // Volcano
  stroke(0);
  fill(80);
  quad(0, 250, 150, 100, 250, 100, 400, 250);

  
  // Left tree
  fill('brown');
  rect(42.5, 230, 15, 30);
  fill(0, 100, 0); //
  triangle(25, 230, 50 + 25, 230, 50, 175);

  // Right tree
  fill('brown');
  rect(342.5, 230, 15, 30);
  fill(0, 100, 0);
  triangle(325, 230, 375, 230, 350, 175);

  // Houses
  fill(255, 228, 196);
  rect(100, 260, 60, 40); // House 1
  rect(200, 260, 60, 40); // House 2
  rect(300, 260, 60, 40); // House 3
  fill(139, 0, 0);
  triangle(100, 260, 130, 230, 160, 260); // Roof 1
  triangle(200, 260, 230, 230, 260, 260); // Roof 2
  triangle(300, 260, 330, 230, 360, 260); // Roof 3
  fill(139, 69, 19);
  rect(125, 280, 10, 20); // Door for House 1
  rect(225, 280, 10, 20); // Door for House 2
  rect(325, 280, 10, 20); // Door for House 3

  // Windows
  fill(173, 216, 230); //
  rect(110, 270, 10, 10); // Left window for House 1
  rect(140, 270, 10, 10); // Right window for House 1
  rect(210, 270, 10, 10); // Left window for House 2
  rect(240, 270, 10, 10); // Right window for House 2
  rect(310, 270, 10, 10); // Left window for House 3
  rect(340, 270, 10, 10); // Right window for House 3
  
  // Pond
  fill(65,107,223)
  ellipse(60,350,140, 60)
  
  // Lily pads
  fill('green')
  ellipse(45,335,20, 5)
  fill('green')
  ellipse(85,350,20, 5)
  fill('green')
  ellipse(35,360,20, 5)
  
  // Clouds
  fill(255);
  ellipse(cloudOneX, 50, 50, 20);
  ellipse(cloudOneX - 40, 100, 60, 20);

  // Sets the x coordinate to the frame count
  // Resets at left edge
  cloudOneX = frameCount % width
}
