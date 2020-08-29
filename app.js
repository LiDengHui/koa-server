const Koa = require("koa");
const Router = require("koa-router");
const static = require("koa-static");
const Swig = require("koa-swig");
const co = require("co");
const path = require("path");
const app = new Koa();
const router = new Router();

app.context.render = co.wrap(
    Swig({
        root: __dirname + "/views",
        autoescape: true,
        cache: false,
        ext: "html",
    })
);

let datas = {
    appName: "ToDoList",
    tasks: [
        { id: 1, title: "测试任务一", done: true },
        { id: 2, title: "学习koa", done: false },
        { id: 3, title: "学习sequelize", done: false },
    ],
};
router.get("/", async (ctx) => {
    ctx.body = await ctx.render("index.html", { datas });
});

const staticPath = "static";

app.use(static(path.join(__dirname, staticPath)));
app.use(router.routes(), router.allowedMethods());
app.listen(3000, () => {
    console.log("start service at port 3000");
});
