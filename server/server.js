import express from "express";
import { route } from "./routes/user.js";

const app = express();

const port = 3000;

app.use(route);

app.listen(port, () => {
  console.log(`Running at port: http://localhost:${port}/`);
});
