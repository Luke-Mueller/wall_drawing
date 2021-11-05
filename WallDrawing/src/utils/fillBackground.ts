export default function fillBackground(
  backgroundColor: string,
  width: number,
  height: number,
  ctx: CanvasRenderingContext2D
): void {
  ctx.beginPath();
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);
}
