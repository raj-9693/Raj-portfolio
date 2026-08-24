import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* Floating chatbot — rendered outside Routes so it persists on all pages */}
      <ChatBot />
    </Suspense>
  );
}

export default App;

