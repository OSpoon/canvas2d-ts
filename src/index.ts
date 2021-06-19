import { StyleBuilder } from "./StyleBuilder.js";
import { LineStyleBuilder } from "./LineStyleBuilder.js";
import { DrawLineBuilder } from "./DrawLineBuilder.js";
import { DrawArcBuilder } from "./DrawArcBuilder.js";
import { DrawRectBuilder } from "./DrawRectBuilder.js";
import { TextBuilder } from "./TextBuilder.js";

/**
 * 2D画板对象
 */
export class Canvas2D {
  private _dbContext: Canvas2D;
  private _canvas: HTMLCanvasElement | null;
  private _context: CanvasRenderingContext2D | null | undefined;

  private _styleBuilder: StyleBuilder | null | undefined;
  private _lineStyleBuilder: LineStyleBuilder | null | undefined;

  private _drawLineBuilder: DrawLineBuilder | null | undefined;
  private _drawArcBuilder: DrawArcBuilder | null | undefined;
  private _drawRectBuilder: DrawRectBuilder | null | undefined;
  private _textBuilder: TextBuilder | null | undefined;
  constructor(el: string, width?: number, height?: number) {
    this._dbContext = this;
    this._canvas = document.querySelector(el);
    if (!this._canvas) {
      throw new Error("未找到设置的canvas");
    }
    if (width) {
      this._canvas.width = width;
    }
    if (height) {
      this._canvas.height = height;
    }
    this._context = this._canvas?.getContext("2d");

    this._styleBuilder = null;
    this._lineStyleBuilder = null;
    this._drawLineBuilder = null;
    this._drawArcBuilder = null;
    this._drawRectBuilder = null;
    this._textBuilder = null;
  }

  getContext(): CanvasRenderingContext2D | null | undefined {
    return this._context;
  }

  getWidth(): number | undefined {
    return this._canvas?.width;
  }

  getHeight(): number | undefined {
    return this._canvas?.height;
  }

  save() {
    this._context?.save();
    return this._dbContext;
  }

  restore() {
    this._context?.restore();
    return this._dbContext;
  }

  toDataURL(type?: string, quality?: any): string {
    return this._canvas!.toDataURL(type, quality);
  }

  /**
   * 设置缩放
   * @param x 缩放当前绘图的宽度 (1=100%, 0.5=50%, 2=200%, 依次类推)
   * @param y 缩放当前绘图的高度 (1=100%, 0.5=50%, 2=200%, etc.)
   * @returns
   */
  scale(x: number, y: number) {
    this._context?.scale(x, y);
    return this._dbContext;
  }

  /**
   * 旋转当前的绘图
   * @param angle 
      旋转角度，以弧度计。

      如需将角度转换为弧度，请使用 degrees*Math.PI/180 公式进行计算。

      举例：如需旋转 5 度，可规定下面的公式：5*Math.PI/180。
   * @returns 
   */
  rotate(angle: number) {
    this._context?.rotate(angle);
    return this._dbContext;
  }

  translate() {
    //TODO 未实现
  }

  transform() {
    //TODO 未实现
  }

  setTransform() {
    //TODO 未实现
  }

  /**
   * 初始化样式
   * @returns
   */
  initStyle() {
    this._styleBuilder = new StyleBuilder(this._dbContext);
    return this._styleBuilder;
  }

  /**
   * 初始化线条样式
   * @returns
   */
  initLintStyle() {
    this._lineStyleBuilder = new LineStyleBuilder(this._dbContext);
    return this._lineStyleBuilder;
  }

  /**
   * 绘制线条属性
   * @returns
   */
  initLine() {
    this._drawLineBuilder = new DrawLineBuilder(this._dbContext);
    return this._drawLineBuilder;
  }

  /**
   * 绘制圆弧属性
   * @returns
   */
  initArc() {
    this._drawArcBuilder = new DrawArcBuilder(this._dbContext);
    return this._drawArcBuilder;
  }

  /**
   * 绘制矩形属性
   * @returns
   */
  initRect() {
    this._drawRectBuilder = new DrawRectBuilder(this._dbContext);
    return this._drawRectBuilder;
  }

  /**
   * 绘制文本属性
   * @returns
   */
  initText() {
    this._textBuilder = new TextBuilder(this._dbContext);
    return this._textBuilder;
  }

  getFillStyle() {
    return this._context!.fillStyle;
  }

  getStrokeStyle() {
    return this._context!.strokeStyle;
  }

  getShadow() {
    return {
      color: this._context!.shadowColor,
      blur: this._context!.shadowBlur,
    };
  }

  getShadowOffset() {
    return {
      offsetX: this._context!.shadowOffsetX,
      offsetY: this._context!.shadowOffsetY,
    };
  }

  /**
   * 测量文本宽度
   * @param {*} txt
   * @returns
   */
  measureTextWidth(txt: string) {
    return this._context!.measureText(txt).width;
  }

  /**
   * 检查给定的点是否在画板内
   * @param {*} x
   * @param {*} y
   */
  isPointInPath(x: number, y: number) {
    return this._context!.isPointInPath(x, y);
  }

  /**
   * 绘制图像
   * @param image 规定要使用的图像、画布或视频。
   * @param dx 在画布上放置图像的 x 坐标位置。
   * @param dy 在画布上放置图像的 y 坐标位置。
   * @param dw 在画布上放置图像的 x 坐标位置。
   * @param dh 在画布上放置图像的 y 坐标位置。
   */
  drawImage(
    image: CanvasImageSource,
    dx: number,
    dy: number,
    dw?: number,
    dh?: number
  ) {
    if (dw && dh) {
      this._context!.drawImage(image, dx, dy, dw, dh);
    } else {
      this._context!.drawImage(image, dx, dy);
    }
  }

  /**
   * 绘制被裁剪的图像
   * @param image 规定要使用的图像、画布或视频。
   * @param sx 开始剪切的 x 坐标位置。
   * @param sy 开始剪切的 y 坐标位置。
   * @param sw 被剪切图像的宽度。
   * @param sh 被剪切图像的高度。
   * @param dx 在画布上放置图像的 x 坐标位置。
   * @param dy 在画布上放置图像的 y 坐标位置。
   * @param dw 在画布上放置图像的 x 坐标位置。
   * @param dh 在画布上放置图像的 y 坐标位置。
   * @returns
   */
  tailorImage(
    image: CanvasImageSource,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    dx: number,
    dy: number,
    dw: number,
    dh: number
  ) {
    return this._context!.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  }

  /**
   * 对构建的路径填充
   */
  fill() {
    this._context!.fill();
    return this._dbContext;
  }

  /**
   * 对构建的路径描边
   */
  stroke() {
    this._context!.stroke();
    return this._dbContext;
  }
}
