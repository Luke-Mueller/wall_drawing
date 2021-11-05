class WallDrawing {
  width: string;
  height: string;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(container: HTMLDivElement) {
    const { width, height } = window.getComputedStyle(container);
    this.width = width;
    this.height = height;
    this.canvas = this.createCanvas(container.id);
    this.ctx = this.canvas.getContext("2d")!;
    this.appendCanvasToContainer(container, this.canvas);
  }

  private createCanvas(containerId: string): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    canvas.id = `${containerId}-canvas`;
    canvas.style.height = this.height;
    canvas.style.width = this.width;
		
    return canvas;
  }

  private appendCanvasToContainer(
    container: HTMLDivElement,
    canvas: HTMLCanvasElement
  ): void {
    container.innerHTML = "";
    container.appendChild(canvas);
  }
}

export default WallDrawing;
