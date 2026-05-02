"use client";

import { Network, ArrowRightLeft, Database, Server, Activity } from "lucide-react";

export default function BridgePage() {
  return (
    <div style={{ padding: 32, maxWidth: 1400 }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
          <Network style={{ width: 32, height: 32, color: "#10B981" }} />
          <h1 style={{ color: "white", fontSize: 32, fontWeight: 800, margin: 0 }}>
            Bridge Layer
          </h1>
        </div>
        <p style={{ color: "#7096D1", margin: 0 }}>
          Cross-domain data routing and message broker
        </p>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 24 
      }}>
        <div style={{
          padding: 24,
          background: "rgba(8, 31, 92, 0.3)",
          borderRadius: 16,
          border: "1px solid rgba(16, 185, 129, 0.2)"
        }}>
          <ArrowRightLeft style={{ width: 24, height: 24, color: "#10B981", marginBottom: 12 }} />
          <h3 style={{ color: "white", fontWeight: 600, margin: "0 0 8px" }}>Message Broker</h3>
          <p style={{ color: "#7096D1", fontSize: 14, margin: 0 }}>Active routing: 1,247 messages/min</p>
        </div>
        <div style={{
          padding: 24,
          background: "rgba(8, 31, 92, 0.3)",
          borderRadius: 16,
          border: "1px solid rgba(16, 185, 129, 0.2)"
        }}>
          <Database style={{ width: 24, height: 24, color: "#10B981", marginBottom: 12 }} />
          <h3 style={{ color: "white", fontWeight: 600, margin: "0 0 8px" }}>Data Pipeline</h3>
          <p style={{ color: "#7096D1", fontSize: 14, margin: 0 }}>Throughput: 45 MB/s validated</p>
        </div>
        <div style={{
          padding: 24,
          background: "rgba(8, 31, 92, 0.3)",
          borderRadius: 16,
          border: "1px solid rgba(16, 185, 129, 0.2)"
        }}>
          <Server style={{ width: 24, height: 24, color: "#10B981", marginBottom: 12 }} />
          <h3 style={{ color: "white", fontWeight: 600, margin: "0 0 8px" }}>Connected Services</h3>
          <p style={{ color: "#7096D1", fontSize: 14, margin: 0 }}>11 microservices linked</p>
        </div>
      </div>
    </div>
  );
}
