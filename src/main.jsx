import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AIChatProvider } from "./context/AiChatContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AIChatProvider>
      <App />
    </AIChatProvider>
  </StrictMode>,
);
