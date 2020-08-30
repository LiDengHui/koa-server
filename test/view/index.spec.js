const Rize = require("rize");

describe("UI Test Books", () => {
    it("index", async () => {
        const rize = new Rize();
        rize.goto("http://localhost:3000/books").assertSee("Books");
        await rize.end();
    });
});
