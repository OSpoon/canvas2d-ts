import { Canvas2D } from "../dist/canvas2d.js";

document.querySelector("#drawPoint").addEventListener("click", () => {
  let canvas2d = new Canvas2D("#app", 800, 500);
  canvas2d.initStyle().setFillStyle("#dac53d").end();
  canvas2d
    .initArc()
    .setCentralPoint(10, 10)
    .setRadius(5)
    .setAngle(0, 2 * Math.PI)
    .buildArcPath();
  canvas2d
    .initArc()
    .setCentralPoint(20, 10)
    .setRadius(5)
    .setAngle(0, 2 * Math.PI)
    .buildArcPath(false);
  canvas2d
    .initArc()
    .setCentralPoint(30, 10)
    .setRadius(5)
    .setAngle(0, 2 * Math.PI)
    .buildArcPath(false);
  canvas2d.fill();
});
document.querySelector("#drawLine").addEventListener("click", () => {
  let canvas2d = new Canvas2D("#app", 800, 500);
  canvas2d.initStyle().setStrokeStyle("#dac53d").end();
  canvas2d.initLintStyle().setWidth(5).end();
  canvas2d
    .initLine()
    .moveTo(0, 0)
    .lineTo(30, 0)
    .lineTo(30, 30)
    .lineTo(0, 30)
    .buildLinePath(true);
  canvas2d.stroke();
});
document.querySelector("#drawRect").addEventListener("click", () => {
  let canvas2d = new Canvas2D("#app", 800, 500);
  canvas2d.initStyle().setStrokeStyle("#dac53d").end();
  canvas2d.initRect().setLTPoint(0, 0).setRBPoint(30, 30).strokeRect();

  canvas2d.initStyle().setFillStyle("#dac53d").end();
  canvas2d.initRect().setLTPoint(30, 0).setRBPoint(30, 30).fillRect();

  canvas2d.initStyle().setStrokeStyle("#dac53d").end();
  canvas2d.initRect().setLTPoint(60, 0).setRBPoint(30, 30).buildRectPath();
  canvas2d.stroke();
});
document.querySelector("#drawArc").addEventListener("click", () => {
  let canvas2d = new Canvas2D("#app", 800, 500);
  canvas2d.initStyle().setStrokeStyle("#dac53d").end();
  canvas2d
    .initArc()
    .setCentralPoint(30, 30)
    .setRadius(10)
    .setAngle(0 * Math.PI, 0.5 * Math.PI)
    .buildArcPath();
  canvas2d.stroke();
  canvas2d.initStyle().setStrokeStyle("#3b370f").end();
  canvas2d
    .initArc()
    .setCentralPoint(30, 30)
    .setRadius(10)
    .setAngle(0.5 * Math.PI, 1 * Math.PI)
    .buildArcPath();
  canvas2d.stroke();
  canvas2d.initStyle().setStrokeStyle("#dac53d").end();
  canvas2d
    .initArc()
    .setCentralPoint(30, 30)
    .setRadius(10)
    .setAngle(1 * Math.PI, 1.5 * Math.PI)
    .buildArcPath();
  canvas2d.stroke();
  canvas2d.initStyle().setStrokeStyle("#3b370f").end();
  canvas2d
    .initArc()
    .setCentralPoint(30, 30)
    .setRadius(10)
    .setAngle(1.5 * Math.PI, 2 * Math.PI)
    .buildArcPath();
  canvas2d.stroke();
});
document.querySelector("#drawImage").addEventListener("click", () => {
  let canvas2d = new Canvas2D("#app", 800, 500);
  const img = new Image();
  img.src = "./icon.jpg";
  img.onload = () => {
    canvas2d.drawImage(img, 10, 10);
  };
});
document.querySelector("#drawShadow").addEventListener("click", () => {
  let canvas2d = new Canvas2D("#app", 800, 500);
  canvas2d.initStyle().setFillStyle("#dac53d").setShadow("#555", 5).end();
  canvas2d.initRect().setLTPoint(30, 0).setRBPoint(30, 30).fillRect();
});
document.querySelector("#drawGradient").addEventListener("click", () => {
  let canvas2d = new Canvas2D("#app", 800, 500);
  canvas2d
    .initStyle()
    .createLinearGradient(30, 0, 30, 30)
    .addColorStop(0, "#fff")
    .addColorStop(1, "#000")
    .setFillStyle()
    .setShadow("#555", 5)
    .end();
  canvas2d.initRect().setLTPoint(30, 0).setRBPoint(30, 30).fillRect();
});
document.querySelector("#drawScale").addEventListener("click", () => {
  let canvas2d = new Canvas2D("#app", 800, 500);
  canvas2d.initStyle().setFillStyle("#dac53d").end();
  canvas2d
    .initArc()
    .setCentralPoint(30, 10)
    .setRadius(5)
    .setAngle(0, 2 * Math.PI)
    .buildArcPath(false);
  canvas2d.fill();
  canvas2d.scale(2, 2);
});
document.querySelector("#drawRotate").addEventListener("click", () => {
  let canvas2d = new Canvas2D("#app", 800, 500);
  canvas2d.initStyle().setStrokeStyle("#dac53d").end();
  canvas2d.rotate((30 * Math.PI) / 180);
  canvas2d.initRect().setLTPoint(100, 100).setRBPoint(30, 30).strokeRect();
});

/**
 * 生成随机粒子
 */
import { Particle } from "./particle.js";
document.querySelector("#drawParticle").addEventListener("click", () => {
  (function () {
    new Canvas2D("#app", 800, 500);

    new Particle("#app").start();
  })();
});
