"use client";

import { useEffect, useState } from "react";
import { useSystemStore } from "./stores/systemStore";
import { 
  Lock, Cpu, Shield, Network, Activity, Zap, Fingerprint, 
  Layers, Globe, Terminal, Server, Mountain, AlertTriangle, CheckCircle
} from "lucide-react";
import Link from "next/link";

const domains = [
  { route: "/access", label: "Access Control", icon: Lock, color: "#e94560" },
  { route: "/intelligence", label: "Intelligence", icon: Cpu, color: "#0f3460" },
  { route: "/audit", label: "Audit Engine", icon: Shield, color: "#ffd700" },
  { route: "/bridge", label: "Bridge Layer", icon: Network, color: "#22C55E" },
  { route: "/continuum", label: "Continuum", icon: Activity, color: "#8B5CF6" },
  { route: "/dex", label: "DEX Engine", icon: Zap, color: "#FBBF24" },
  { route: "/essence", label: "Essence", icon: Fingerprint, color: "#EC4899" },
  { route: "/foundation", label: "Foundation", icon: Layers, color: "#14B8A6" },
  { route: "/growth", label: "Growth", icon: Globe, color: "#3B82F6" },
  { route: "/horizon", label: "Horizon", icon: Terminal, color: "#6B7280" },
  { route: "/monitor", label: "Monitor", icon: Server, color: "#22C55E" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isConnected, isValidated, validationMessage, reconnect, initializeWebSocket } = useSystemStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    initializeWebSocket("ws://localhost:3001");
  }, [initializeWebSocket]);

  if (!mounted) {
    return (
      <html lang="en">
        <body className="antialiased">
          <div style={{ 
            minHeight: "100vh", 
            background: "#1a1a2e", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            color: "#f5f5f5",
            fontFamily: "system-ui, sans-serif"
          }}>
            <div style={{ textAlign: "center" }}>
              <Mountain className="w-12 h-12 animate-pulse" style={{ color: "#e94560", margin: "0 auto 16px" }} />
              <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>RockNext</h1>
              <p style={{ color: "#a0a0a0", fontSize: 14 }}>Initializing secure link...</p>
              <p className="powered-by" style={{ marginTop: 16, fontSize: 11, color: "#a0a0a0" }}>
                Powered by <strong style={{ color: "#7096D1" }}>JamZia Networks™</strong>
              </p>
            </div>
          </div>
        </body>
      </html>
    );
  }

  // Validation Link Severed - Lock screen
  if (!isConnected || !isValidated) {
    return (
      <html lang="en">
        <body className="antialiased">
          <div style={{ 
            minHeight: "100vh", 
            background: "#1a1a2e", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            padding: 24,
            fontFamily: "system-ui, sans-serif"
          }}>
            <div style={{ 
              textAlign: "center",
              maxWidth: 480,
              padding: 48,
              border: "2px solid #e94560",
              borderRadius: 24,
              background: "rgba(233, 69, 96, 0.05)"
            }}>
              <Mountain style={{ width: 64, height: 64, color: "#e94560", margin: "0 auto 24px" }} />
              <h1 style={{ 
                color: "#e94560", 
                fontSize: 32, 
                fontWeight: 800,
                marginBottom: 8
              }}>
                RockNext
              </h1>
              <h2 style={{ 
                color: "#e94560", 
                fontSize: 20, 
                fontWeight: 700,
                marginBottom: 16
              }}>
                Validation Link Severed
              </h2>
              <p style={{ color: "#f5f5f5", marginBottom: 24, lineHeight: 1.6 }}>
                {validationMessage || "The connection to RockNext has been interrupted. System validation is required to continue."}
              </p>
              <div style={{ 
                padding: 16, 
                background: "rgba(15, 52, 96, 0.5)", 
                borderRadius: 12,
                marginBottom: 24,
                fontFamily: "monospace",
                fontSize: 12,
                color: "#a0a0a0"
              }}>
                Status: {isConnected ? "CONNECTED" : "DISCONNECTED"} | Validated: {isValidated ? "YES" : "NO"}
              </div>
              <button
                onClick={reconnect}
                style={{
                  padding: "14px 32px",
                  background: "#e94560",
                  color: "white",
                  border: "none",
                  borderRadius: 12,
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: "pointer"
                }}
              >
                Re-establish Link
              </button>
              <p className="powered-by" style={{ marginTop: 24, fontSize: 11, color: "#a0a0a0" }}>
                Powered by <strong style={{ color: "#7096D1" }}>JamZia Networks™</strong> Stealth Layer Architecture
              </p>
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body style={{ 
        background: "#1a1a2e", 
        color: "#f5f5f5",
        fontFamily: "system-ui, -apple-system, sans-serif",
        margin: 0,
        padding: 0,
        minHeight: "100vh"
      }}>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          {/* Sidebar */}
          <aside style={{
            width: 280,
            background: "#16213e",
            borderRight: "1px solid rgba(15, 52, 96, 0.3)",
            display: "flex",
            flexDirection: "column"
          }}>
            {/* Header - RockNext Branding */}
            <div style={{ padding: 24, borderBottom: "1px solid rgba(15, 52, 96, 0.3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
                <Mountain style={{ color: "#e94560", width: 32, height: 32 }} />
                <div>
                  <h1 style={{ color: "white", fontSize: 24, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>
                    RockNext
                  </h1>
                </div>
              </div>
              <p className="powered-by" style={{ margin: "4px 0 0", fontSize: 10, color: "#a0a0a0" }}>
                Powered by <strong style={{ color: "#7096D1" }}>JamZia Networks™</strong>
              </p>
            </div>

            {/* Navigation */}
            <nav style={{ flex: 1, padding: 16 }}>
              <p style={{ 
                color: "#a0a0a0", 
                fontSize: 10, 
                textTransform: "uppercase", 
                letterSpacing: 1,
                margin: "0 0 12px 8px"
              }}>
                Core Domains
              </p>
              {domains.map((domain) => (
                <Link
                  key={domain.route}
                  href={domain.route}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 16px",
                    borderRadius: 8,
                    color: "#f5f5f5",
                    textDecoration: "none",
                    transition: "all 0.2s",
                    marginBottom: 4,
                    fontSize: 14
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(233, 69, 96, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <domain.icon style={{ width: 18, height: 18, color: domain.color }} />
                  <span>{domain.label}</span>
                </Link>
              ))}
            </nav>

            {/* Connection Status */}
            <div style={{ 
              padding: 16, 
              borderTop: "1px solid rgba(15, 52, 96, 0.3)",
              background: "rgba(0, 0, 0, 0.2)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22C55E",
                  boxShadow: "0 0 8px #22C55E"
                }} />
                <span style={{ color: "#22C55E", fontSize: 12, fontWeight: 600 }}>
                  LINK ESTABLISHED
                </span>
              </div>
              <p style={{ color: "#a0a0a0", fontSize: 10, margin: 0 }}>
                Real-time validation active
              </p>
            </div>
          </aside>

          {/* Main Content */}
          <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {/* Top Bar */}
            <header style={{
              height: 64,
              background: "#16213e",
              borderBottom: "1px solid rgba(15, 52, 96, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 32px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <CheckCircle style={{ width: 16, height: 16, color: "#22C55E" }} />
                <span style={{ color: "#22C55E", fontSize: 12, fontWeight: 600 }}>
                  Systems Operational
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ color: "#a0a0a0", fontSize: 12 }}>
                  {new Date().toISOString()} UTC
                </span>
                <div style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "#e94560",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontSize: 12
                }}>
                  RN
                </div>
              </div>
            </header>

            {/* Page Content */}
            <div style={{ flex: 1, overflow: "auto" }}>
              {children}
            </div>

            {/* Footer Attribution */}
            <footer style={{
              padding: "12px 32px",
              borderTop: "1px solid rgba(15, 52, 96, 0.3)",
              background: "#16213e",
              textAlign: "center"
            }}>
              <p className="powered-by" style={{ margin: 0, fontSize: 11, color: "#a0a0a0" }}>
                <strong style={{ color: "#f5f5f5" }}>RockNext</strong> — Powered by <strong style={{ color: "#7096D1" }}>JamZia Networks™</strong> Stealth Layer Architecture
              </p>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
