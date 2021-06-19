import { Canvas2D } from "../dist/canvas2d.js";

export class Particle {
  constructor(el) {
    this.canvas2d = new Canvas2D(el);
    this.context = this.canvas2d.getContext();
    this.width = this.canvas2d.getWidth();
    this.height = this.canvas2d.getHeight();
    this.dots = [];
    this.count = 100;
  }

  start() {
    for (var i = 0; i < this.count; i++) {
      this.dots[i] = new Dot(
        this.context,
        Math.random() * this.width,
        Math.random() * this.height,
        true
      );
      this.dots[i].draw();
    }
    this.animate();
  }

  animate() {
    this.context.clearRect(0, 0, this.width, this.height);
    for (var i in this.dots) {
      this.dots[i].move();
    }
    requestAnimationFrame(this.animate.bind(this));
  }
}

/**
 * 生成单个粒子
 */
class Dot {
  constructor(context, x, y, useChache) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.useCache = useChache;
    this.cacheCanvas = document.createElement("canvas");
    this.cacheCtx = this.cacheCanvas.getContext("2d");
    this.r = Math.random() * 2 + 1;
    this.cacheCtx.width = 6 * this.r;
    this.cacheCtx.height = 6 * this.r;
    var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
    this.color = "rgba(255,255,255," + alpha + ")";
    if (this.useChache) {
      this.cache();
    }
  }

  cache() {
    this.cacheCtx.save();
    this.cacheCtx.fillStyle = this.color;
    this.cacheCtx.shadowColor = "white";
    this.cacheCtx.shadowBlur = this.r * 2;
    this.cacheCtx.beginPath();
    this.cacheCtx.arc(this.r * 3, this.r * 3, this.r, 0, 2 * Math.PI);
    this.cacheCtx.closePath();
    this.cacheCtx.fill();
    this.cacheCtx.restore();
  }

  draw() {
    if (!this.useChache) {
      this.context.fillStyle = this.color;
      this.context.shadowBlur = this.r * 2;
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
      this.context.closePath();
      this.context.fill();
    } else {
      this.context.drawImage(
        this.cacheCanvas,
        this.x - this.r,
        this.y - this.r
      );
    }
  }

  move() {
    this.y -= 0.15;
    if (this.y <= -10) {
      this.y = this.height + 10;
    }
    this.draw();
  }
}
