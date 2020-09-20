const Koa = require("koa");
const staticPlugin = require("koa-static");
const Swig = require("koa-swig");
const Logger = require("koa-logger");
const co = require("co");
const path = require("path");
const bodyParser = require("koa-bodyparser");
const app = new Koa();
const config = require("./config/index.js");
const errorHandler = require("./middlewares/errorHandler");

const router = require("./routes/index");
const { historyApiFallback } = require("koa2-connect-history-api-fallback");

const logger = Logger();
app.context.render = co.wrap(
    Swig({
        root: config.viewsDir,
        autoescape: true,
        cache: config.cache,
        varControls: ["[[", "]]"],
    })
);

app.use(logger);
const staticPath = "static";
app.use(bodyParser());
app.use(staticPlugin(config.staticDir));
app.use(router.routes()).use(router.allowedMethods());
app.use(historyApiFallback({ index: "/", whiteList: ["/api"] }));

errorHandler.error(app);

app.listen(config.port, () => {
    console.log(`start service at port ${config.port}`);
});
