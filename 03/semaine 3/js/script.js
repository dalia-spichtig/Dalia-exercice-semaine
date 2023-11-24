let width = 800;
let height = 800;
let context;
let lineX = 5;
let colY = 5;
let tiles = [];
let rotatedTileIndex = -1;

function createCanvas(w, h) {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  context = canvas.getContext("2d");
  document.body.appendChild(canvas);
}

function draw() {
  context.clearRect(0, 0, width, height);
  tiles.forEach(tile => tile.draw(context));
  requestAnimationFrame(draw);
}

function setup() {
  console.log("setup");
  createCanvas(width, height);

  document.addEventListener("mousemove", mouseMoved);

  for (let j = 1; j < lineX; j++) {
    for (let i = 1; i < colY; i++) {
      const gridX = width / lineX;
      const gridY = height / colY;
      const side = Math.min(gridX, gridY);
      const tile = new Tiles(i * gridX, j * gridY, side);
      tile.loadImage("img/img1.png");
      tiles.push(tile);
    }
  }
  draw();
}

function mouseMoved(informations) {
  tiles.forEach((tile, i) => {
    const isInTile = tile.isInMe(informations.x, informations.y);
    if (isInTile && rotatedTileIndex !== i) {
      tile.rotate();
      rotatedTileIndex = i;
    } else if (!isInTile && rotatedTileIndex === i) {
      rotatedTileIndex = -1;
    }
  });
}

window.onload = function () {
  console.log("Ready");
  setup();
};
