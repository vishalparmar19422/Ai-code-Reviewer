import { Router } from "express";
import { getGeminiRes } from "../controllers/getGeminiResponse.js";

export const route = Router();

route.post("/reviewcode",getGeminiRes)
