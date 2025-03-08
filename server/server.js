import express from "express";
import ChatRoute from "./routes/Chat.routes.js";

import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
const port = 3000;

app.use("/api/v1/chat", ChatRoute);

app.listen(port, () => {
  console.log(`Running at port: http://localhost:${port}/`);
});
