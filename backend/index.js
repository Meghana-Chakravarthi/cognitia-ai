import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB connected"))
.catch(err => console.log(err));

const chatSchema = new mongoose.Schema({
  question: String,
  response: String,
});

const Chat = mongoose.model("Chat", chatSchema);

app.post("/ask", async (req, res) => {
  const { question } = req.body;

  try {
    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: question }]
      })
    });

    const data = await groqResponse.json();
    const answer = data.choices[0].message.content;
    await Chat.create({ question, response: answer });

    res.json({ answer });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error" });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
