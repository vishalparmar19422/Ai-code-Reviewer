import { Router } from "express";
import { userControl } from "../controllers/user.controller.js";

export const route = Router();

route.get("/", userControl);
