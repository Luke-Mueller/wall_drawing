import getCoordinatesArray from "./utils/getCoordinatesArray.js";
import {
  defaultBackgroundColor,
  defaultLineColor,
  defaultLineWidth,
} from "./constants.js";
import drawLines from "./utils/drawLines.js";
import fillBackground from "./utils/fillBackground.js";

class WallDrawing {
  width: string;
  height: string;
  backgroundColor: string;
  lineColor: string;
  lineWidth: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(container: HTMLDivElement) {
    const { width, height, color, backgroundColor } =
      window.getComputedStyle(container);

    this.width = width;
    this.height = height;
    this.backgroundColor = backgroundColor || defaultBackgroundColor;
    this.lineColor = color || defaultLineColor;
    this.lineWidth = defaultLineWidth;
    this.canvas = this.createCanvas(container.id);
    this.ctx = this.canvas.getContext("2d")!;

    this.appendCanvasToContainer(container, this.canvas);
    this.drawCanvas();
  }

  private createCanvas(containerId: string): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    canvas.id = `${containerId}-canvas`;
    canvas.style.width = this.width;
    canvas.style.height = this.height;
    return canvas;
  }

  private appendCanvasToContainer(
    container: HTMLDivElement,
    canvas: HTMLCanvasElement
  ): void {
    container.innerHTML = "";
    container.appendChild(canvas);
  }

  private drawCanvas(): void {
    const coordinatesArray: [number, number][] = getCoordinatesArray(
      this.ctx.canvas.width,
      this.ctx.canvas.height
    );
    fillBackground(
      this.backgroundColor,
      this.ctx.canvas.width,
      this.ctx.canvas.height,
      this.ctx
    );
    drawLines(coordinatesArray, this.lineColor, this.lineWidth, this.ctx);
  }
}

export default WallDrawing;
