import { Canvas2D } from "../dist/canvas2d.js";
let canvas2d = new Canvas2D("#app");
canvas2d
  .initStyle()
  .setStrokeStyle("#555")
  .end()
  .initRect()
  .setLTPoint(0, 0)
  .setRBPoint(100, 100)
  .buildRectPath()
  .stroke();
