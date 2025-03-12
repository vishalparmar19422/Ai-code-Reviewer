import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcryptjs";
import { GoogleGenerativeAI } from "@google/generative-ai";

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

export const ChatWithAi = async (req, res) => {
  const { userid } = req.query;
  const { message } = req.body;
  if (!userid) {
    return res.status(400).json({ message: "User not found" });
  }
  if (!message) {
    return res.status(400).json({ message: "message is empty " });
  }
  const newChat = await prisma.chat.findFirst({
    where: { userId: userid },
  });

  const previousChat = await prisma.message.findMany({
    where: { chatId: newChat.chatId },
  });

  const ChatHistory = [
    ...previousChat.map((msg) => ({ userMsg: msg.userMsg, aiRes: msg.aiRes })),
    { userMsg: message, aiRes: null },
  ];

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction:
      "I will give you an array of messages that contains our previous 10 conversations. Use this history to generate a response for the latest user message at the last index.",
  });
  const result = await model.generateContent(JSON.stringify(ChatHistory));
  const newMessage = await prisma.message.create({
    data: {
      chatId: newChat.id,
      userMsg: message,
      aiRes: result.response.text(),
    },
  });

  res.json({ Msg: newMessage });
};

export const GetAllMsgs = async (req, res) => {
  const { chatId } = req.query;
  const AllMsgs = await prisma.message.findMany({
    where: {
      chatId,
    },
  });
  res.json({ messages: AllMsgs });
};

export const GetAllUsers = async (req, res) => {
  const AllUsers = await prisma.user.findMany();
  res.json({ AllUsers });
};

export const GetUserChat = async (req, res) => {
  const { userId } = req.query;
  const chats = await prisma.chat.findMany({
    where: { userId },
  });
  res.json({ chats });
};
