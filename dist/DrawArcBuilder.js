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
export { DrawArcBuilder };
