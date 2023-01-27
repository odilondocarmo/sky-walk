let stars = [];

let speed;

function setup() {
  createCanvas(windowWidth, windowHeight)
  const starsQuantity = 3000
  for(let i = 0; i < starsQuantity; i++){
    stars.push(new Star())
  }
}

function draw() {
  speed = map(mouseX, 0, width,0,50)
  background(0);
  const tX = width / 2
  const tY = height / 2
  translate(tX, tY)
  for(let i = 0; i < stars.length; i++){
    stars[i].update()
    stars[i].show()
  }
}
