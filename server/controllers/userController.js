import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { GoogleGenerativeAI } from "@google/generative-ai";
const prisma = new PrismaClient();

export const CreateUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const exsistingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (exsistingUser) {
      return res.json({ message: "User already exist " }).status(400);
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        chats: { create: {} },
      },
      include: { chats: true },
    });

    return res
      .status(200)
      .json({ message: "user created succesfully  ", newUser });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "error creating user ", error: error.message });
  }
};

export const GetUserChats = async (req, res) => {
  const userId = req.get("userId");
  if (!userId) {
    res.status(400).json({ message: "userId is required" });
  }
  try {
    const AllUserChat = await prisma.chat.findMany({
      where: { userId },
    });

    res.status(200).json(AllUserChat);
  } catch (error) {
    console.log("errro while fetching all chats ", error);
    res.status(500).json({ message: "errro while fetching all chats", error });
  }
};
