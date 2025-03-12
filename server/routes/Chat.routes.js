import { Router } from "express";
import { ChatWithAi, getGeminiRes } from "../controllers/chatController.js";
import {
  CreateUser,
  GetAllMsgs,
  GetAllUsers,
  GetUserChat,
} from "../controllers/userController.js";

const router = Router();

router.post("/getreview", getGeminiRes);
router.post("/createuser", CreateUser);
router.post("/chatwithai", ChatWithAi);
router.get("/getallmessages", GetAllMsgs);
router.get("/getallusers", GetAllUsers);
router.get("/getuserchat", GetUserChat);

export default router;
