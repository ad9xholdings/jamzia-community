"use client";

import { useSystemStore } from "../stores/systemStore";
import { Shield, Activity, Lock, Server, Cpu, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export default function RockNextAudit() {
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
    { label: "System Integrity", value: integrityScore, icon: Shield, color: integrityScore > 90 ? "#22C55E" : integrityScore > 70 ? "#F59E0B" : "#e94560" },
    { label: "AI Reliability", value: aiReliabilityIndex, icon: Cpu, color: aiReliabilityIndex > 90 ? "#22C55E" : aiReliabilityIndex > 70 ? "#F59E0B" : "#e94560" },
    { label: "Spatial Grade", value: spatialGrade, icon: Activity, color: spatialGrade > 90 ? "#22C55E" : spatialGrade > 70 ? "#F59E0B" : "#e94560" },
    { label: "Security Status", value: securityStatus.toUpperCase(), isStatus: true, icon: Lock, color: securityStatus === 'secure' ? "#22C55E" : securityStatus === 'at-risk' ? "#F59E0B" : "#e94560" },
    { label: "Infrastructure", value: infrastructureHealth, icon: Server, color: infrastructureHealth > 90 ? "#22C55E" : infrastructureHealth > 70 ? "#F59E0B" : "#e94560" },
  ];

  return (
    <div style={{ padding: 32, maxWidth: 1400 }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
          <Shield style={{ width: 32, height: 32, color: "#ffd700" }} />
          <h1 style={{ color: "white", fontSize: 32, fontWeight: 800, margin: 0 }}>
            RockNext Audit Engine
          </h1>
        </div>
        <p style={{ color: "#a0a0a0", margin: 0 }}>
          Real-time validation metrics — Powered by <span style={{ color: "#7096D1" }}>JamZia Networks™</span>
        </p>
      </div>

      {/* Metrics Grid */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 20,
        marginBottom: 32
      }}>
        {metrics.map((metric, idx) => (
          <div 
            key={idx}
            style={{
              background: "rgba(22, 33, 62, 0.5)",
              border: `1px solid ${metric.color}40`,
              borderRadius: 12,
              padding: 20,
              position: "relative"
            }}
          >
            <div style={{
              position: "absolute",
              top: 12,
              right: 12,
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: metric.color,
              boxShadow: `0 0 12px ${metric.color}`,
              animation: "pulse 2s infinite"
            }} />
            
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <metric.icon style={{ width: 20, height: 20, color: metric.color }} />
              <span style={{ color: "#a0a0a0", fontSize: 11, textTransform: "uppercase", letterSpacing: 0.5 }}>
                {metric.label}
              </span>
            </div>
            
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <span style={{ color: metric.color, fontSize: 36, fontWeight: 800, fontFamily: "monospace" }}>
                {metric.isStatus ? metric.value : `${metric.value.toFixed ? metric.value.toFixed(1) : metric.value}%`}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Domain Health */}
      <div style={{
        background: "rgba(22, 33, 62, 0.3)",
        border: "1px solid rgba(15, 52, 96, 0.3)",
        borderRadius: 12,
        overflow: "hidden"
      }}>
        <div style={{
          padding: "20px 24px",
          borderBottom: "1px solid rgba(15, 52, 96, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <h2 style={{ color: "white", fontSize: 16, fontWeight: 700, margin: 0 }}>
            Domain Health Status
          </h2>
          <span style={{ color: "#a0a0a0", fontSize: 12 }}>
            Last update: {lastValidationBlock ? new Date(lastValidationBlock.timestamp).toLocaleTimeString() : 'N/A'}
          </span>
        </div>
        
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "rgba(22, 33, 62, 0.5)" }}>
              <th style={{ padding: "14px 24px", textAlign: "left", color: "#a0a0a0", fontSize: 11, fontWeight: 600, textTransform: "uppercase" }}>Domain</th>
              <th style={{ padding: "14px 24px", textAlign: "left", color: "#a0a0a0", fontSize: 11, fontWeight: 600, textTransform: "uppercase" }}>Status</th>
              <th style={{ padding: "14px 24px", textAlign: "left", color: "#a0a0a0", fontSize: 11, fontWeight: 600, textTransform: "uppercase" }}>Health Score</th>
              <th style={{ padding: "14px 24px", textAlign: "left", color: "#a0a0a0", fontSize: 11, fontWeight: 600, textTransform: "uppercase" }}>Billing Status</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(domainHealth).map(([domain, health], idx) => {
              const statusColor = health.status === 'operational' ? '#22C55E' : health.status === 'degraded' ? '#F59E0B' : '#e94560';
              const billingStatus = health.status === 'operational' ? 'Active' : health.status === 'degraded' ? 'Throttled 50%' : 'Suspended';
              
              return (
                <tr key={idx} style={{ borderTop: "1px solid rgba(15, 52, 96, 0.2)" }}>
                  <td style={{ padding: "14px 24px" }}>
                    <span style={{ color: "white", fontWeight: 600, textTransform: "capitalize" }}>
                      {domain}
                    </span>
                  </td>
                  <td style={{ padding: "14px 24px" }}>
                    <span style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "4px 10px",
                      background: `${statusColor}20`,
                      color: statusColor,
                      borderRadius: 4,
                      fontSize: 11,
                      fontWeight: 600,
                      textTransform: "uppercase"
                    }}>
                      {health.status === 'operational' ? <CheckCircle style={{ width: 12, height: 12 }} /> :
                       health.status === 'degraded' ? <AlertTriangle style={{ width: 12, height: 12 }} /> :
                       <XCircle style={{ width: 12, height: 12 }} />}
                      {health.status}
                    </span>
                  </td>
                  <td style={{ padding: "14px 24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{
                        width: 80,
                        height: 6,
                        background: "rgba(0,0,0,0.3)",
                        borderRadius: 3,
                        overflow: "hidden"
                      }}>
                        <div style={{
                          width: `${health.score}%`,
                          height: "100%",
                          background: statusColor,
                          transition: "width 0.5s ease"
                        }} />
                      </div>
                      <span style={{ color: "white", fontFamily: "monospace", fontSize: 13 }}>
                        {health.score}%
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: "14px 24px" }}>
                    <span style={{
                      color: health.status === 'operational' ? '#22C55E' : '#e94560',
                      fontWeight: 600,
                      fontSize: 13
                    }}>
                      {billingStatus}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
