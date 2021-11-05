export default function (
  coordinatesArray: [number, number][],
  lineColor: string,
  lineWidth: number,
  ctx: CanvasRenderingContext2D
): void {
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();

  for (let i = 0; i < coordinatesArray.length; i++) {
    for (let j = i + 1; j < coordinatesArray.length; j++) {
      ctx.moveTo(coordinatesArray[i][0], coordinatesArray[i][1]);
      ctx.lineTo(coordinatesArray[j][0], coordinatesArray[j][1]);
    }
  }

  ctx.stroke();
}
