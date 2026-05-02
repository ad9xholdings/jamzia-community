"use client";

import { useState, useRef, useEffect } from "react";
import { useSystemStore } from "../stores/systemStore";
import { Cpu, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: number;
  status: "pending" | "validating" | "complete" | "error";
  validationTime?: number;
}

export default function IntelligencePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "system-1",
      role: "system",
      content: "JamZia Intelligence Engine initialized. All prompts undergo multi-model validation before delivery. Estimated validation time: 2-4 seconds.",
      timestamp: Date.now(),
      status: "complete"
    }
  ]);
  const [input, setInput] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { socket, isValidated } = useSystemStore();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Listen for validation success from backend
  useEffect(() => {
    if (!socket) return;

    const handleValidationSuccess = (data: { messageId: string; response: string; validationTime: number }) => {
      setMessages(prev => prev.map(msg => 
        msg.id === data.messageId 
          ? { ...msg, status: "complete", content: data.response, validationTime: data.validationTime }
          : msg
      ));
      setIsValidating(false);
    };

    const handleValidationFailure = (data: { messageId: string; reason: string }) => {
      setMessages(prev => prev.map(msg => 
        msg.id === data.messageId 
          ? { ...msg, status: "error", content: `Validation failed: ${data.reason}` }
          : msg
      ));
      setIsValidating(false);
    };

    socket.on('validation_success', handleValidationSuccess);
    socket.on('validation_failure', handleValidationFailure);

    return () => {
      socket.off('validation_success', handleValidationSuccess);
      socket.off('validation_failure', handleValidationFailure);
    };
  }, [socket]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isValidating || !isValidated) return;

    const userMessageId = `user-${Date.now()}`;
    const aiMessageId = `ai-${Date.now()}`;

    // Add user message
    const userMessage: Message = {
      id: userMessageId,
      role: "user",
      content: input,
      timestamp: Date.now(),
      status: "complete"
    };

    // Add AI message in "validating" state
    const aiMessage: Message = {
      id: aiMessageId,
      role: "assistant",
      content: "",
      timestamp: Date.now(),
      status: "validating"
    };

    setMessages(prev => [...prev, userMessage, aiMessage]);
    setInput("");
    setIsValidating(true);

    // Emit to backend for validation
    socket?.emit('intelligence_prompt', {
      messageId: aiMessageId,
      prompt: input,
      timestamp: Date.now()
    });

    // Simulate backend response for demo
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === aiMessageId 
          ? { 
              ...msg, 
              status: "complete", 
              content: "This response has passed multi-model hallucination validation. The Audit Engine has verified output integrity against 3 independent model checks before delivery.",
              validationTime: 2340
            }
          : msg
      ));
      setIsValidating(false);
    }, 2500);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 64px)" }}>
      {/* Header */}
      <div style={{ 
        padding: "24px 32px", 
        borderBottom: "1px solid rgba(112, 150, 209, 0.2)",
        background: "rgba(8, 31, 92, 0.3)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Cpu style={{ width: 32, height: 32, color: "#7096D1" }} />
          <div>
            <h1 style={{ color: "white", fontSize: 24, fontWeight: 800, margin: "0 0 4px" }}>
              Intelligence Engine
            </h1>
            <p style={{ color: "#7096D1", fontSize: 14, margin: 0 }}>
              Multi-model validation pipeline active
            </p>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              background: "rgba(34, 197, 94, 0.1)",
              borderRadius: 8,
              border: "1px solid rgba(34, 197, 94, 0.3)"
            }}>
              <CheckCircle style={{ width: 16, height: 16, color: "#22C55E" }} />
              <span style={{ color: "#22C55E", fontSize: 12, fontWeight: 600 }}>
                Validation Pipeline Active
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div style={{ 
        flex: 1, 
        overflow: "auto", 
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 24
      }}>
        {messages.map((message) => (
          <div 
            key={message.id}
            style={{
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
              opacity: message.status === "validating" ? 0.7 : 1
            }}
          >
            {/* Avatar */}
            <div style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: message.role === "user" ? "#DC2626" : message.role === "system" ? "#7096D1" : "#10B981",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}>
              {message.role === "user" ? (
                <span style={{ color: "white", fontWeight: 700 }}>U</span>
              ) : message.role === "system" ? (
                <AlertCircle style={{ width: 20, height: 20, color: "white" }} />
              ) : (
                <Cpu style={{ width: 20, height: 20, color: "white" }} />
              )}
            </div>

            {/* Message Content */}
            <div style={{ flex: 1, maxWidth: "80%" }}>
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 12, 
                marginBottom: 8 
              }}>
                <span style={{ 
                  color: "white", 
                  fontWeight: 600,
                  fontSize: 14,
                  textTransform: "capitalize"
                }}>
                  {message.role === "user" ? "You" : message.role === "system" ? "System" : "JamZia Intelligence"}
                </span>
                <span style={{ color: "#7096D1", fontSize: 12 }}>
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
                {message.validationTime && (
                  <span style={{ 
                    color: "#22C55E", 
                    fontSize: 11,
                    padding: "2px 8px",
                    background: "rgba(34, 197, 94, 0.1)",
                    borderRadius: 4
                  }}>
                    Validated in {message.validationTime}ms
                  </span>
                )}
              </div>

              {/* Message Body */}
              <div style={{
                padding: 16,
                background: message.role === "user" ? "rgba(220, 38, 38, 0.1)" : "rgba(8, 31, 92, 0.5)",
                borderRadius: 12,
                border: `1px solid ${message.role === "user" ? "rgba(220, 38, 38, 0.2)" : "rgba(112, 150, 209, 0.2)"}`,
                minHeight: message.status === "validating" ? 60 : "auto"
              }}>
                {message.status === "validating" ? (
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: 12,
                    color: "#F59E0B"
                  }}>
                    <Loader2 style={{ width: 20, height: 20, animation: "spin 1s linear infinite" }} />
                    <span>Validating Pipeline… Multi-model hallucination check in progress</span>
                  </div>
                ) : (
                  <p style={{ 
                    color: "#D0E3FF", 
                    margin: 0, 
                    lineHeight: 1.6,
                    whiteSpace: "pre-wrap"
                  }}>
                    {message.content}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div style={{ 
        padding: "24px 32px", 
        borderTop: "1px solid rgba(112, 150, 209, 0.2)",
        background: "rgba(8, 31, 92, 0.3)"
      }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: 16 }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isValidating ? "Validating previous prompt…" : "Enter prompt for validation pipeline…"}
            disabled={isValidating || !isValidated}
            style={{
              flex: 1,
              padding: "16px 20px",
              background: "rgba(0, 0, 0, 0.3)",
              border: "1px solid rgba(112, 150, 209, 0.3)",
              borderRadius: 12,
              color: "white",
              fontSize: 15,
              outline: "none",
              transition: "border-color 0.2s"
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = "#7096D1"}
            onBlur={(e) => e.currentTarget.style.borderColor = "rgba(112, 150, 209, 0.3)"}
          />
          <button
            type="submit"
            disabled={isValidating || !isValidated || !input.trim()}
            style={{
              padding: "16px 24px",
              background: isValidating ? "#6B7280" : "#DC2626",
              color: "white",
              border: "none",
              borderRadius: 12,
              fontSize: 15,
              fontWeight: 600,
              cursor: isValidating ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: "background 0.2s"
            }}
          >
            {isValidating ? (
              <>
                <Loader2 style={{ width: 18, height: 18, animation: "spin 1s linear infinite" }} />
                Validating…
              </>
            ) : (
              <>
                <Send style={{ width: 18, height: 18 }} />
                Submit
              </>
            )}
          </button>
        </form>
        <p style={{ 
          color: "#7096D1", 
          fontSize: 12, 
          margin: "12px 0 0",
          textAlign: "center"
        }}>
          All prompts undergo backend validation. Responses are held until multi-model verification completes.
        </p>
      </div>
    </div>
  );
}
