const BooksApi = require("../api");
const BooksController = {
    async queryBooks(ctx) {
        try {
            const query = ctx.query;
            console.log(query);
            const data = await BooksApi.queryBooks(query);
            ctx.body = await ctx.render("books/index.html", { data });
        } catch (e) {
            console.error(e);
        }
    },

    async viewBook(ctx) {
        const { code } = ctx.params;
        const data = await BooksApi.queryBook(code);
        ctx.body = await ctx.render("books/view.html", {
            data,
        });
    },

    async updateBookView(ctx) {
        const { code } = ctx.params;
        const data = await BooksApi.queryBook(code);
        ctx.body = await ctx.render("books/update.html", {
            data,
        });
    },
    async updateBook(ctx) {
        const code = ctx.params.code;
        const body = ctx.request.body;
        const res = await BooksApi.putBook(code, body.Books);
        ctx.response.redirect(`/books/view/${code}`);
    },

    async createBookView(ctx) {
        ctx.body = await ctx.render("books/create.html");
    },

    async createBook(ctx) {
        const code = ctx.params.code;
        const body = ctx.request.body;
        const res = await BooksApi.postBook(code, body.Books);
        ctx.response.redirect(`/books/view/${res.code}`);
    },

    async deleteBook(ctx) {
        const res = await BooksApi.deleteBook(ctx.params.code);
        ctx.response.redirect("/books");
    },
};

module.exports = BooksController;
