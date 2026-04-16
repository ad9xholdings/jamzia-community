"use client";

import { Activity, Shield, Cpu, Network, Lock, Zap, Globe, Layers, Terminal, Server, Fingerprint, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const domains = [
  { 
    route: "/access", 
    label: "Access Control", 
    icon: Lock, 
    color: "#DC2626",
    desc: "Identity & authentication gateway",
    status: "operational"
  },
  { 
    route: "/intelligence", 
    label: "Intelligence", 
    icon: Cpu, 
    color: "#7096D1",
    desc: "AI validation pipeline",
    status: "operational"
  },
  { 
    route: "/audit", 
    label: "Audit Engine", 
    icon: Shield, 
    color: "#F59E0B",
    desc: "Continuous validation metrics",
    status: "operational"
  },
  { 
    route: "/bridge", 
    label: "Bridge Layer", 
    icon: Network, 
    color: "#10B981",
    desc: "Cross-domain data routing",
    status: "operational"
  },
  { 
    route: "/continuum", 
    label: "Continuum", 
    icon: Activity, 
    color: "#8B5CF6",
    desc: "Real-time event streaming",
    status: "operational"
  },
  { 
    route: "/dex", 
    label: "DEX Engine", 
    icon: Zap, 
    color: "#FBBF24",
    desc: "Decentralized exchange core",
    status: "operational"
  },
  { 
    route: "/essence", 
    label: "Essence", 
    icon: Fingerprint, 
    color: "#EC4899",
    desc: "User identity & reputation",
    status: "operational"
  },
  { 
    route: "/foundation", 
    label: "Foundation", 
    icon: Layers, 
    color: "#14B8A6",
    desc: "Core infrastructure layer",
    status: "operational"
  },
  { 
    route: "/growth", 
    label: "Growth", 
    icon: Globe, 
    color: "#3B82F6",
    desc: "Expansion & analytics",
    status: "operational"
  },
  { 
    route: "/horizon", 
    label: "Horizon", 
    icon: Terminal, 
    color: "#6B7280",
    desc: "Future protocol development",
    status: "operational"
  },
  { 
    route: "/monitor", 
    label: "Monitor", 
    icon: Server, 
    color: "#22C55E",
    desc: "System observability",
    status: "operational"
  },
];

export default function HomePage() {
  return (
    <div style={{ padding: 48, maxWidth: 1400 }}>
      {/* Hero Section */}
      <div style={{ 
        textAlign: "center", 
        marginBottom: 64,
        padding: "48px 32px",
        background: "linear-gradient(135deg, rgba(8, 31, 92, 0.8) 0%, rgba(0, 0, 0, 0.5) 100%)",
        borderRadius: 24,
        border: "1px solid rgba(112, 150, 209, 0.3)"
      }}>
        <Activity style={{ width: 64, height: 64, color: "#F7F2EB", margin: "0 auto 24px" }} />
        <h1 style={{ 
          color: "white", 
          fontSize: 48, 
          fontWeight: 800, 
          margin: "0 0 16px",
          letterSpacing: "-0.02em"
        }}>
          JamZia Networks™
        </h1>
        <p style={{ 
          color: "#D0E3FF", 
          fontSize: 20, 
          margin: "0 0 8px"
        }}>
          The Everything App
        </p>
        <p style={{ 
          color: "#7096D1", 
          fontSize: 14,
          fontFamily: "monospace",
          letterSpacing: 1
        }}>
          STEALTH LAYER ARCHITECTURE v1.0
        </p>
        <div style={{ 
          marginTop: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
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
              Link Established
            </span>
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
            background: "rgba(245, 158, 11, 0.1)",
            border: "1px solid rgba(245, 158, 11, 0.3)",
            borderRadius: 8
          }}>
            <CheckCircle style={{ width: 14, height: 14, color: "#F59E0B" }} />
            <span style={{ color: "#F59E0B", fontSize: 12, fontWeight: 600 }}>
              Audit Engine Active
            </span>
          </div>
        </div>
      </div>

      {/* Domain Grid */}
      <div style={{ marginBottom: 48 }}>
        <h2 style={{ 
          color: "white", 
          fontSize: 24, 
          fontWeight: 700, 
          margin: "0 0 24px",
          display: "flex",
          alignItems: "center",
          gap: 12
        }}>
          <Shield style={{ width: 24, height: 24, color: "#7096D1" }} />
          Core Domains
        </h2>
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
                background: "rgba(8, 31, 92, 0.3)",
                border: `1px solid ${domain.color}30`,
                borderRadius: 16,
                textDecoration: "none",
                transition: "all 0.2s",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = domain.color;
                e.currentTarget.style.background = "rgba(8, 31, 92, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${domain.color}30`;
                e.currentTarget.style.background = "rgba(8, 31, 92, 0.3)";
              }}
            >
              {/* Status indicator */}
              <div style={{
                position: "absolute",
                top: 16,
                right: 16,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: domain.status === 'operational' ? '#22C55E' : domain.status === 'degraded' ? '#F59E0B' : '#DC2626',
                boxShadow: `0 0 8px ${domain.status === 'operational' ? '#22C55E' : domain.status === 'degraded' ? '#F59E0B' : '#DC2626'}`
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
              
              <p style={{ color: "#7096D1", fontSize: 14, margin: "0 0 16px", lineHeight: 1.5 }}>
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

      {/* Architecture Notes */}
      <div style={{
        padding: 32,
        background: "rgba(0, 0, 0, 0.3)",
        borderRadius: 16,
        border: "1px solid rgba(112, 150, 209, 0.2)"
      }}>
        <h3 style={{ color: "#7096D1", fontSize: 14, fontWeight: 600, margin: "0 0 16px", textTransform: "uppercase" }}>
          Architecture Mandates
        </h3>
        <ul style={{ color: "#D0E3FF", fontSize: 14, lineHeight: 2, margin: 0, paddingLeft: 20 }}>
          <li>No shallow wrappers — Every route is structurally coupled to backend validation</li>
          <li>Real-time imperative — Continuous WebSocket connectivity to Audit Engine</li>
          <li>Offline mode prohibited — UI locks on validation link severance</li>
          <li>Push notifications — Critical alerts for revenue throttling events</li>
        </ul>
      </div>
    </div>
  );
}
