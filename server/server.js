import express from "express";
import { route } from "./routes/user.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
const port = 3000;

app.use(route);

app.listen(port, () => {
  console.log(`Running at port: http://localhost:${port}/`);
});
