"use client";

import { Zap, TrendingUp, DollarSign, Activity } from "lucide-react";

export default function DexPage() {
  return (
    <div style={{ padding: 32, maxWidth: 1400 }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
          <Zap style={{ width: 32, height: 32, color: "#FBBF24" }} />
          <h1 style={{ color: "white", fontSize: 32, fontWeight: 800, margin: 0 }}>
            DEX Engine
          </h1>
        </div>
        <p style={{ color: "#7096D1", margin: 0 }}>
          Decentralized exchange core with real-time validation
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
          border: "1px solid rgba(251, 191, 36, 0.2)"
        }}>
          <TrendingUp style={{ width: 24, height: 24, color: "#FBBF24", marginBottom: 12 }} />
          <h3 style={{ color: "white", fontWeight: 600, margin: "0 0 8px" }}>Trading Volume</h3>
          <p style={{ color: "#7096D1", fontSize: 14, margin: 0 }}>24h: $2.4M validated</p>
        </div>
        <div style={{
          padding: 24,
          background: "rgba(8, 31, 92, 0.3)",
          borderRadius: 16,
          border: "1px solid rgba(251, 191, 36, 0.2)"
        }}>
          <DollarSign style={{ width: 24, height: 24, color: "#FBBF24", marginBottom: 12 }} />
          <h3 style={{ color: "white", fontWeight: 600, margin: "0 0 8px" }}>Liquidity Pool</h3>
          <p style={{ color: "#7096D1", fontSize: 14, margin: 0 }}>$12.8M TVL across 8 pools</p>
        </div>
        <div style={{
          padding: 24,
          background: "rgba(8, 31, 92, 0.3)",
          borderRadius: 16,
          border: "1px solid rgba(251, 191, 36, 0.2)"
        }}>
          <Activity style={{ width: 24, height: 24, color: "#FBBF24", marginBottom: 12 }} />
          <h3 style={{ color: "white", fontWeight: 600, margin: "0 0 8px" }}>Transactions</h3>
          <p style={{ color: "#7096D1", fontSize: 14, margin: 0 }}>1,847 txns validated (24h)</p>
        </div>
      </div>
    </div>
  );
}
