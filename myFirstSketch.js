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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var tintIdx = 0
function rotateTintIdx() {
  // TODO: Fix me!
  // as this is now, it will only render a red and green chromeBoi. What needs
  // to change to make sure the yellow tint is also used?
  tintIdx = (tintIdx === 2) ? 0 : ++tintIdx
}

function getTint() {
  rotateTintIdx()
  // TODO: Fix me!
  // While we are rotating the variable `tintIdx` that is keeping track of the
  // tint index, we aren't actually using it. What needs to change in the line
  // below?
  return tints[tintIdx]
}

// Draw tells p5 to actively paint something. You can assume draw() is being
// called nonstop while our program is running in the browser
function draw() {
  noCursor()
  if (mouseIsPressed) {
    // TODO: Fix me!
    // this is almost working correctly. When getTint is called, it returns one
    // of the values in our 'tints' array. Those values are functions themselves
    // that have not yet been invoked. We need to make sure we invoke the
    // returned function to apply the tint!
    getTint()()
    // if you are having trouble, try: console.log(getTint())
  } else {
    noTint()
  }
  image(chromeBoi, mouseX - 50, mouseY - 65) // draws the image at positions x, y
}

console.log("I was succesfully loaded!")
