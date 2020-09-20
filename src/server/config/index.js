const path = require("path");

let config = {
    viewsDir: path.join(__dirname, "../", "views"),
    staticDir: path.join(__dirname, "../", "static"),
};
if (process.env.NODE_ENV === "develoption") {
    const devConfig = {
        port: 3000,
        cache: false,
    };
    config = { ...config, ...devConfig };
} else {
    const proConfig = {
        port: 8080,
        cache: "memory",
    };
    config = { ...config, ...proConfig };
}

module.exports = config;
