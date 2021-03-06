const http = require("../utils/http");
const BooksApi = {
    queryBooks(book) {
        return http.get("/yii/web/books", {
            params: book,
        });
    },
    queryBook(code) {
        return http.get(`/yii/web/books/${code}`);
    },

    putBook(code, book) {
        return http.put(`/yii/web/books/${code}`, book);
    },

    postBook(code, book) {
        return http.post(`/yii/web/books`, book);
    },

    deleteBook(code) {
        return http.delete(`/yii/web/books/${code}`);
    },
};

module.exports = BooksApi;
