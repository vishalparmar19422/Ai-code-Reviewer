import express from "express";
import ChatRoute from "./routes/Chat.routes.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(cookieParser());
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

dotenv.config();
const port = 3000;

app.use("/api/v1/chat", ChatRoute);

app.listen(port, () => {
  console.log(`Running at port: http://localhost:${port}/`);
});
