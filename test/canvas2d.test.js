import { Canvas2D } from "../dist/canvas2d.js";

document.querySelector("#drawPoint").addEventListener("click", () => {
  let canvas2d = new Canvas2D("#app");
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
  let canvas2d = new Canvas2D("#app");
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
  let canvas2d = new Canvas2D("#app");
  canvas2d.initStyle().setStrokeStyle("#dac53d").end();
  canvas2d.initRect().setLTPoint(0, 0).setRBPoint(30, 30).strokeRect();

  canvas2d.initStyle().setFillStyle("#dac53d").end();
  canvas2d.initRect().setLTPoint(30, 0).setRBPoint(30, 30).fillRect();

  canvas2d.initStyle().setStrokeStyle("#dac53d").end();
  canvas2d.initRect().setLTPoint(60, 0).setRBPoint(30, 30).buildRectPath();
  canvas2d.stroke();
});
document.querySelector("#drawArc").addEventListener("click", () => {
  let canvas2d = new Canvas2D("#app");
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
  let canvas2d = new Canvas2D("#app");
  const img = new Image();
  img.src = "./icon.jpg";
  img.onload = () => {
    canvas2d.drawImage(img, 10, 10);
  };
});
document.querySelector("#drawShadow").addEventListener("click", () => {
  let canvas2d = new Canvas2D("#app");
  canvas2d.initStyle().setFillStyle("#dac53d").setShadow("#555", 5).end();
  canvas2d.initRect().setLTPoint(30, 0).setRBPoint(30, 30).fillRect();
});
document.querySelector("#drawGradient").addEventListener("click", () => {
  let canvas2d = new Canvas2D("#app");
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
  let canvas2d = new Canvas2D("#app");
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
  let canvas2d = new Canvas2D("#app");
  canvas2d.initStyle().setStrokeStyle("#dac53d").end();
  canvas2d.rotate((30 * Math.PI) / 180);
  canvas2d.initRect().setLTPoint(100, 100).setRBPoint(30, 30).strokeRect();
});

/**
 * 生成随机静态粒子
 */
class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext();
    this.initPoint();
  }

  initPoint() {
    this.x = Math.random() * this.canvas.getWidth();
    this.y = Math.random() * this.canvas.getHeight();
    this.r = Math.random() * 2 + 1;
    const alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
    this.color = "rgba(255,255,255," + alpha + ")";
  }

  drawPoint() {
    this.context.fillStyle = this.color;
    this.context.shadowBlur = this.r * 2;
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    this.context.closePath();
    this.context.fill();
  }
}

document.querySelector("#drawParticle").addEventListener("click", () => {
  (function () {
    for (let i = 0; i < 1000; i++) {
      new Particle(new Canvas2D("#app")).drawPoint();
    }
  })();
});
