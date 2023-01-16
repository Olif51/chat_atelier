import { io } from "socket.io-client";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatPage from "./components/ChatPage";
import "./App.css";

const socket = io("http://localhost:3000");

socket.on("message", (arg) => {
  console.log(arg);
});
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
