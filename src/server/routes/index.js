const Router = require("koa-router");
const fs = require("fs");
const path = require("path");
const router = Router();
const files = fs.readdirSync(__dirname);

files.forEach((file) => {
    const fileName = file.substr(0, file.length - 3);
    const fileEntity = require(path.join(__dirname, file));

    if (fileName !== "index") {
        router.use(
            `/${fileName}`,
            fileEntity.routes(),
            fileEntity.allowedMethods()
        );
    }
});

module.exports = router;
