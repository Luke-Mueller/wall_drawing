import { numOfPoints, tooCloseValue } from "../constants.js";

function _getRandomCoords(maxX: number, maxY: number): [number, number] {
  return [Math.floor(Math.random() * maxX), Math.floor(Math.random() * maxY)];
}

export default function getCoordinatesArray(
  maxX: number,
  maxY: number
): [number, number][] {
  let coordinatesArray: [number, number][] = [];

  const addCoords = (): void => {
    if (coordinatesArray.length >= numOfPoints) return;
    const [randomX, randomY] = _getRandomCoords(maxX, maxY);
    let tooClose = false;
    for (let i = 0; i < coordinatesArray.length; i++) {
      if (
        Math.abs(randomX - coordinatesArray[i][0]) +
          Math.abs(randomY - coordinatesArray[i][1]) <
        tooCloseValue
      ) {
        tooClose = true;
        break;
      } else continue;
    }
    if (!tooClose) coordinatesArray.push([randomX, randomY]);
    addCoords();
  };

  addCoords();

  return coordinatesArray;
}
