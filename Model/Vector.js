class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  multiplyByScalar(scalar) {
    this.x = this.x * scalar;
    this.y = this.y * scalar;
  }
}