export default class Snake {
  constructor(x, y, gridSize, gridLength) {
    const point = new Point(x, y);
    const point2 = new Point(x + 1, y);
    this.elements = [point, point2];
    this.gridSize = gridSize;
    this.gridLength = gridLength;
    this.direction = new Direction(0, 0);
  }

  update() {
    const lastPosition = this.elements[0];
    const nextPosition = new Point(
      lastPosition.x + this.direction.x,
      lastPosition.y + this.direction.y
    );
    if (
      nextPosition.x < 0 ||
      nextPosition.x >= this.gridLength ||
      nextPosition.y < 0 ||
      nextPosition.y >= this.gridLength
    ) {
      console.log("oh no");
    } else {
      this.elements.unshift(nextPosition);
      this.elements.pop();
    }
  }

  draw() {
    push();
    noStroke();
    fill(0, 255, 0);
    for (let point of this.elements) {
      rect(
        point.x * this.gridSize,
        point.y * this.gridSize,
        this.gridSize,
        this.gridSize
      );
    }
    pop();
  }
}
