export default class Grid {
  constructor(ctx) {
    console.log("Grid.js");
    this.ctx = ctx;
    this.gridState = Array.from({ length: 50 * 30 }, () => false); // Initialize grid state as an array of false values

    // Bind the click and keydown event handlers to the instance to access 'this'
    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    // Add click and keydown event listeners
    document.addEventListener("click", this.handleMouseClick);
    document.addEventListener("keydown", this.handleKeyPress);
  }

  handleMouseClick() {
    // Reset the gridState array when the mouse is clicked
    this.gridState.fill(false);
  }

  handleKeyPress(event) {
    // Check if the pressed key is "k"
    if (event.key === "k") {
      // Iterate over the grid to find blue cells and make them invisible
      for (let i = 0; i < this.gridState.length; i++) {
        if (this.gridState[i]) {
          this.gridState[i] = false; // Make the cell invisible
        }
      }
    }
  }

  draw(finger) {
    // Draw a 50x30 grid
    const columns = 50;
    const rows = 30;
    const cellWidth = window.innerWidth / columns;
    const cellHeight = window.innerHeight / rows;

    let indexDoigt = -1;
    if (finger.x === null || finger.y === null) {
      indexDoigt = -1;
    } else {
      const x = Math.floor((finger.x * window.innerWidth) / cellWidth);
      const y = Math.floor((finger.y * window.innerHeight) / cellHeight);
      indexDoigt = y * columns + x;

      // Update grid state to mark the cell as visited
      this.gridState[indexDoigt] = true;
    }

    let index = 0;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        this.ctx.strokeStyle = "transparent"; // Make the stroke style transparent

        if (this.gridState[index]) {
          this.ctx.fillStyle = "blue"; // Mark the cell as blue
          this.ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
        } else if (index === indexDoigt) {
          this.ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
          this.ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
        }

        index++;
      }
    }
  }
}
