"use client";

import { Mountain, Shield, Cpu, Network, Activity, Zap, Fingerprint, Layers, Globe, Terminal, Server, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const domains = [
  { route: "/access", label: "Access Control", icon: Shield, color: "#e94560", desc: "Identity & authentication gateway" },
  { route: "/intelligence", label: "Intelligence", icon: Cpu, color: "#0f3460", desc: "AI validation pipeline" },
  { route: "/audit", label: "Audit Engine", icon: Activity, color: "#ffd700", desc: "Continuous validation metrics" },
  { route: "/bridge", label: "Bridge Layer", icon: Network, color: "#22C55E", desc: "Cross-domain data routing" },
  { route: "/continuum", label: "Continuum", icon: Activity, color: "#8B5CF6", desc: "Real-time event streaming" },
  { route: "/dex", label: "DEX Engine", icon: Zap, color: "#FBBF24", desc: "Decentralized exchange core" },
  { route: "/essence", label: "Essence", icon: Fingerprint, color: "#EC4899", desc: "Identity & reputation" },
  { route: "/foundation", label: "Foundation", icon: Layers, color: "#14B8A6", desc: "Core infrastructure layer" },
  { route: "/growth", label: "Growth", icon: Globe, color: "#3B82F6", desc: "Expansion & analytics" },
  { route: "/horizon", label: "Horizon", icon: Terminal, color: "#6B7280", desc: "Future protocol development" },
  { route: "/monitor", label: "Monitor", icon: Server, color: "#22C55E", desc: "System observability" },
];

export default function RockNextHome() {
  return (
    <div style={{ padding: 48, maxWidth: 1400 }}>
      {/* Hero Section - RockNext Branded */}
      <div style={{ 
        textAlign: "center", 
        marginBottom: 64,
        padding: "64px 48px",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        borderRadius: 24,
        border: "1px solid rgba(233, 69, 96, 0.3)",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Decorative elements */}
        <div style={{
          position: "absolute",
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "rgba(233, 69, 96, 0.1)",
          filter: "blur(60px)"
        }} />
        
        <Mountain style={{ width: 80, height: 80, color: "#e94560", margin: "0 auto 24px" }} />
        
        <h1 style={{ 
          color: "white", 
          fontSize: 56, 
          fontWeight: 800, 
          margin: "0 0 16px",
          letterSpacing: "-0.03em"
        }}>
          RockNext
        </h1>
        
        <p style={{ 
          color: "#e94560", 
          fontSize: 20, 
          fontWeight: 600,
          margin: "0 0 8px",
          letterSpacing: 2,
          textTransform: "uppercase"
        }}>
          Enterprise Platform Solutions
        </p>
        
        <p style={{ 
          color: "#a0a0a0", 
          fontSize: 14,
          fontFamily: "monospace",
          letterSpacing: 1,
          marginBottom: 32
        }}>
          Powered by <span style={{ color: "#7096D1", fontWeight: 600 }}>JamZia Networks™</span> Stealth Layer Architecture
        </p>
        
        <div style={{ 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          flexWrap: "wrap"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 20px",
            background: "rgba(34, 197, 94, 0.1)",
            border: "1px solid rgba(34, 197, 94, 0.3)",
            borderRadius: 8
          }}>
            <div style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22C55E",
              boxShadow: "0 0 8px #22C55E"
            }} />
            <span style={{ color: "#22C55E", fontSize: 12, fontWeight: 600 }}>
              Platform Operational
            </span>
          </div>
          
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 20px",
            background: "rgba(233, 69, 96, 0.1)",
            border: "1px solid rgba(233, 69, 96, 0.3)",
            borderRadius: 8
          }}>
            <Shield style={{ width: 14, height: 14, color: "#e94560" }} />
            <span style={{ color: "#e94560", fontSize: 12, fontWeight: 600 }}>
              Audit Engine Active
            </span>
          </div>
          
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 20px",
            background: "rgba(255, 215, 0, 0.1)",
            border: "1px solid rgba(255, 215, 0, 0.3)",
            borderRadius: 8
          }}>
            <CheckCircle style={{ width: 14, height: 14, color: "#ffd700" }} />
            <span style={{ color: "#ffd700", fontSize: 12, fontWeight: 600 }}>
              White-Label Ready
            </span>
          </div>
        </div>
      </div>

      {/* Domain Grid */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: 12, 
          marginBottom: 24 
        }}>
          <Shield style={{ width: 24, height: 24, color: "#e94560" }} />
          <h2 style={{ color: "white", fontSize: 24, fontWeight: 700, margin: 0 }}>
            Core Domains
          </h2>
        </div>
        
        <div style={{ 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 20
        }}>
          {domains.map((domain) => (
            <Link
              key={domain.route}
              href={domain.route}
              style={{
                display: "block",
                padding: 24,
                background: "rgba(22, 33, 62, 0.5)",
                border: `1px solid ${domain.color}30`,
                borderRadius: 16,
                textDecoration: "none",
                transition: "all 0.2s",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = domain.color;
                e.currentTarget.style.background = "rgba(22, 33, 62, 0.8)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${domain.color}30`;
                e.currentTarget.style.background = "rgba(22, 33, 62, 0.5)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{
                position: "absolute",
                top: 16,
                right: 16,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22C55E",
                boxShadow: "0 0 8px #22C55E"
              }} />
              
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: `${domain.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <domain.icon style={{ width: 24, height: 24, color: domain.color }} />
                </div>
                <div>
                  <h3 style={{ color: "white", fontSize: 18, fontWeight: 700, margin: "0 0 4px" }}>
                    {domain.label}
                  </h3>
                  <span style={{
                    fontSize: 10,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    color: domain.color,
                    padding: "2px 8px",
                    background: `${domain.color}15`,
                    borderRadius: 4
                  }}>
                    {domain.route.substring(1)}
                  </span>
                </div>
              </div>
              
              <p style={{ color: "#a0a0a0", fontSize: 14, margin: "0 0 16px", lineHeight: 1.5 }}>
                {domain.desc}
              </p>
              
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: domain.color }}>
                <span style={{ fontSize: 13, fontWeight: 600 }}>Access Domain</span>
                <ArrowRight style={{ width: 16, height: 16 }} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* White-Label Info */}
      <div style={{
        padding: 32,
        background: "rgba(233, 69, 96, 0.05)",
        borderRadius: 16,
        border: "1px solid rgba(233, 69, 96, 0.2)",
        marginBottom: 48
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
          <Mountain style={{ width: 32, height: 32, color: "#e94560", flexShrink: 0 }} />
          <div>
            <h3 style={{ color: "white", fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>
              RockNext White-Label Platform
            </h3>
            <p style={{ color: "#a0a0a0", fontSize: 14, lineHeight: 1.6, margin: "0 0 16px" }}>
              This platform is a fully branded white-label deployment of JamZia Networks™ Stealth Layer Architecture. 
              RockNext operates on the same validated, real-time infrastructure while maintaining complete brand independence.
            </p>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              <div>
                <span style={{ color: "#e94560", fontSize: 12, fontWeight: 600 }}>Brand Owner:</span>
                <span style={{ color: "white", fontSize: 14, marginLeft: 8 }}>RockNext</span>
              </div>
              <div>
                <span style={{ color: "#7096D1", fontSize: 12, fontWeight: 600 }}>Powered By:</span>
                <span style={{ color: "white", fontSize: 14, marginLeft: 8 }}>JamZia Networks™</span>
              </div>
              <div>
                <span style={{ color: "#ffd700", fontSize: 12, fontWeight: 600 }}>Architecture:</span>
                <span style={{ color: "white", fontSize: 14, marginLeft: 8 }}>Stealth Layer v1.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Mandates */}
      <div style={{
        padding: 32,
        background: "rgba(0, 0, 0, 0.2)",
        borderRadius: 16,
        border: "1px solid rgba(15, 52, 96, 0.2)"
      }}>
        <h3 style={{ color: "#a0a0a0", fontSize: 12, fontWeight: 600, margin: "0 0 16px", textTransform: "uppercase", letterSpacing: 1 }}>
          Platform Mandates
        </h3>
        <ul style={{ color: "#f5f5f5", fontSize: 14, lineHeight: 2, margin: 0, paddingLeft: 20 }}>
          <li><strong>No shallow wrappers</strong> — Every route structurally coupled to backend validation</li>
          <li><strong>Real-time imperative</strong> — Continuous WebSocket connectivity to Audit Engine</li>
          <li><strong>No offline mode</strong> — UI locks on validation link severance</li>
          <li><strong>Billing coupling</strong> — Revenue throttling on domain health degradation</li>
        </ul>
      </div>
    </div>
  );
}
