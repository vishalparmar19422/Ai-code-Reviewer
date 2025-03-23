import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { GoogleGenerativeAI } from "@google/generative-ai";
const prisma = new PrismaClient();
import jwt from "jsonwebtoken";

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

export const Signup = async (req, res) => {
  const { email, username, password } = req.body;

  const IsValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    return emailRegex.test(email);
  };
  if (!IsValidEmail(email)) {
    return res.status(400).json({ message: "Enter valid email" });
  }
  if (!username.trim() || username.length < 3 || username.lenght > 15) {
    return res
      .status(400)
      .json({ message: "Enter valid username between 3 and 15 characters" });
  }
  if (!password.trim() || password.length < 8) {
    return res
      .status(400)
      .json({ message: "password must be 8 charchter long" });
  }

  try {
    const HashedPassword = await bcrypt.hash(password, 1);
    const userExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (userExist) {
      return res.status(409).json({
        message:
          "user with this email or username already exist. if this is you signin else create a new account",
      });
    }

    const NewUser = await prisma.user.create({
      data: {
        email,
        username,
        password: HashedPassword,
      },
    });

    const token = jwt.sign({ userId: NewUser.id }, process.env.JWT_SECRET);
    return res.json({
      message: "user created successfully",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error while Siginig up", error });
  }
};

export const Signin = async (req, res) => {
  const { email, password } = req.body;
  const userExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!userExist) {
    return res.status(401).json({
      message: "Invalid Email Or Password",
    });
  }
  const IsPasswordValid = await bcrypt.compare(password, userExist.password);
  if (!IsPasswordValid) {
    return res.status(401).json({ message: "Invalid Email Or Password" });
  }

  const token = jwt.sign({ userId: userExist.id }, "morgon");
  res.json({
    message: `Welcome ${userExist.username} `,
    token,
  });
};
