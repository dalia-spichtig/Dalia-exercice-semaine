let fg = 225;
let bg = 225;

const colors = [
  { r: 0, g: 51, b: 32 },
  { r: 0, g: 153, b: 153 },
  { r: 255, g: 210, b: 0 },
  { r: 0, g: 153, b: 0 },
  { r: 0, g: 204, b: 204 },
  { r: 0, g: 0, b: 0 }
];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(bg);
  fill(fg);
  strokeWeight(6);

  // Draw grid lines
  for (let x = 100; x < width; x += 100) {
    line(x, 0, x, height);
  }

  for (let y = 100; y < height; y += 100) {
    line(0, y, width, y);
  }

  const tilesX = 6;
  const tilesY = tilesX;

  const tileW = width / tilesX;
  const tileH = height / tilesY;

  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {
      const posX = tileW * x;
      const posY = tileH * y;

      const wave = sin(radians(frameCount + x * 4 + y * 4));
      const mappedWave = map(wave, -1, 1, 0, 5);
      const selector = floor(mappedWave);

      push();
      translate(posX, posY);

      const randomColorIndex = int(random(colors.length));
      fill(colors[randomColorIndex].r, colors[randomColorIndex].g, colors[randomColorIndex].b);

      if (selector === 0) {
        arc(0, 0, tileW * 2, tileH * 2, radians(0), radians(90));
      } else if (selector === 1) {
        arc(tileW, 0, tileW * 2, tileH * 2, radians(90), radians(180));
      } else if (selector === 2) {
        arc(tileW, tileH, tileW * 2, tileH * 2, radians(180), radians(270));
      } else if (selector === 3) {
        arc(0, tileH, tileW * 2, tileH * 2, radians(270), radians(360));
      } else {
        rect(0, 0, tileW, tileH);
      }

      pop();
    }
  }
}

