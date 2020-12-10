import * as express from "express"
import { config } from 'node-config-ts';
import * as mongoose from 'mongoose'

class App {
  public application: express.Application;
  constructor() {
    this.application = express();
  }
}

const app = new App().application;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', './public/views');

const connection = mongoose.connect(config.MONGO_URI, { useNewUrlParser: true });
console.log("connect mongodb");

app.get("/", (req: express.Request, res: express.Response) => {
  res.render('index.html');
})
app.listen(4000, () => console.log(`Open Server http://127.0.0.1:${config.PORT}`)); 
