"use client";

import { Lock, Shield, AlertCircle, CheckCircle, Users, Key, Fingerprint } from "lucide-react";

export default function AccessPage() {
  return (
    <div style={{ padding: 32, maxWidth: 1400 }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
          <Lock style={{ width: 32, height: 32, color: "#DC2626" }} />
          <h1 style={{ color: "white", fontSize: 32, fontWeight: 800, margin: 0 }}>
            Access Control
          </h1>
        </div>
        <p style={{ color: "#7096D1", margin: 0 }}>
          Identity & authentication gateway — structural validation required
        </p>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 24 
      }}>
        {/* Authentication Status */}
        <div style={{
          padding: 24,
          background: "rgba(8, 31, 92, 0.3)",
          borderRadius: 16,
          border: "1px solid rgba(220, 38, 38, 0.2)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <Shield style={{ width: 24, height: 24, color: "#22C55E" }} />
            <span style={{ color: "#22C55E", fontWeight: 600 }}>Authenticated</span>
          </div>
          <p style={{ color: "#7096D1", fontSize: 14, margin: 0 }}>
            Session validated via Audit Engine. Continuous re-validation every 60 seconds.
          </p>
        </div>

        {/* Identity Verification */}
        <div style={{
          padding: 24,
          background: "rgba(8, 31, 92, 0.3)",
          borderRadius: 16,
          border: "1px solid rgba(112, 150, 209, 0.2)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <Fingerprint style={{ width: 24, height: 24, color: "#7096D1" }} />
            <span style={{ color: "white", fontWeight: 600 }}>Identity Verified</span>
          </div>
          <p style={{ color: "#7096D1", fontSize: 14, margin: 0 }}>
            Multi-factor identity binding active. Biometric hash: 0x7f8a9b...
          </p>
        </div>

        {/* Active Sessions */}
        <div style={{
          padding: 24,
          background: "rgba(8, 31, 92, 0.3)",
          borderRadius: 16,
          border: "1px solid rgba(112, 150, 209, 0.2)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <Users style={{ width: 24, height: 24, color: "#7096D1" }} />
            <span style={{ color: "white", fontWeight: 600 }}>Active Sessions: 1</span>
          </div>
          <p style={{ color: "#7096D1", fontSize: 14, margin: 0 }}>
            Current session: Web Browser • IP: Validated • Location: Verified
          </p>
        </div>

        {/* API Keys */}
        <div style={{
          padding: 24,
          background: "rgba(8, 31, 92, 0.3)",
          borderRadius: 16,
          border: "1px solid rgba(112, 150, 209, 0.2)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <Key style={{ width: 24, height: 24, color: "#7096D1" }} />
            <span style={{ color: "white", fontWeight: 600 }}>API Access</span>
          </div>
          <p style={{ color: "#7096D1", fontSize: 14, margin: 0 }}>
            No API keys generated. Access this domain via validated WebSocket only.
          </p>
        </div>
      </div>
    </div>
  );
}
