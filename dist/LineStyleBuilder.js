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
export { LineStyleBuilder };
