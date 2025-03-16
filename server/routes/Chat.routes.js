import { Router } from "express";
import {
  getGeminiRes,
  CreateNewChat,
  
} from "../controllers/chatController.js";
import { CreateUser, GetUserChats } from "../controllers/userController.js";

const router = Router();

router.post("/createuser", CreateUser);
router.post("/createchat", CreateNewChat);
router.get("/getuserchats", GetUserChats);
router.put("/getreview", getGeminiRes);

export default router;
