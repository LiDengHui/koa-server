const Koa = require("koa");
const static = require("koa-static");
const Swig = require("koa-swig");
const Logger = require("koa-logger");
const co = require("co");
const path = require("path");
const bodyParser = require("koa-bodyparser");
const app = new Koa();

const logger = Logger();
const router = require("./routes");
app.context.render = co.wrap(
    Swig({
        root: __dirname + "/views",
        autoescape: true,
        cache: false,
        ext: "html",
    })
);

// app.use(logger);
const staticPath = "static";
app.use(bodyParser());
app.use(static(path.join(__dirname, staticPath)));
app.use(router.routes(), router.allowedMethods());
app.listen(3000, () => {
    console.log("start service at port 3000");
});
