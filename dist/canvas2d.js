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

/**
 * 构建线条样式
 */
var LineStyleBuilder = /** @class */ (function () {
    function LineStyleBuilder(dbContext) {
        this.dbContext = dbContext;
        this.context = dbContext.getContext();
        this.lsbContext = this;
    }
    /**
     * 结束构建线条样式,返回画板对象
     * @returns
     */
    LineStyleBuilder.prototype.end = function () {
        return this.dbContext;
    };
    /**
     * 设置线条端点样式 butt|round|square
     * @param {*} cap
     * @returns
     */
    LineStyleBuilder.prototype.setCap = function (cap) {
        this.context.lineCap = cap;
        return this.lsbContext;
    };
    /**
     * 设置线条拐角类型 bevel|round|miter
     * @param {*} join
     * @returns
     */
    LineStyleBuilder.prototype.setJoin = function (join) {
        this.context.lineJoin = join;
        return this.lsbContext;
    };
    /**
     * 设置线条宽度
     * @param {*} width
     * @returns
     */
    LineStyleBuilder.prototype.setWidth = function (width) {
        this.context.lineWidth = width;
        return this.lsbContext;
    };
    /**
     * 设置线条斜接长度
     * @param {*} limit
     * @returns
     */
    LineStyleBuilder.prototype.setLimit = function (limit) {
        this.context.miterLimit = limit;
        return this.lsbContext;
    };
    return LineStyleBuilder;
}());

/**
 * 构建线条的属性
 */
var DrawLineBuilder = /** @class */ (function () {
    function DrawLineBuilder(dbContext) {
        this.dbContext = dbContext;
        this.context = dbContext.getContext();
        this.dlbContext = this;
    }
    /**
     * 定位起始点
     * @param x
     * @param y
     * @param resetPath
     * @returns
     */
    DrawLineBuilder.prototype.moveTo = function (x, y, resetPath) {
        if (resetPath === void 0) { resetPath = true; }
        resetPath && this.context.beginPath();
        this.context.moveTo(x, y);
        return this.dlbContext;
    };
    /**
     * 定位下一个点
     * @param {*} x
     * @param {*} y
     */
    DrawLineBuilder.prototype.lineTo = function (x, y) {
        this.context.lineTo(x, y);
        return this.dlbContext;
    };
    /**
     * 构建线条路径,返回画板对象进行绘制
     * @param closePath 连接起点
     * @returns
     */
    DrawLineBuilder.prototype.buildLinePath = function (closePath) {
        if (closePath === void 0) { closePath = false; }
        closePath && this.context.closePath();
        return this.dbContext;
    };
    /**
     * 创建二次贝塞尔曲线
     * @param cpx 贝塞尔控制点的 x 坐标
     * @param cpy 贝塞尔控制点的 y 坐标
     * @param x 结束点的 x 坐标
     * @param y 结束点的 y 坐标
     * @returns
     */
    DrawLineBuilder.prototype.quadraticCurveTo = function (cpx, cpy, x, y) {
        this.context.quadraticCurveTo(cpx, cpy, x, y);
        return this.dlbContext;
    };
    /**
     * 创建三次贝塞尔曲线
     * @param cp1x 第一个贝塞尔控制点的 x 坐标
     * @param cp1y 第一个贝塞尔控制点的 y 坐标
     * @param cp2x 第二个贝塞尔控制点的 x 坐标
     * @param cp2y 第二个贝塞尔控制点的 y 坐标
     * @param x 结束点的 x 坐标
     * @param y 结束点的 y 坐标
     * @returns
     */
    DrawLineBuilder.prototype.bezierCurveTo = function (cp1x, cp1y, cp2x, cp2y, x, y) {
        this.context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        return this.dlbContext;
    };
    /**
     * 创建介于两个切线之间的弧
     * @param x1 弧的起点的 x 坐标
     * @param y1 弧的起点的 y 坐标
     * @param x2 弧的终点的 x 坐标
     * @param y2 弧的终点的 y 坐标
     * @param radius 弧的半径
     * @returns
     */
    DrawLineBuilder.prototype.arcTo = function (x1, y1, x2, y2, radius) {
        this.context.arcTo(x1, y1, x2, y2, radius);
        return this.dlbContext;
    };
    DrawLineBuilder.prototype.clip = function () {
        // TODO 未实现
    };
    return DrawLineBuilder;
}());

/**
 * 构建圆弧的属性
 */
var DrawArcBuilder = /** @class */ (function () {
    function DrawArcBuilder(dbContext) {
        this.dbContext = dbContext;
        this.context = dbContext.getContext();
        this.dabContext = this;
        this.sAngle = 0;
        this.eAngle = 0;
        this.centerPointX = 0;
        this.centerPointY = 0;
        this.radius = 0;
        this.counterclockwise = false;
    }
    /**
     * 设置圆心坐标
     * @param x
     * @param y
     * @returns
     */
    DrawArcBuilder.prototype.setCentralPoint = function (x, y) {
        this.centerPointX = x;
        this.centerPointY = y;
        return this.dabContext;
    };
    /**
     * 设置半径
     * @param r
     * @returns
     */
    DrawArcBuilder.prototype.setRadius = function (r) {
        this.radius = r;
        return this.dabContext;
    };
    /**
     * 设置起始/结束角度:
     * @param sAngle 3点方向: 0*Math.PI
     * @param eAngle 9点方向: 1*Math.PI
     * @returns
     */
    DrawArcBuilder.prototype.setAngle = function (sAngle, eAngle) {
        this.sAngle = sAngle;
        this.eAngle = eAngle;
        return this.dabContext;
    };
    /**
     * 是否逆时针绘制
     * @param counterclockwise
     * @returns
     */
    DrawArcBuilder.prototype.setCounterclockwise = function (counterclockwise) {
        if (counterclockwise === void 0) { counterclockwise = false; }
        this.counterclockwise = counterclockwise;
        return this.dabContext;
    };
    /**
     * 构建圆弧路径,返回画板对象进行绘制
     * @param resetPath 重置路径
     * @param closePath 连接起点
     * @returns
     */
    DrawArcBuilder.prototype.buildArcPath = function (resetPath, closePath) {
        if (resetPath === void 0) { resetPath = true; }
        if (closePath === void 0) { closePath = false; }
        resetPath && this.context.beginPath();
        this.context.arc(this.centerPointX, this.centerPointY, this.radius, this.sAngle, this.eAngle, this.counterclockwise);
        closePath && this.context.closePath();
        return this.dbContext;
    };
    return DrawArcBuilder;
}());

/**
 * 构建矩形属性
 */
var DrawRectBuilder = /** @class */ (function () {
    function DrawRectBuilder(dbContext) {
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
    DrawRectBuilder.prototype.setLTPoint = function (x, y) {
        this.startX = x;
        this.startY = y;
        return this.drbContext;
    };
    /**
     * 设置右下角点位
     * @param x
     * @param y
     * @returns
     */
    DrawRectBuilder.prototype.setRBPoint = function (x, y) {
        this.endX = x;
        this.endY = y;
        return this.drbContext;
    };
    /**
     * 构建矩形路径,返回画板对象进行绘制
     * @param resetPath 重置路径
     * @returns
     */
    DrawRectBuilder.prototype.buildRectPath = function (resetPath) {
        if (resetPath === void 0) { resetPath = true; }
        resetPath && this.context.beginPath();
        this.context.rect(this.startX, this.startY, this.endX, this.endY);
        return this.dbContext;
    };
    /**
     * 构建并对路径填充
     * @param resetPath 重置路径
     * @returns
     */
    DrawRectBuilder.prototype.fillRect = function (resetPath) {
        if (resetPath === void 0) { resetPath = true; }
        resetPath && this.context.beginPath();
        this.context.fillRect(this.startX, this.startY, this.endX, this.endY);
        return this.dbContext;
    };
    /**
     * 构建并对路径描边
     * @param resetPath 重置路径
     * @returns
     */
    DrawRectBuilder.prototype.strokeRect = function (resetPath) {
        if (resetPath === void 0) { resetPath = true; }
        resetPath && this.context.beginPath();
        this.context.strokeRect(this.startX, this.startY, this.endX, this.endY);
        return this.dbContext;
    };
    /**
     * 在给定的矩形内清除指定的像素
     */
    DrawRectBuilder.prototype.clearRect = function () {
        this.context.clearRect(this.startX, this.startY, this.endX, this.endY);
        return this.dbContext;
    };
    return DrawRectBuilder;
}());

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

/**
 * 2D画板对象
 */
var Canvas2D = /** @class */ (function () {
    function Canvas2D(el) {
        var _a;
        this._dbContext = this;
        this._canvas = document.querySelector(el);
        if (!this._canvas) {
            throw new Error("未找到设置的canvas");
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
