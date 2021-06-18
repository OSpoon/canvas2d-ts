import { Canvas2D } from "./index";
/**
 * 构建矩形属性
 */
export class DrawRectBuilder {
  private dbContext: Canvas2D;
  private context: CanvasRenderingContext2D | null | undefined;
  private drbContext: DrawRectBuilder;
  startX: number;
  startY: number;
  endX: number;
  endY: number;

  constructor(dbContext: Canvas2D) {
    this.dbContext = dbContext;
    this.context = dbContext.getContext();
    this.drbContext = this;
    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;
  }

  /**
   * 设置左上角点位
   * @param x
   * @param y
   * @returns
   */
  setLTPoint(x: number, y: number) {
    this.startX = x;
    this.startY = y;
    return this.drbContext;
  }

  /**
   * 设置右下角点位
   * @param x
   * @param y
   * @returns
   */
  setRBPoint(x: number, y: number) {
    this.endX = x;
    this.endY = y;
    return this.drbContext;
  }

  /**
   * 构建矩形路径,返回画板对象进行绘制
   * @param resetPath 重置路径
   * @returns
   */
  buildRectPath(resetPath = true) {
    resetPath && this.context!.beginPath();
    this.context!.rect(this.startX, this.startY, this.endX, this.endY);
    return this.dbContext;
  }

  /**
   * 构建并对路径填充
   * @param resetPath 重置路径
   * @returns
   */
  fillRect(resetPath = true) {
    resetPath && this.context!.beginPath();
    this.context!.fillRect(this.startX, this.startY, this.endX, this.endY);
    return this.dbContext;
  }

  /**
   * 构建并对路径描边
   * @param resetPath 重置路径
   * @returns
   */
  strokeRect(resetPath = true) {
    resetPath && this.context!.beginPath();
    this.context!.strokeRect(this.startX, this.startY, this.endX, this.endY);
    return this.dbContext;
  }

  /**
   * 在给定的矩形内清除指定的像素
   */
  clearRect() {
    this.context!.clearRect(this.startX, this.startY, this.endX, this.endY);
    return this.dbContext;
  }
}
