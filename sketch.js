function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  if (mouseIsPressed === true) {
    ellipse(mouseX + 10, mouseY - 80, 20, 20);
  }
}
