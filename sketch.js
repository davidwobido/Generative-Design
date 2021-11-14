function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  if (mouseIsPressed === true) {
    ellipse(mouseX + 10, mouseY - 100, 20, 20);
  }
}
