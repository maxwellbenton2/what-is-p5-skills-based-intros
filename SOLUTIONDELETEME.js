var chromeBoi;
var tints;

function setup() {
  chromeBoi = loadImage("./assets/chrome-boi.png")
  tints = [
    tint.bind(null, 255, 100, 100),
    tint.bind(null, 100, 255, 100),
    tint.bind(null, 255, 255, 0)
  ]

  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var tintIdx = 0
function rotateTintIdx() {
  tintIdx = (tintIdx === 2) ? 0 : ++tintIdx
}

function getTintPosition() {
  rotateTintIdx()
  return tints[tintIdx]
}

function draw() {
  noCursor()
  if (mouseIsPressed) {
    getTintPosition()()
  } else {
    noTint()
  }
  image(chromeBoi, mouseX - 50, mouseY - 65)
}


console.log("I was succesfully loaded!")
