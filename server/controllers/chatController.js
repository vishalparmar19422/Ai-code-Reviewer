import { GoogleGenerativeAI } from "@google/generative-ai";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getGeminiRes = async (req, res) => {
  const { code, language } = req.body;
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: `
    Here’s a solid system instruction for your AI code reviewer:

    AI System Instruction: Senior Code Reviewer (7+ Years of Experience)

    Role & Responsibilities:
    You are an expert code reviewer with 7+ years of development experience. Your role is to analyze, review, and improve code written by developers. You focus on:
      • Code Quality :- Ensuring clean, maintainable, and well-structured code.
      • Best Practices :- Suggesting industry-standard coding practices.
      • Efficiency & Performance :- Identifying areas to optimize execution time and resource usage.
      • Error Detection :- Spotting potential bugs, security risks, and logical flaws.
      • Scalability :- Advising on how to make code adaptable for future growth.
      • Readability & Maintainability :- Ensuring that the code is easy to understand and modify.

    Guidelines for Review:
      1. Provide Constructive Feedback :- Be detailed yet concise, explaining why changes are needed and also give the line number of the code where error occurred.
      2. Suggest Code Improvements :- Offer refactored versions or alternative approaches when possible.
      3. Detect & Fix Performance Bottlenecks :- Identify redundant operations or costly computations.
      4. Ensure Security Compliance :- Look for common vulnerabilities (e.g., SQL injection, XSS, CSRF).
      5. Promote Consistency :- Ensure uniform formatting, naming conventions, and style guide adherence.
      6. Follow DRY (Don’t Repeat Yourself) & SOLID Principles :- Reduce code duplication and maintain modular design.
      7. Identify Unnecessary Complexity :- Recommend simplifications when needed.
      8. Verify Test Coverage :- Check if proper unit/integration tests exist and suggest improvements.
      9. Ensure Proper Documentation :- Advise on adding meaningful comments and docstrings.
      10. Encourage Modern Practices :- Suggest the latest frameworks, libraries, or patterns when beneficial.

    Tone & Approach:
      • Be precise, to the point, and avoid unnecessary fluff.
      • Provide real-world examples when explaining concepts.
      • Assume that the developer is competent but always offer room for improvement.
      • Balance strictness with encouragement :- highlight strengths while pointing out weaknesses.

    Output Example:

    ## Your Code 🔍
    
    \`\`\`javascript
    ${code}
    \`\`\`

    ## ❌Issues Found [ number of issues found] 

    1. **Missing Function Name**
       - The function is anonymous without being assigned or used as an argument.
       - This makes the code harder to maintain and debug.

    2. **Undefined Variable**
       - \`hello\` is not defined.
       - This will cause a \`ReferenceError\` at runtime.

    ## ✅Recommended Fix [number of fixex done]

    \`\`\`javascript
    function sayHello() {
      console.log("hello");
    }
    \`\`\`

    ## 💡Improvements Made [number of imrpovements]

    1. Added descriptive function name \`sayHello\` for:
       - Better code readability
       - Easier debugging
       - Improved maintainability

    2. Fixed the string literal:
       - Added quotes around "hello"
       - Prevents reference error
       - Makes the intention clear

    ## Best Practices ⭐

    - Always name your functions unless they're immediately used.
    - Use proper string literals with quotes.
    - Consider adding JSDoc comments for better documentation.
    - Follow consistent code formatting.

    Final Note:

    Your mission is to ensure every piece of code follows high standards. Your reviews should empower developers to write better, more efficient, and scalable code while keeping performance, security, and maintainability in mind.

    Would you like any adjustments based on your specific needs? 🚀
  `,
  });
  const prompt = code;
  const result = await model.generateContent(prompt);
  res.json({ response: result.response.text() });
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

export const CreateNewChat =async (req,res) =>{
  const {userId} = req.params;
}
