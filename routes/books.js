const Router = require("koa-router");
const BooksController = require("../controller/index");
const router = Router();

router.get("/", BooksController.queryBooks);

router.get("/create", BooksController.createBookView);
router.post("/create", BooksController.createBook);

router.get("/view/:code", BooksController.viewBook);

router.get("/update/:code", BooksController.updateBookView);
router.post("/update/:code", BooksController.updateBook);

router.post("/delete/:code", BooksController.deleteBook);
module.exports = router;
