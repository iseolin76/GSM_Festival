"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const node_config_ts_1 = require("node-config-ts");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.application = express();
    }
}
const app = new App().application;
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', './public/views');
const connection = mongoose.connect(node_config_ts_1.config.MONGO_URI, { useNewUrlParser: true });
console.log("connect mongodb");
app.get("/", (req, res) => {
    res.render('index.html');
});
app.listen(4000, () => console.log(`Open Server http://127.0.0.1:${node_config_ts_1.config.PORT}`));
//# sourceMappingURL=app.js.map