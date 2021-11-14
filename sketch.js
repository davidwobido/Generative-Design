let counter = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  if (mouseIsPressed && counter === 0) {
    counter++;
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 80, 80);
    console.log(counter);
  } else if (mouseIsPressed && counter === 1) {
    counter++;
    ellipse(mouseX, mouseY, 80, 80);
    fill(0, 255, 0);
    console.log(counter);
  } else if (mouseIsPressed && counter === 2) {
    ellipse(mouseX, mouseY, 80, 80);
    fill(0, 0, 255);
    console.log(counter);
  } else {
    fill(255, 233, 0);
    stroke(240);
    ellipse(mouseX, mouseY, 10, 10);
    line(mouseX, mouseY, innerWidth / 2, innerHeight / 2);
  }
}
function keyTyped() {
  line(mouseX, mouseY, 10, 40);
  counter === 1;
}
