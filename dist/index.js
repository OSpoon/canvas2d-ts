import { StyleBuilder } from "./StyleBuilder.js";
import { LineStyleBuilder } from "./LineStyleBuilder.js";
import { DrawLineBuilder } from "./DrawLineBuilder.js";
import { DrawArcBuilder } from "./DrawArcBuilder.js";
import { DrawRectBuilder } from "./DrawRectBuilder.js";
import { TextBuilder } from "./TextBuilder.js";
/**
 * 2D画板对象
 */
var Canvas2D = /** @class */ (function () {
    function Canvas2D(el, width, height) {
        var _a;
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
        this._context = (_a = this._canvas) === null || _a === void 0 ? void 0 : _a.getContext("2d");
        this._styleBuilder = null;
        this._lineStyleBuilder = null;
        this._drawLineBuilder = null;
        this._drawArcBuilder = null;
        this._drawRectBuilder = null;
        this._textBuilder = null;
    }
    Canvas2D.prototype.getContext = function () {
        return this._context;
    };
    Canvas2D.prototype.getWidth = function () {
        var _a;
        return (_a = this._canvas) === null || _a === void 0 ? void 0 : _a.width;
    };
    Canvas2D.prototype.getHeight = function () {
        var _a;
        return (_a = this._canvas) === null || _a === void 0 ? void 0 : _a.height;
    };
    Canvas2D.prototype.save = function () {
        var _a;
        (_a = this._context) === null || _a === void 0 ? void 0 : _a.save();
        return this._dbContext;
    };
    Canvas2D.prototype.restore = function () {
        var _a;
        (_a = this._context) === null || _a === void 0 ? void 0 : _a.restore();
        return this._dbContext;
    };
    Canvas2D.prototype.toDataURL = function (type, quality) {
        return this._canvas.toDataURL(type, quality);
    };
    /**
     * 设置缩放
     * @param x 缩放当前绘图的宽度 (1=100%, 0.5=50%, 2=200%, 依次类推)
     * @param y 缩放当前绘图的高度 (1=100%, 0.5=50%, 2=200%, etc.)
     * @returns
     */
    Canvas2D.prototype.scale = function (x, y) {
        var _a;
        (_a = this._context) === null || _a === void 0 ? void 0 : _a.scale(x, y);
        return this._dbContext;
    };
    /**
     * 旋转当前的绘图
     * @param angle
        旋转角度，以弧度计。
  
        如需将角度转换为弧度，请使用 degrees*Math.PI/180 公式进行计算。
  
        举例：如需旋转 5 度，可规定下面的公式：5*Math.PI/180。
     * @returns
     */
    Canvas2D.prototype.rotate = function (angle) {
        var _a;
        (_a = this._context) === null || _a === void 0 ? void 0 : _a.rotate(angle);
        return this._dbContext;
    };
    Canvas2D.prototype.translate = function () {
        //TODO 未实现
    };
    Canvas2D.prototype.transform = function () {
        //TODO 未实现
    };
    Canvas2D.prototype.setTransform = function () {
        //TODO 未实现
    };
    /**
     * 初始化样式
     * @returns
     */
    Canvas2D.prototype.initStyle = function () {
        this._styleBuilder = new StyleBuilder(this._dbContext);
        return this._styleBuilder;
    };
    /**
     * 初始化线条样式
     * @returns
     */
    Canvas2D.prototype.initLintStyle = function () {
        this._lineStyleBuilder = new LineStyleBuilder(this._dbContext);
        return this._lineStyleBuilder;
    };
    /**
     * 绘制线条属性
     * @returns
     */
    Canvas2D.prototype.initLine = function () {
        this._drawLineBuilder = new DrawLineBuilder(this._dbContext);
        return this._drawLineBuilder;
    };
    /**
     * 绘制圆弧属性
     * @returns
     */
    Canvas2D.prototype.initArc = function () {
        this._drawArcBuilder = new DrawArcBuilder(this._dbContext);
        return this._drawArcBuilder;
    };
    /**
     * 绘制矩形属性
     * @returns
     */
    Canvas2D.prototype.initRect = function () {
        this._drawRectBuilder = new DrawRectBuilder(this._dbContext);
        return this._drawRectBuilder;
    };
    /**
     * 绘制文本属性
     * @returns
     */
    Canvas2D.prototype.initText = function () {
        this._textBuilder = new TextBuilder(this._dbContext);
        return this._textBuilder;
    };
    Canvas2D.prototype.getFillStyle = function () {
        return this._context.fillStyle;
    };
    Canvas2D.prototype.getStrokeStyle = function () {
        return this._context.strokeStyle;
    };
    Canvas2D.prototype.getShadow = function () {
        return {
            color: this._context.shadowColor,
            blur: this._context.shadowBlur,
        };
    };
    Canvas2D.prototype.getShadowOffset = function () {
        return {
            offsetX: this._context.shadowOffsetX,
            offsetY: this._context.shadowOffsetY,
        };
    };
    /**
     * 测量文本宽度
     * @param {*} txt
     * @returns
     */
    Canvas2D.prototype.measureTextWidth = function (txt) {
        return this._context.measureText(txt).width;
    };
    /**
     * 检查给定的点是否在画板内
     * @param {*} x
     * @param {*} y
     */
    Canvas2D.prototype.isPointInPath = function (x, y) {
        return this._context.isPointInPath(x, y);
    };
    /**
     * 绘制图像
     * @param image 规定要使用的图像、画布或视频。
     * @param dx 在画布上放置图像的 x 坐标位置。
     * @param dy 在画布上放置图像的 y 坐标位置。
     * @param dw 在画布上放置图像的 x 坐标位置。
     * @param dh 在画布上放置图像的 y 坐标位置。
     */
    Canvas2D.prototype.drawImage = function (image, dx, dy, dw, dh) {
        if (dw && dh) {
            this._context.drawImage(image, dx, dy, dw, dh);
        }
        else {
            this._context.drawImage(image, dx, dy);
        }
    };
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
    Canvas2D.prototype.tailorImage = function (image, sx, sy, sw, sh, dx, dy, dw, dh) {
        return this._context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    };
    /**
     * 对构建的路径填充
     */
    Canvas2D.prototype.fill = function () {
        this._context.fill();
        return this._dbContext;
    };
    /**
     * 对构建的路径描边
     */
    Canvas2D.prototype.stroke = function () {
        this._context.stroke();
        return this._dbContext;
    };
    return Canvas2D;
}());
export { Canvas2D };
