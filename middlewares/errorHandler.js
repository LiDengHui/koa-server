class ErrorHandler {
    static error(app) {
        app.use(async (ctx, next) => {
            try {
                await next();
            } catch (e) {
                ctx.body = "500 请求，正在积极修复";
            }
        });

        app.use(async (ctx, next) => {
            await next();
            if (ctx.status === 404) {
                ctx.body = `<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>`;
            }
        });
    }
}

module.exports = ErrorHandler;
