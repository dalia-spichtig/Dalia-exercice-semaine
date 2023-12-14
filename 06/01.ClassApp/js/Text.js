class Text {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.fontSize = 15;
    this.hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
    this.letter = this.hiragana[Math.floor(Math.random() * this.hiragana.length)];
  }

  draw() {
    this.ctx.font = `${this.fontSize}px 'Noto Sans JP', sans-serif`; // Using 'Noto Sans JP' font for hiragana
    this.ctx.fillStyle = "magenta";
    this.ctx.fillText(`${this.letter}`, this.x, this.y);
  }
}