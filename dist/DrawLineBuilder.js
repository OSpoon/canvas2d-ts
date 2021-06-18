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
export { DrawLineBuilder };
