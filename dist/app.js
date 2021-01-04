"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.application = express();
    }
}
const app = new App().application;
app.use(express.static("public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", "views");
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/game", (req, res) => {
    res.render("Game");
});
app.listen(8080, () => console.log(`Open Server http://127.0.0.1:8080`));
//# sourceMappingURL=app.js.map