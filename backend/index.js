import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Schema
const chatSchema = new mongoose.Schema({
  question: String,
  response: String,
});

const Chat = mongoose.model("Chat", chatSchema);

// Route
app.post("/ask", async (req, res) => {
  const { question } = req.body;

  try {
    const groqResponse = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [{ role: "user", content: question }],
        }),
      }
    );

    const data = await groqResponse.json();

    // DEBUG LOG
    console.log("Groq full response:", data);

    const answer =
      data?.choices?.[0]?.message?.content || "No response from AI";

    await Chat.create({ question, response: answer });

    res.json({ answer });
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// IMPORTANT for Vercel
export default app;
