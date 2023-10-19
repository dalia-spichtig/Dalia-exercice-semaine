var a1;
var a2;
var centerX;
var centerY;
var width; 
var height; 
var context;
var rayon;
var color;
var t = 0;
var bigRadius;
var smallRadius;
var radius = 200;
var numPoints = 300;

function createCanvas(w, h) {
  var canvas = document.createElement("canvas");
  context = canvas.getContext("2d");
  canvas.width = w; 
  canvas.height = h; 
  document.body.appendChild(canvas);
}

function circle(x, y, rayon) {
  context.beginPath();
  context.arc(x, y, rayon, 0, 2 * Math.PI, true);
  context.strokeStyle = "hsl(" + color + ", 100%,50%)";
  context.fillStyle = "hsl(" + color + ", 100%, 50%)";
  context.fill();
  context.stroke();
  context.closePath();
}

function setup() {
  console.log("setup");
  
  var canvasWidth = window.innerWidth;
  var canvasHeight = window.innerHeight;
  createCanvas(window.innerWidth, window.innerHeight);
  
  color = 0;
  a1 = 0;
  a2 = 0;
  rayon = 10;
  bigRadius = Math.min(canvasWidth, canvasHeight) ;
  smallRadius = Math.min(canvasWidth, canvasHeight) ;
  centerX = window.innerWidth / 2;
  centerY = window.innerHeight / 2;

  // document.addEventListener("click", mousePressed);

  draw();
}

function draw() {
  context.fillStyle = "rgba(255,255,255,0)";
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  t += 0.005;
  a1 += 0.4;
  a2 += 0.4;
  color += 1;

  for (var i = 0; i < numPoints; i++) {
    var angle = (i / numPoints) * Math.PI * 2;
    var posx = centerX + Math.sin(angle * 5 + t) * bigRadius;
    var posy = centerY + Math.cos(angle * 2 + t) * smallRadius;
    var hue = (i / numPoints) * 360;
    circle(posx, posy, rayon);
  }

  requestAnimationFrame(draw);
}

function mousePressed(e) {
  console.log("mousePressed");
}

window.onload = function () {
  console.log("on est pret");
  setup();
};
