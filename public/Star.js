class Star {
  constructor() {
    this.x = random(-width, width)
    this.y = random(-height, height)
    this.z = random(width)
    this.pz = this.z
  }

  show() {
    fill(255)
    noStroke()
    const sx = map(this.x / this.z, 0, 1, 0, width)
    const sy = map(this.y / this.z, 0, 1, 0, height)
    const r = map(this.z, 0, width, 16, 0)
    ellipse(sx, sy, r, r)
    this.pz = this.z
    stroke(255)
    const px = map(this.x / this.pz, 0, 1, 0, width)
    const py = map(this.y / this.pz, 0, 1, 0, height)
    line(px, py, sx, sy)
  }

  update() {
    this.z -= speed
    if(this.z < 1){
      this.z = width
      this.x = random(-width, width)
      this.y = random(-height, height)
      this.pz = this.z
    }
  }
}