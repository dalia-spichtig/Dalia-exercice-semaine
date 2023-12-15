class App {
  constructor() {
    this.setup();
  }

  setup() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.allCircles = [];
    const totalTexts = 7040;
    const centerX = this.width / 2;
    const centerY = this.height / 2;
    let angle = 0;
    let radius = 100; 
    const spiralSpacing = 100; 

    for (let i = 0; i < totalTexts; i++) {
    
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

    
      this.allCircles.push(new Text(x, y, this.ctx));

    
      angle += spiralSpacing / radius;
      radius += 0.1; 
    }

    this.audioTool = new AudioTool();

    document.addEventListener("click", (e) => {
      this.audioTool.play(e);
    });

    this.draw();
  }



  draw() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.allCircles.forEach((circle) => {
      circle.draw();
    });

    /**
     *  A CHOIX : analyser un des 3 types de data
     */
    //this.audioTool.updateWaveForm();
    //this.audioTool.updateFrequency();
    this.audioTool.updatedFloatFrequency();

    /**
     *  A CHOIX : récupérer un des 3 types de tableau
     */
    //const data = this.audioTool.dataWave;
    //const data = this.audioTool.dataFrequency;
    const data = this.audioTool.dataFloatFrequency;

    if (this.audioTool.audioContext) {
      for (let i = 0; i < data.length; i++) {
        /**
         * A CHOIX : modifier la position ou autre parametre
         */
        this.allCircles[i].y = data[i] + window.innerHeight / 2 - 125;
        this.allCircles[i].y = -data[i] * 4 + window.innerHeight / 20;
        // console.log(Math.abs(data[i] / 10));
        //this.allCircles[i].fontSize = -data[i] / 5;
      }
    }

    requestAnimationFrame(this.draw.bind(this));
  }
}

window.onload = function () {
  const app = new App();
  //   console.log(app);
};
