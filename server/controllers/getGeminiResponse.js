import { GoogleGenerativeAI } from "@google/generative-ai";

export const getGeminiRes = async (req, res) => {
  const { code } = req.body;
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const prompt = `Provide a concise JSON-formatted code review. Focus on critical errors and key improvement suggestions. Keep it brief and make sure the code runs if  there are no errors. Include:

  * **id:** A unique identifier for each issue.
  * **error_line:** The line number of the error (if applicable).
  * **error_type:** The type of error (e.g., SyntaxError, TypeError, LogicError).
  * **description:** A short description of the error or improvement.
  * **suggestion:** A brief suggestion for fixing the error or improving the code.
  * **hint:** A helpful hint to guide the user in solving the issue.
  * **Solution:** Solution for the code give the code itself with no errors and resolved (very important).
  * 
  
  Prioritize errors over improvements. Here is the code:\n\n${code}`;
  const result = await model.generateContent(prompt);
  res.json({ response: result.response.text() });
};
