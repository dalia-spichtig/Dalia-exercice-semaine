// la définition de la classe Circle c'est comme définir une function mais sans les parenthèses
// la fonction par défaul est le constructor
// on peut passer des paramètres au constructor
// dans une class on n'écrit pas "function" pour TOUTES les fonctions
// une variable globale de class s'écrit avec "this."
class Circle {
  constructor(x, y, size, context) {
    this.x = x;
    this.y = y;
    this.origin = { x: x, y: y };
    this.target = { x: x, y: y };

    this.speed = 1;
    this.unitOfTime = 0;
    this.unitOfTime1 = 0;

    this.size = size;
    this.sizeOrigin = { size: size };
    this.sizeFinal = { size: size };

    this.context = context;

    
    this.colors = ["#FF5733", "#FFC300", "#DAF7A6", "#C70039", "#900C3F"];
    
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];

    this.shapes = ['circle', 'triangle', 'square']; // Shapes available
    this.selectedShape = this.shapes[Math.floor(Math.random() * this.shapes.length)]; // Choose a random shape

    this.rotation = 0;
    this.angle = 0;
  }

  changeColor(r, g, b) {
    
    this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  }

  changeRadius(percentage) {
    this.size = this.sizeOrigin.size * percentage;
  }

  isInMe(mouseX, mouseY) {
    
    let d = this.dist(mouseX, mouseY, this.x, this.y);
    
    return d < this.size / 2;
  }

  draw() {
    this.context.save();
    this.context.beginPath();
    this.context.translate(this.x, this.y);
    this.context.rotate(this.rotation);

    if (this.selectedShape === 'circle') {
      this.context.arc(0, 0, this.size / 2, 0, Math.PI * 2);
    } else if (this.selectedShape === 'triangle') {
      this.context.moveTo(0, -this.size / 2);
      this.context.lineTo(this.size / 2, this.size / 2);
      this.context.lineTo(-this.size / 2, this.size / 2);
      this.context.closePath();
    } else if (this.selectedShape === 'square') {
      this.context.rect(-this.size / 2, -this.size / 2, this.size, this.size);
    }

    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.restore();
  }

  dist(x1, y1, x2, y2) {
    
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }

  defineDestination(x, y) {
    this.target = { x: x, y: y };
    this.unitOfTime = 0;
  }

  defineRandomSize() {
    this.sizeFinal.size = Math.random() * 200 + 50;
    this.unitOfTime1 = 0;
  }
}

  
