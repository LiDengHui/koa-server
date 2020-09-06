const Controller = require("./Controller");

class IndexController extends Controller {
    constructor() {
        super();
    }

    async actionIndex(ctx) {
        ctx.body = await ctx.render("index", {
            message: "后端输出的数据",
        });
    }
}

module.exports = IndexController;
