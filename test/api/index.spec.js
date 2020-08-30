const BooksApi = require("../../api");
const expect = require("chai").expect;
describe("BooksApi", () => {
    it("query", async () => {
        const res = await BooksApi.queryBooks();
        expect(Array.isArray(res.items)).to.be.true;
    });

    it("create", async () => {
        const book = {
            code: "999999",
            name: "JavaScript高级程序设计",
            author: "司徒",
            publisher: "北京邮电出版社",
        };
        const res = await BooksApi.postBook("999999", book);
        expect(res.code === "999999").to.be.true;
    });

    it("update", async () => {
        const res = await BooksApi.putBook("999999", { name: "JavaScript" });
        expect(res.name === "JavaScript").to.be.true;
    });

    it("delete", async () => {
        const res = await BooksApi.deleteBook("999999");
        expect(res === "").to.be.true;
    });
});
