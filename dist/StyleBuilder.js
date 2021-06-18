/**
 * 构建颜色、样式和阴影
 */
var StyleBuilder = /** @class */ (function () {
    function StyleBuilder(dbContext) {
        this.dbContext = dbContext;
        this.context = dbContext.getContext();
        this.sbContext = this;
        this.gradient = null;
        this.pattern = null;
    }
    /**
     * 结束样式构建,返回画板对象
     * @returns
     */
    StyleBuilder.prototype.end = function () {
        return this.dbContext;
    };
    /**
     *
     * @param image
     * @param repetition repeat|repeat-x|repeat-y|no-repeat
     * @returns
     */
    StyleBuilder.prototype.createPattern = function (image, repetition) {
        this.pattern = this.context.createPattern(image, repetition);
        return this.sbContext;
    };
    /**
     * 设置线性渐变
     * @param {*} startX
     * @param {*} startY
     * @param {*} endX
     * @param {*} endY
     * @returns
     */
    StyleBuilder.prototype.createLinearGradient = function (startX, startY, endX, endY) {
        this.gradient = this.context.createLinearGradient(startX, startY, endX, endY);
        return this.sbContext;
    };
    /**
     * 设置放射状/圆形渐变
     * @param {*} startX
     * @param {*} startY
     * @param {*} startR
     * @param {*} endX
     * @param {*} endY
     * @param {*} endR
     * @returns
     */
    StyleBuilder.prototype.createRadialGradient = function (startX, startY, startR, endX, endY, endR) {
        this.gradient = this.context.createRadialGradient(startX, startY, startR, endX, endY, endR);
        return this.sbContext;
    };
    /**
     * 设置渐变位置和颜色
     * @param {*} offset
     * @param {*} color
     * @returns
     */
    StyleBuilder.prototype.addColorStop = function (offset, color) {
        var _a;
        (_a = this.gradient) === null || _a === void 0 ? void 0 : _a.addColorStop(offset, color);
        return this.sbContext;
    };
    /**
     * 设置透明度
     * @param alpha
     * @returns
     */
    StyleBuilder.prototype.setAlpha = function (alpha) {
        this.context.globalAlpha = alpha;
        return this.sbContext;
    };
    /**
     * 设置层叠样式
        source-over	默认。在目标图像上显示源图像。
        source-atop	在目标图像顶部显示源图像。源图像位于目标图像之外的部分是不可见的。
        source-in	在目标图像中显示源图像。只有目标图像内的源图像部分会显示，目标图像是透明的。
        source-out	在目标图像之外显示源图像。只会显示目标图像之外源图像部分，目标图像是透明的。
        destination-over	在源图像上方显示目标图像。
        destination-atop	在源图像顶部显示目标图像。源图像之外的目标图像部分不会被显示。
        destination-in	在源图像中显示目标图像。只有源图像内的目标图像部分会被显示，源图像是透明的。
        destination-out	在源图像外显示目标图像。只有源图像外的目标图像部分会被显示，源图像是透明的。
        lighter	显示源图像 + 目标图像。
        copy	显示源图像。忽略目标图像。
        source-over	使用异或操作对源图像与目标图像进行组合。
     * @param operation
     * @returns
     */
    StyleBuilder.prototype.setCompositeOperation = function (operation) {
        this.context.globalCompositeOperation = operation;
        return this.sbContext;
    };
    /**
     * 填充绘画的颜色、渐变或模式
     * @param {*} value
     * @returns
     */
    StyleBuilder.prototype.setFillStyle = function (value) {
        if (value) {
            this.context.fillStyle = value;
        }
        else if (this.gradient) {
            this.context.fillStyle = this.gradient;
        }
        else if (this.pattern) {
            this.context.fillStyle = this.pattern;
        }
        return this.sbContext;
    };
    /**
     * 笔触的颜色、渐变或模式
     * @param {*} value
     * @returns
     */
    StyleBuilder.prototype.setStrokeStyle = function (value) {
        if (value) {
            this.context.strokeStyle = value;
        }
        else if (this.gradient) {
            this.context.strokeStyle = this.gradient;
        }
        else if (this.pattern) {
            this.context.strokeStyle = this.pattern;
        }
        return this.sbContext;
    };
    /**
     * 设置阴影颜色合模糊级别
     * @param {*} color
     * @param {*} blur
     * @returns
     */
    StyleBuilder.prototype.setShadow = function (color, blur) {
        this.context.shadowColor = color;
        this.context.shadowBlur = blur;
        return this.sbContext;
    };
    /**
     * 设置阴影的偏移距离
     * @param {*} x
     * @param {*} y
     * @returns
     */
    StyleBuilder.prototype.setShadowOffset = function (x, y) {
        if (x) {
            this.context.shadowOffsetX = x;
        }
        if (y) {
            this.context.shadowOffsetY = y;
        }
        return this.sbContext;
    };
    return StyleBuilder;
}());
export { StyleBuilder };
