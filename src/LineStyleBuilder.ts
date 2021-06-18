import { Canvas2D } from "./index";
/**
 * 构建线条样式
 */
export class LineStyleBuilder {
  private dbContext: Canvas2D;
  private context: CanvasRenderingContext2D | null | undefined;
  private lsbContext: LineStyleBuilder;

  constructor(dbContext: Canvas2D) {
    this.dbContext = dbContext;
    this.context = dbContext.getContext();
    this.lsbContext = this;
  }

  /**
   * 结束构建线条样式,返回画板对象
   * @returns
   */
  end() {
    return this.dbContext;
  }

  /**
   * 设置线条端点样式 butt|round|square
   * @param {*} cap
   * @returns
   */
  setCap(cap: CanvasLineCap) {
    this.context!.lineCap = cap;
    return this.lsbContext;
  }

  /**
   * 设置线条拐角类型 bevel|round|miter
   * @param {*} join
   * @returns
   */
  setJoin(join: CanvasLineJoin) {
    this.context!.lineJoin = join;
    return this.lsbContext;
  }

  /**
   * 设置线条宽度
   * @param {*} width
   * @returns
   */
  setWidth(width: number) {
    this.context!.lineWidth = width;
    return this.lsbContext;
  }

  /**
   * 设置线条斜接长度
   * @param {*} limit
   * @returns
   */
  setLimit(limit: number) {
    this.context!.miterLimit = limit;
    return this.lsbContext;
  }
}
