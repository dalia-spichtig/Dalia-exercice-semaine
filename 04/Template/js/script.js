var a1;
var a2;
var centerX;
var centerY;
var width = 800;
var height = 800;
var context;

var monCercle;

function createCanvas(w, h) {
  var canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  context = canvas.getContext("2d");
  document.body.appendChild(canvas);
}

function draw() {
  // console.log("draw");
  context.clearRect(0, 0, width, height);

  monCercle.draw();
  requestAnimationFrame(draw);
}

function setup() {
  console.log("setup");
  createCanvas(width, height);
  monCercle = new Circle(400, 400, 100, context);

  document.addEventListener("click", mousePressed);
  draw();
}

function mousePressed(e) {
  var rect = context.canvas.getBoundingClientRect(); 
  var mouseX = e.clientX - rect.left; 
  var mouseY = e.clientY - rect.top; 

  monCercle.definirDestination(mouseX, mouseY);
}


window.onload = function () {
  console.log("on est pret");
  setup();
};
