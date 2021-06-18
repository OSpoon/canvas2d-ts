import { Canvas2D } from "./index";
/**
 * 构建圆弧的属性
 */
export class DrawArcBuilder {
  private dbContext: Canvas2D;
  private context: CanvasRenderingContext2D | null | undefined;
  private dabContext: DrawArcBuilder;
  private sAngle: number;
  private eAngle: number;
  private centerPointX: number;
  private centerPointY: number;
  private radius: number;
  private counterclockwise: boolean;

  constructor(dbContext: Canvas2D) {
    this.dbContext = dbContext;
    this.context = dbContext.getContext();
    this.dabContext = this;
    this.sAngle = 0;
    this.eAngle = 0;
    this.centerPointX = 0;
    this.centerPointY = 0;
    this.radius = 0;
    this.counterclockwise = true;
  }

  /**
   * 设置圆心坐标
   * @param x
   * @param y
   * @returns
   */
  setCentralPoint(x: number, y: number) {
    this.centerPointX = x;
    this.centerPointY = y;
    return this.dabContext;
  }

  /**
   * 设置半径
   * @param r
   * @returns
   */
  setRadius(r: number) {
    this.radius = r;
    return this.dabContext;
  }

  /**
   * 设置起始/结束角度:
   * @param sAngle 3点方向: 0*Math.PI
   * @param eAngle 9点方向: 1*Math.PI
   * @returns
   */
  setAngle(sAngle: number, eAngle: number) {
    this.sAngle = sAngle;
    this.eAngle = eAngle;
    return this.dabContext;
  }

  /**
   * 是否逆时针绘制
   * @param counterclockwise
   * @returns
   */
  setCounterclockwise(counterclockwise = false) {
    this.counterclockwise = counterclockwise;
    return this.dabContext;
  }

  /**
   * 构建圆弧路径,返回画板对象进行绘制
   * @param resetPath 重置路径
   * @param closePath 连接起点
   * @returns 
   */
  buildArcPath(resetPath = true, closePath = false) {
    resetPath && this.context!.beginPath();
    this.context!.arc(
      this.centerPointX,
      this.centerPointY,
      this.radius,
      this.sAngle,
      this.eAngle,
      this.counterclockwise
    );
    closePath && this.context!.closePath();
    return this.dbContext;
  }
}
