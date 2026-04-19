# 🤖 Cognitia AI Assistant

## 📌 Project Overview
This is a full-stack conversational AI application that allows users to ask questions and receive responses from an AI model.

The system:
- Accepts a user query
- Sends it to Groq API (LLaMA 3.1 model)
- Displays the AI-generated response
- Stores both question and response in MongoDB Atlas

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Axios

### Backend
- Node.js
- Express
- Groq API (llama-3.1-8b-instant)
- MongoDB Atlas

---

## 📂 Project Structure
cognitia-ai/
├── frontend/
├── backend/

---

## ⚙️ Setup Instructions

### 1. Clone repo
git clone https://github.com/Meghana-Chakravarthi/cognitia-ai.git
cd cognitia-ai

### 2. Backend setup
cd backend
npm install
Create `.env` file:
GROQ_API_KEY=your_groq_api_key
MONGO_URI=your_mongodb_url

Run backend: npm start

---

### 3. Frontend setup
cd frontend
npm install
npm run dev

---

## 🌐 Deployment

### Frontend:
Deployed on Vercel  
👉 https://cognitia-ai-aza8.vercel.app/

### Backend:
Deployed on Vercel  
👉 https://cognitia-ai-two.vercel.app/

---

## 🔌 API Usage

### POST /ask

Request:
{
"question": "What is AI?"
}

Response:
{
"answer":"AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. The term can also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.\n\nAI technology is based on the principle of creating algorithms that allow software and machines to process information, make decisions, and improve over time through experience. It is a subfield of computer science that enables the creation of intelligent agents, which can perform tasks that typically require human intelligence.\n\nThere are several types of AI, including:\n\n1. **Narrow or Weak AI**: This type of AI is designed to perform a specific task, such as facial recognition, language translation, or playing chess. Examples include virtual assistants like Apple's Siri, Amazon's Alexa, and Google Assistant.\n2. **General or Strong AI**: This type of AI is designed to possess human-like intelligence and be able to perform any intellectual task that a human can. It is still a topic of research and development.\n3. **Superintelligence**: This is a hypothetical type of AI that is significantly more intelligent than the best human minds. It is still a topic of debate and speculation.\n\nAI has many applications in various fields, including:\n\n1. **Machine Learning**: AI allows machines to learn from data and improve their performance over time.\n2. **Computer Vision**: AI enables machines to interpret and understand visual data from images and videos.\n3. **Natural Language Processing**: AI allows machines to understand, interpret, and generate human language.\n4. **Robotics**: AI enables robots to perform tasks that require intelligence and human-like abilities.\n\nThe potential benefits of AI include:\n\n1. **Increased productivity**: AI can automate tasks, freeing up human time for more strategic and creative work.\n2. **Improved decision-making**: AI can analyze large amounts of data and make predictions and recommendations.\n3. **Enhanced customer experience**: AI-powered chatbots and virtual assistants can provide personalized support and assistance.\n4. **Advancements in healthcare**: AI can help diagnose diseases, develop personalized treatment plans, and improve patient outcomes.\n\nHowever, there are also potential concerns and risks associated with AI, including:\n\n1. **Job displacement**: AI may automate tasks, potentially displacing human workers.\n2. **Bias and errors**: AI systems can perpetuate biases and make errors if they are trained on biased or incomplete data.\n3. **Security risks**: AI systems can be vulnerable to cyber attacks and exploitation.\n4. **Existential risks**: Some experts worry that advanced AI could pose an existential threat to humanity if it is not developed and used responsibly.\n\nOverall, AI has the potential to revolutionize many aspects of our lives."
}

---

## ✅ Features Implemented

- Single question → single response
- Groq API integration
- MongoDB storage
- Full-stack deployment

---

## 🔐 Security Practices

- API keys stored in environment variables
- No secrets committed to GitHub

---

## 🚀 Learning Outcomes

- Understood full-stack architecture
- Integrated third-party AI APIs
- Handled real-world deployment issues
- Learned environment variable management
- Debugged production-level errors
