class Text {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.fontSize = 15;
    this.letters = "abcdefghijklmnopqrstuvwxyz0123456789";
    this.letter = this.letters[Math.floor(Math.random() * this.letters.length)];
    this.colors = ["#00FF00", "#228B22", "#90EE90", "#FFC0CB", "#FF69B4", "#FFFF00", "#FFFF99", "#FFD700"];
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  draw() {
    this.ctx.font = `${this.fontSize}px Arial`;
    this.ctx.fillStyle = this.color;
    this.ctx.fillText(`${this.letter}`, this.x, this.y);
  }
}
