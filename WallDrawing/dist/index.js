import WallDrawing from "./WallDrawing.js";
import { selector } from './constants.js';
let container;
window.onload = () => {
    container = document.querySelector(selector);
    new WallDrawing(container);
};
