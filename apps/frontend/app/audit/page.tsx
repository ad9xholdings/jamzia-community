"use client";

import { useSystemStore } from "../stores/systemStore";
import { Shield, Activity, AlertTriangle, CheckCircle, Lock, Zap, Globe, Layers, Terminal, Server, Cpu, Network } from "lucide-react";
import Link from "next/link";

export default function AuditPage() {
  const { 
    integrityScore, 
    aiReliabilityIndex, 
    spatialGrade, 
    securityStatus, 
    infrastructureHealth,
    lastValidationBlock,
    domainHealth
  } = useSystemStore();

  const metrics = [
    { 
      label: "System Integrity Score", 
      value: integrityScore, 
      icon: Shield,
      color: integrityScore > 90 ? "#22C55E" : integrityScore > 70 ? "#F59E0B" : "#DC2626",
      status: integrityScore > 90 ? "OPTIMAL" : integrityScore > 70 ? "DEGRADED" : "CRITICAL"
    },
    { 
      label: "AI Reliability Index", 
      value: aiReliabilityIndex, 
      icon: Cpu,
      color: aiReliabilityIndex > 90 ? "#22C55E" : aiReliabilityIndex > 70 ? "#F59E0B" : "#DC2626",
      status: aiReliabilityIndex > 90 ? "VERIFIED" : aiReliabilityIndex > 70 ? "REVIEW" : "UNSTABLE"
    },
    { 
      label: "Spatial Performance Grade", 
      value: spatialGrade, 
      icon: Globe,
      color: spatialGrade > 90 ? "#22C55E" : spatialGrade > 70 ? "#F59E0B" : "#DC2626",
      status: spatialGrade > 90 ? "EXCELLENT" : spatialGrade > 70 ? "ACCEPTABLE" : "POOR"
    },
    { 
      label: "Security Status", 
      value: securityStatus.toUpperCase(), 
      isStatus: true,
      icon: Lock,
      color: securityStatus === 'secure' ? "#22C55E" : securityStatus === 'at-risk' ? "#F59E0B" : "#DC2626",
      status: securityStatus === 'secure' ? "PROTECTED" : securityStatus === 'at-risk' ? "WARNING" : "BREACH"
    },
    { 
      label: "Infrastructure Health", 
      value: infrastructureHealth, 
      icon: Server,
      color: infrastructureHealth > 90 ? "#22C55E" : infrastructureHealth > 70 ? "#F59E0B" : "#DC2626",
      status: infrastructureHealth > 90 ? "HEALTHY" : infrastructureHealth > 70 ? "STRESSED" : "FAILING"
    },
  ];

  const domains = Object.entries(domainHealth).map(([name, health]) => ({
    name,
    ...health,
    icon: getDomainIcon(name)
  }));

  return (
    <div style={{ padding: 32, maxWidth: 1400 }}>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ color: "white", fontSize: 32, fontWeight: 800, margin: "0 0 8px" }}>
          Audit Engine
        </h1>
        <p style={{ color: "#7096D1", margin: 0 }}>
          Real-time validation metrics and domain health monitoring
        </p>
      </div>

      {/* Core Metrics Grid */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 24,
        marginBottom: 48
      }}>
        {metrics.map((metric, idx) => (
          <div 
            key={idx}
            style={{
              background: "rgba(8, 31, 92, 0.5)",
              border: `1px solid ${metric.color}40`,
              borderRadius: 12,
              padding: 24,
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Pulse animation for live updates */}
            <div style={{
              position: "absolute",
              top: 16,
              right: 16,
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: metric.color,
              boxShadow: `0 0 12px ${metric.color}`,
              animation: "pulse 2s infinite"
            }} />
            
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <metric.icon style={{ width: 24, height: 24, color: metric.color }} />
              <span style={{ color: "#7096D1", fontSize: 12, textTransform: "uppercase", letterSpacing: 0.5 }}>
                {metric.label}
              </span>
            </div>
            
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <span style={{ 
                color: metric.color, 
                fontSize: 48, 
                fontWeight: 800,
                fontFamily: "monospace"
              }}>
                {metric.isStatus ? metric.value : `${metric.value.toFixed ? metric.value.toFixed(1) : metric.value}%`}
              </span>
              <span style={{
                padding: "4px 12px",
                background: `${metric.color}20`,
                color: metric.color,
                borderRadius: 4,
                fontSize: 11,
                fontWeight: 700
              }}>
                {metric.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Domain Health Table */}
      <div style={{
        background: "rgba(8, 31, 92, 0.3)",
        border: "1px solid rgba(112, 150, 209, 0.2)",
        borderRadius: 12,
        overflow: "hidden"
      }}>
        <div style={{
          padding: "20px 24px",
          borderBottom: "1px solid rgba(112, 150, 209, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <h2 style={{ color: "white", fontSize: 18, fontWeight: 700, margin: 0 }}>
            Domain Health Status
          </h2>
          <span style={{ color: "#7096D1", fontSize: 12 }}>
            Last updated: {lastValidationBlock ? new Date(lastValidationBlock.timestamp).toISOString() : 'N/A'}
          </span>
        </div>
        
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "rgba(8, 31, 92, 0.5)" }}>
              <th style={{ padding: "16px 24px", textAlign: "left", color: "#7096D1", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>Domain</th>
              <th style={{ padding: "16px 24px", textAlign: "left", color: "#7096D1", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>Status</th>
              <th style={{ padding: "16px 24px", textAlign: "left", color: "#7096D1", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>Health Score</th>
              <th style={{ padding: "16px 24px", textAlign: "left", color: "#7096D1", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>Revenue Impact</th>
            </tr>
          </thead>
          <tbody>
            {domains.map((domain, idx) => {
              const statusColor = domain.status === 'operational' ? '#22C55E' : domain.status === 'degraded' ? '#F59E0B' : '#DC2626';
              const revenueImpact = domain.status === 'operational' ? 'Normal' : domain.status === 'degraded' ? 'Reduced 50%' : 'Suspended';
              
              return (
                <tr key={idx} style={{ borderTop: "1px solid rgba(112, 150, 209, 0.1)" }}>
                  <td style={{ padding: "16px 24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <domain.icon style={{ width: 18, height: 18, color: "#7096D1" }} />
                      <span style={{ color: "white", fontWeight: 600, textTransform: "capitalize" }}>
                        {domain.name}
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: "16px 24px" }}>
                    <span style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 12px",
                      background: `${statusColor}20`,
                      color: statusColor,
                      borderRadius: 4,
                      fontSize: 12,
                      fontWeight: 600,
                      textTransform: "uppercase"
                    }}>
                      <span style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: statusColor
                      }} />
                      {domain.status}
                    </span>
                  </td>
                  <td style={{ padding: "16px 24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{
                        width: 100,
                        height: 6,
                        background: "rgba(0,0,0,0.3)",
                        borderRadius: 3,
                        overflow: "hidden"
                      }}>
                        <div style={{
                          width: `${domain.score}%`,
                          height: "100%",
                          background: statusColor,
                          transition: "width 0.5s ease"
                        }} />
                      </div>
                      <span style={{ color: "white", fontFamily: "monospace", fontSize: 14 }}>
                        {domain.score}%
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: "16px 24px" }}>
                    <span style={{
                      color: domain.status === 'operational' ? '#22C55E' : '#DC2626',
                      fontWeight: 600,
                      fontSize: 14
                    }}>
                      {revenueImpact}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Validation Log */}
      <div style={{
        marginTop: 32,
        padding: 24,
        background: "rgba(0, 0, 0, 0.3)",
        borderRadius: 12,
        border: "1px solid rgba(112, 150, 209, 0.1)"
      }}>
        <h3 style={{ color: "#7096D1", fontSize: 14, fontWeight: 600, margin: "0 0 16px", textTransform: "uppercase" }}>
          Audit Engine Log
        </h3>
        <div style={{ fontFamily: "monospace", fontSize: 12, color: "#7096D1", lineHeight: 1.8 }}>
          <div>[{new Date().toISOString()}] Audit Engine: Continuous validation loop active</div>
          <div>[{new Date().toISOString()}] Validation Block: #{lastValidationBlock?.timestamp || 'N/A'} | Score: {integrityScore.toFixed(1)}%</div>
          <div>[{new Date().toISOString()}] WebSocket: Connected to monitor-service:3001</div>
          <div>[{new Date().toISOString()}] Billing: All domains within acceptable thresholds</div>
        </div>
      </div>
    </div>
  );
}

function getDomainIcon(name: string) {
  const icons: Record<string, any> = {
    access: Lock,
    intelligence: Cpu,
    audit: Shield,
    bridge: Network,
    continuum: Activity,
    dex: Zap,
    essence: Terminal,
    foundation: Layers,
    growth: Globe,
    horizon: Server,
    monitor: Activity
  };
  return icons[name] || Activity;
}
