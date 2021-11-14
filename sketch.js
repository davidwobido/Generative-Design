function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  if (mouseIsPressed === true) {
    fill(255, 233, 0);
    stroke(110);
    ellipse(mouseX, mouseY, 10, 10);
    line(mouseX, mouseY, innerWidth / 2, innerHeight / 2);
  }
}
