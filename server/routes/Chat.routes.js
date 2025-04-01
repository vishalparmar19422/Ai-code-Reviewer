import { Router } from "express";
import { getGeminiRes, CreateNewChat } from "../controllers/chatController.js";
import { GetUserChats, Signin, Signup } from "../controllers/userController.js";
import ProtectedRoute from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/signup", Signup);
router.post("/signin", Signin);
router.post("/createchat", CreateNewChat);
router.get("/getuserchats", GetUserChats);
router.put("/getreview", getGeminiRes); 

export default router;