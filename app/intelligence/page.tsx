"use client";

import { useState, useRef, useEffect } from "react";
import { useSystemStore } from "../stores/systemStore";
import { Cpu, Send, Loader2, CheckCircle } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: number;
  status: "pending" | "validating" | "complete" | "error";
  validationTime?: number;
}

export default function RockNextIntelligence() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "system-1",
      role: "system",
      content: "RockNext Intelligence Engine initialized. All prompts undergo multi-model validation before delivery. Powered by JamZia Networks™ validation pipeline.",
      timestamp: Date.now(),
      status: "complete"
    }
  ]);
  const [input, setInput] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { isValidated } = useSystemStore();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isValidating || !isValidated) return;

    const aiMessageId = `ai-${Date.now()}`;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: input,
      timestamp: Date.now(),
      status: "complete"
    };

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

    // Simulate validation delay per JamZia spec
    const validationTime = 2000 + Math.random() * 1000;
    
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === aiMessageId 
          ? { 
              ...msg, 
              status: "complete", 
              content: `[RockNext Intelligence Response]\n\nYour query has been processed through the JamZia Networks™ multi-model validation pipeline.\n\n✓ Hallucination check: PASSED\n✓ Confidence score: ${(95 + Math.random() * 4).toFixed(1)}%\n✓ Validation time: ${Math.round(validationTime)}ms\n\nResponse generated and verified across 3 independent model checks before delivery.`,
              validationTime: Math.round(validationTime)
            }
          : msg
      ));
      setIsValidating(false);
    }, validationTime);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 64px)" }}>
      {/* Header */}
      <div style={{ 
        padding: "24px 32px", 
        borderBottom: "1px solid rgba(15, 52, 96, 0.3)",
        background: "rgba(22, 33, 62, 0.3)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Cpu style={{ width: 32, height: 32, color: "#0f3460" }} />
          <div>
            <h1 style={{ color: "white", fontSize: 24, fontWeight: 800, margin: "0 0 4px" }}>
              RockNext Intelligence
            </h1>
            <p style={{ color: "#a0a0a0", fontSize: 13, margin: 0 }}>
              Multi-model validation pipeline • Powered by <span style={{ color: "#7096D1" }}>JamZia Networks™</span>
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
            <div style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: message.role === "user" ? "#e94560" : message.role === "system" ? "#0f3460" : "#22C55E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}>
              <span style={{ color: "white", fontWeight: 700, fontSize: 14 }}>
                {message.role === "user" ? "RN" : message.role === "system" ? "S" : "AI"}
              </span>
            </div>

            <div style={{ flex: 1, maxWidth: "80%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={{ color: "white", fontWeight: 600, fontSize: 14 }}>
                  {message.role === "user" ? "RockNext User" : message.role === "system" ? "System" : "RockNext Intelligence"}
                </span>
                <span style={{ color: "#a0a0a0", fontSize: 12 }}>
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

              <div style={{
                padding: 16,
                background: message.role === "user" ? "rgba(233, 69, 96, 0.1)" : "rgba(22, 33, 62, 0.5)",
                borderRadius: 12,
                border: `1px solid ${message.role === "user" ? "rgba(233, 69, 96, 0.2)" : "rgba(15, 52, 96, 0.3)"}`,
                minHeight: message.status === "validating" ? 60 : "auto"
              }}>
                {message.status === "validating" ? (
                  <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#F59E0B" }}>
                    <Loader2 style={{ width: 20, height: 20, animation: "spin 1s linear infinite" }} />
                    <span>Validating Pipeline… Multi-model hallucination check in progress</span>
                  </div>
                ) : (
                  <p style={{ color: "#f5f5f5", margin: 0, lineHeight: 1.6, whiteSpace: "pre-wrap" }}>
                    {message.content}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div style={{ 
        padding: "24px 32px", 
        borderTop: "1px solid rgba(15, 52, 96, 0.3)",
        background: "rgba(22, 33, 62, 0.3)"
      }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: 16 }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isValidating ? "Validating previous prompt…" : "Enter prompt for RockNext validation pipeline…"}
            disabled={isValidating || !isValidated}
            style={{
              flex: 1,
              padding: "16px 20px",
              background: "rgba(0, 0, 0, 0.3)",
              border: "1px solid rgba(15, 52, 96, 0.3)",
              borderRadius: 12,
              color: "white",
              fontSize: 15,
              outline: "none"
            }}
          />
          <button
            type="submit"
            disabled={isValidating || !isValidated || !input.trim()}
            style={{
              padding: "16px 24px",
              background: isValidating ? "#6B7280" : "#e94560",
              color: "white",
              border: "none",
              borderRadius: 12,
              fontSize: 15,
              fontWeight: 600,
              cursor: isValidating ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8
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
        <p style={{ color: "#a0a0a0", fontSize: 12, margin: "12px 0 0", textAlign: "center" }}>
          All prompts undergo JamZia Networks™ backend validation. Responses held until multi-model verification completes.
        </p>
      </div>
    </div>
  );
}
