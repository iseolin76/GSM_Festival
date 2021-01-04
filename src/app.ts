import * as express from "express";

class App {
  public application: express.Application;
  constructor() {
    this.application = express();
  }
}

const app = new App().application;

app.use(express.static("public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", "views");

app.get("/", (req: express.Request, res: express.Response) => {
  res.render("index");
});

app.get("/game", (req: express.Request, res: express.Response) => {
  res.render("Game");
});

app.listen(8080, () => console.log(`Open Server http://127.0.0.1:8080`));
