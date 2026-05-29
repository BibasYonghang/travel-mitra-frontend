import { createContext, useState } from "react";
import { BACKEND_URL } from "../config/env";

export const AIChatContext = createContext();

export const AIChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [trails, setTrails] = useState([]);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    difficulty: "",
    season: "",
    location: "",
  });

  const toggleChat = () => setIsOpen((prev) => !prev);
  const closeChat = () => setIsOpen(false);

  const sendMessage = async (text, options = {}) => {
    setLoading(true);
    setError(null);

    setMessages((prev) => [...prev, { role: "user", text }]);

    try {
      const endpoint = `${BACKEND_URL}/api/chat`;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          difficulty: options.difficulty || filters.difficulty,
          season: options.season || filters.season,
          location: options.location || filters.location,
          topK: options.topK || 4,
          useOrchestrator: options.useOrchestrator !== false,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.answer || "No response received",
          trails: data.trails || [],
        },
      ]);

      if (data.trails) {
        setTrails(data.trails);
      }
    } catch (err) {
      console.error("Chat error:", err);
      const errorMsg = err.message || "Failed to get response from server";
      setError(errorMsg);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: `Error: ${errorMsg}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <AIChatContext.Provider
      value={{
        messages,
        loading,
        sendMessage,
        isOpen,
        toggleChat,
        closeChat,
        trails,
        filters,
        error,
        updateFilters,
      }}
    >
      {children}
    </AIChatContext.Provider>
  );
};
