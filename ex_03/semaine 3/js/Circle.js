class Tiles {
  constructor(x, y, cote) {
    this.x = x;
    this.y = y;
    this.cote = cote;
    this.rotation = 0;
    this.image = new Image();
  }

  loadImage(src) {
    this.image.src = src;
  }

  rotate() {
    this.rotation += Math.PI / 2;
  }

  isInMe(mouseX, mouseY) {
    return (
      mouseX > this.x - this.cote / 2 &&
      mouseX < this.x + this.cote / 2 &&
      mouseY > this.y - this.cote / 2 &&
      mouseY < this.y + this.cote / 2
    );
  }

  draw(context) {
    if (this.image.complete && this.image.naturalHeight !== 0) {
      context.save();
      context.translate(this.x, this.y);
      context.rotate(this.rotation);
      context.drawImage(this.image, -this.cote / 2, -this.cote / 2, this.cote, this.cote);
      context.restore();
    }
  }
}
