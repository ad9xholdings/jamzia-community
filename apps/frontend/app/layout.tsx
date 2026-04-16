"use client";

import { useEffect, useState } from "react";
import { useSystemStore } from "./stores/systemStore";
import Link from "next/link";
import {
  Shield,
  Activity,
  Cpu,
  Network,
  Fingerprint,
  Globe,
  Zap,
  Lock,
  Terminal,
  Layers,
  Server
} from "lucide-react";

// Domain registry matching the spec
const domains = [
  { route: "/access", label: "Access Control", icon: Lock, color: "#DC2626" },
  { route: "/intelligence", label: "Intelligence", icon: Cpu, color: "#7096D1" },
  { route: "/audit", label: "Audit Engine", icon: Shield, color: "#F59E0B" },
  { route: "/bridge", label: "Bridge Layer", icon: Network, color: "#10B981" },
  { route: "/continuum", label: "Continuum", icon: Activity, color: "#8B5CF6" },
  { route: "/dex", label: "DEX Engine", icon: Zap, color: "#FBBF24" },
  { route: "/essence", label: "Essence", icon: Fingerprint, color: "#EC4899" },
  { route: "/foundation", label: "Foundation", icon: Layers, color: "#14B8A6" },
  { route: "/growth", label: "Growth", icon: Globe, color: "#3B82F6" },
  { route: "/horizon", label: "Horizon", icon: Terminal, color: "#6B7280" },
  { route: "/monitor", label: "Monitor", icon: Server, color: "#22C55E" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { 
    isConnected, 
    isValidated, 
    validationMessage, 
    reconnect,
    initializeWebSocket 
  } = useSystemStore();
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize WebSocket connection to monitor service
    initializeWebSocket("ws://localhost:3001");
    
    return () => {
      // Cleanup handled by store
    };
  }, [initializeWebSocket]);

  // GLOBAL CONNECTION ENFORCER - No offline mode allowed
  if (!mounted) {
    return (
      <html lang="en">
        <body style={{ 
          background: "#000000", 
          color: "#D0E3FF",
          fontFamily: "system-ui, sans-serif",
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <div style={{ textAlign: "center" }}>
            <Activity className="w-8 h-8 animate-pulse" style={{ color: "#7096D1" }} />
            <p style={{ marginTop: 16, color: "#7096D1" }}>Initializing Link...</p>
          </div>
        </body>
      </html>
    );
  }

  // Validation Link Severed - Lock screen
  if (!isConnected || !isValidated) {
    return (
      <html lang="en">
        <body style={{ 
          background: "#000000", 
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif"
        }}>
          <div style={{ 
            textAlign: "center",
            maxWidth: 480,
            padding: 48,
            border: "1px solid #DC2626",
            borderRadius: 16,
            background: "rgba(220, 38, 38, 0.05)"
          }}>
            <Shield className="w-16 h-16" style={{ color: "#DC2626", margin: "0 auto 24px" }} />
            <h1 style={{ 
              color: "#DC2626", 
              fontSize: 28, 
              fontWeight: 800,
              marginBottom: 16,
              letterSpacing: "-0.02em"
            }}>
              Validation Link Severed
            </h1>
            <p style={{ color: "#D0E3FF", marginBottom: 24, lineHeight: 1.6 }}>
              {validationMessage || "The connection to JamZia Networks™ has been interrupted. System validation is required to continue."}
            </p>
            <div style={{ 
              padding: 16, 
              background: "rgba(8, 31, 92, 0.5)", 
              borderRadius: 8,
              marginBottom: 24,
              fontFamily: "monospace",
              fontSize: 12,
              color: "#7096D1"
            }}>
              Status: {isConnected ? "CONNECTED" : "DISCONNECTED"} | 
              Validated: {isValidated ? "YES" : "NO"}
            </div>
            <button
              onClick={reconnect}
              style={{
                padding: "12px 32px",
                background: "#DC2626",
                color: "white",
                border: "none",
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
                transition: "background 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#B91C1C"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#DC2626"}
            >
              Re-establish Link
            </button>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body style={{ 
        background: "#000000", 
        color: "#D0E3FF",
        fontFamily: "system-ui, -apple-system, sans-serif",
        margin: 0,
        padding: 0,
        minHeight: "100vh"
      }}>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          {/* Sidebar Navigation - 11 Core Domains */}
          <aside style={{
            width: 280,
            background: "#081F5C",
            borderRight: "1px solid rgba(112, 150, 209, 0.2)",
            display: "flex",
            flexDirection: "column"
          }}>
            {/* Header */}
            <div style={{ padding: 24, borderBottom: "1px solid rgba(112, 150, 209, 0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Activity style={{ color: "#F7F2EB", width: 28, height: 28 }} />
                <div>
                  <h1 style={{ color: "white", fontSize: 20, fontWeight: 800, margin: 0 }}>
                    JamZia
                  </h1>
                  <p style={{ color: "#7096D1", fontSize: 10, margin: "4px 0 0", letterSpacing: 0.5 }}>
                    STEALTH LAYER ARCHITECTURE™
                  </p>
                </div>
              </div>
            </div>

            {/* Domain Navigation */}
            <nav style={{ flex: 1, padding: 16 }}>
              <p style={{ 
                color: "#7096D1", 
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
                    color: "#D0E3FF",
                    textDecoration: "none",
                    transition: "all 0.2s",
                    marginBottom: 4
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#D0E3FF";
                  }}
                >
                  <domain.icon style={{ width: 18, height: 18, color: domain.color }} />
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{domain.label}</span>
                </Link>
              ))}
            </nav>

            {/* Connection Status */}
            <div style={{ 
              padding: 16, 
              borderTop: "1px solid rgba(112, 150, 209, 0.2)",
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
              <p style={{ color: "#7096D1", fontSize: 10, margin: 0 }}>
                Real-time validation active
              </p>
            </div>
          </aside>

          {/* Main Content */}
          <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {/* Top Bar */}
            <header style={{
              height: 64,
              background: "#081F5C",
              borderBottom: "1px solid rgba(112, 150, 209, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 32px"
            }}>
              <p style={{ color: "#7096D1", fontSize: 12, margin: 0 }}>
                {new Date().toISOString()} UTC
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ color: "#22C55E", fontSize: 12 }}>● Systems Nominal</span>
                <div style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "#DC2626",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontSize: 12
                }}>
                  A
                </div>
              </div>
            </header>

            {/* Page Content */}
            <div style={{ flex: 1, overflow: "auto" }}>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
