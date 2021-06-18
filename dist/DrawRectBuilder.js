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
export { DrawRectBuilder };
