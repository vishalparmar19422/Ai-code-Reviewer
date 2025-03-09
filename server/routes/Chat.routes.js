import { Router } from "express";
import { getGeminiRes } from "../controllers/getGeminiResponse.js";

const router = Router();

router.post("/getreview", getGeminiRes);

export default router;
    