import { useState } from "react";
import axios from "axios";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!question) return;

    try {
      setLoading(true);

const res = await axios.post(
  "https://cognitia-ai-two.vercel.app/ask",
  { question },
  {
    headers: {
      "Content-Type": "application/json"
    }
  }
);
      setAnswer(res.data.answer);
    } catch (err) {
      setAnswer("⚠️ Error fetching response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#0f172a",
      color: "white",
      fontFamily: "Arial"
    }}>
      <h1 style={{ marginBottom: "20px" }}>🤖 AI Assistant</h1>

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask something..."
        style={{
          padding: "12px",
          width: "320px",
          borderRadius: "10px",
          border: "none",
          marginBottom: "15px",
          outline: "none"
        }}
      />

      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 25px",
          borderRadius: "10px",
          border: "none",
          background: "#3b82f6",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        {loading ? "Thinking..." : "Ask"}
      </button>

      <div style={{
        marginTop: "25px",
        maxWidth: "400px",
        textAlign: "center",
        background: "#1e293b",
        padding: "15px",
        borderRadius: "10px"
      }}>
        {answer && <p>{answer}</p>}
      </div>
    </div>
  );
}

export default App;
