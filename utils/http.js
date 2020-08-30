const Axios = require("axios");

const http = Axios.create({
    baseUrl: "http://localhost/yii/web/",
    timeout: 1000,
});

http.interceptors.request.use((config) => {
    const { method, url } = config;
    console.log(`${method} ${url}`);
    return config;
});

http.interceptors.response.use((config) => {
    const { status } = config;
    if (status >= 200 || status <= 300) {
        return config.data;
    }
    console.error(config);
});
module.exports = http;
