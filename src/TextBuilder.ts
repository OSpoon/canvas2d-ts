import { Canvas2D } from "./index";
/**
 * 构建文本属性
 */
export class TextBuilder {
  private dbContext: Canvas2D;
  private context: CanvasRenderingContext2D | null | undefined;
  private dtbContext: TextBuilder;
  text: string;
  locX: number;
  locY: number;
  maxWidth: number;

  constructor(dbContext: Canvas2D) {
    this.dbContext = dbContext;
    this.context = dbContext.getContext();
    this.text = "";
    this.locX = 0;
    this.locY = 0;
    this.maxWidth = 0;
    this.dtbContext = this;
  }

  /**
   * 结束构建矩形属性,返回画板对象
   * @returns
   */
  end() {
    return this.dbContext;
  }

  /**
   * 设置字体样式
   * @param {*} font 10px sans-serif
   * @returns
   */
  setFont(font = "10px sans-serif") {
    this.context!.font = font;
    return this.dtbContext;
  }

  /**
   * 设置对齐方式
   * @param {*} textAlign center|end|left|right|start
   * @returns
   */
  setTextAlign(textAlign: CanvasTextAlign) {
    this.context!.textAlign = textAlign;
    return this.dtbContext;
  }

  /**
   * 设置文本基线
   * @param {*} textBaseline alphabetic|top|hanging|middle|ideographic|bottom
   * @returns
   */
  setTextBaseline(textBaseline: CanvasTextBaseline) {
    this.context!.textBaseline = textBaseline;
    return this.dtbContext;
  }

  /**
   * 设置需要绘制的文本
   * @param text 文本内容
   * @param x 文本位置x
   * @param y 文本位置y
   * @param maxWidth 文本最大宽度
   * @returns
   */
  setText(text: string, x: number, y: number, maxWidth: number) {
    this.text = text;
    this.locX = x;
    this.locY = y;
    this.maxWidth = maxWidth;
    return this.dtbContext;
  }

  /**
   * 对文本进行填充
   */
  fillText() {
    this.context!.fillText(this.text, this.locX, this.locY, this.maxWidth);
    return this.dbContext;
  }

  /**
   * 对文本进行描边
   */
  strokeText() {
    this.context!.strokeText(this.text, this.locX, this.locY, this.maxWidth);
    return this.dbContext;
  }
}
