/**
 * 构建文本属性
 */
var TextBuilder = /** @class */ (function () {
    function TextBuilder(dbContext) {
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
    TextBuilder.prototype.end = function () {
        return this.dbContext;
    };
    /**
     * 设置字体样式
     * @param {*} font 10px sans-serif
     * @returns
     */
    TextBuilder.prototype.setFont = function (font) {
        if (font === void 0) { font = "10px sans-serif"; }
        this.context.font = font;
        return this.dtbContext;
    };
    /**
     * 设置对齐方式
     * @param {*} textAlign center|end|left|right|start
     * @returns
     */
    TextBuilder.prototype.setTextAlign = function (textAlign) {
        this.context.textAlign = textAlign;
        return this.dtbContext;
    };
    /**
     * 设置文本基线
     * @param {*} textBaseline alphabetic|top|hanging|middle|ideographic|bottom
     * @returns
     */
    TextBuilder.prototype.setTextBaseline = function (textBaseline) {
        this.context.textBaseline = textBaseline;
        return this.dtbContext;
    };
    /**
     * 设置需要绘制的文本
     * @param text 文本内容
     * @param x 文本位置x
     * @param y 文本位置y
     * @param maxWidth 文本最大宽度
     * @returns
     */
    TextBuilder.prototype.setText = function (text, x, y, maxWidth) {
        this.text = text;
        this.locX = x;
        this.locY = y;
        this.maxWidth = maxWidth;
        return this.dtbContext;
    };
    /**
     * 对文本进行填充
     */
    TextBuilder.prototype.fillText = function () {
        this.context.fillText(this.text, this.locX, this.locY, this.maxWidth);
        return this.dbContext;
    };
    /**
     * 对文本进行描边
     */
    TextBuilder.prototype.strokeText = function () {
        this.context.strokeText(this.text, this.locX, this.locY, this.maxWidth);
        return this.dbContext;
    };
    return TextBuilder;
}());
export { TextBuilder };
