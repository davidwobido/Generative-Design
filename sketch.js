function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  if (mouseIsPressed === true) {
    ellipse(mouseX, mouseY, 20, 20);
  }
}
