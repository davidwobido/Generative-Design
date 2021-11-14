function setup() {
  createCanvas(innerWidth, innerHeight);
  createGraphics(40, 40);
}

function draw() {
  if (mouseIsPressed === true) {
    ellipse(mouseX, mouseY, 10, 10);
    line(mouseX, mouseY, 10, 10);
  }
}
