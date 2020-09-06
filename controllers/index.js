const Router = require("koa-router");

const IndexController = require("./IndexController.js");

const ApiController = require("./ApiController.js");

const indexController = new IndexController();

const apiController = new ApiController();

const router = new Router();

function initController(app) {
    router.get("/", indexController.actionIndex);
    router.get("/api/getDataList", apiController.actionDataList);

    app.use(router.routes(), router.allowedMethods());
}

module.exports = initController;
// const BooksApi = require("../api");
// const BooksController = {
//     async queryBooks(ctx) {
//         try {
//             const query = ctx.query;
//             console.log(query);
//             const data = await BooksApi.queryBooks(query);
//             ctx.body = await ctx.render("books/index.html", { data });
//         } catch (e) {
//             console.error(e);
//         }
//     },

//     async viewBook(ctx) {
//         const { code } = ctx.params;
//         const data = await BooksApi.queryBook(code);
//         ctx.body = await ctx.render("books/view.html", {
//             data,
//         });
//     },

//     async updateBookView(ctx) {
//         const { code } = ctx.params;
//         const data = await BooksApi.queryBook(code);
//         ctx.body = await ctx.render("books/update.html", {
//             data,
//         });
//     },
//     async updateBook(ctx) {
//         const code = ctx.params.code;
//         const body = ctx.request.body;
//         const res = await BooksApi.putBook(code, body.Books);
//         ctx.response.redirect(`/books/view/${code}`);
//     },

//     async createBookView(ctx) {
//         ctx.body = await ctx.render("books/create.html");
//     },

//     async createBook(ctx) {
//         const code = ctx.params.code;
//         const body = ctx.request.body;
//         const res = await BooksApi.postBook(code, body.Books);
//         ctx.response.redirect(`/books/view/${res.code}`);
//     },

//     async deleteBook(ctx) {
//         const res = await BooksApi.deleteBook(ctx.params.code);
//         ctx.response.redirect("/books");
//     },
// };

// module.exports = BooksController;
