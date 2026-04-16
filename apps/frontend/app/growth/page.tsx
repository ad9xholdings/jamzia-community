"use client";

import { Globe, ChartBar, Users, Activity, TrendingUp } from "lucide-react";

export default function GrowthPage() {
  return (
    <div style={{ padding: 32, maxWidth: 1400 }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
          <Globe style={{ width: 32, height: 32, color: "#3B82F6" }} />
          <h1 style={{ color: "white", fontSize: 32, fontWeight: 800, margin: 0 }}>
            Growth
          </h1>
        </div>
        <p style={{ color: "#7096D1", margin: 0 }}>
          Expansion analytics and network growth metrics
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
          border: "1px solid rgba(59, 130, 246, 0.2)"
        }}>
          <Users style={{ width: 24, height: 24, color: "#3B82F6", marginBottom: 12 }} />
          <h3 style={{ color: "white", fontWeight: 600, margin: "0 0 8px" }}>Total Users</h3>
          <p style={{ color: "#7096D1", fontSize: 14, margin: 0 }}>45,231 validated accounts</p>
        </div>
        <div style={{
          padding: 24,
          background: "rgba(8, 31, 92, 0.3)",
          borderRadius: 16,
          border: "1px solid rgba(59, 130, 246, 0.2)"
        }}>
          <TrendingUp style={{ width: 24, height: 24, color: "#3B82F6", marginBottom: 12 }} />
          <h3 style={{ color: "white", fontWeight: 600, margin: "0 0 8px" }}>Growth Rate</h3>
          <p style={{ color: "#7096D1", fontSize: 14, margin: 0 }}>+24% MoM (validated)</p>
        </div>
        <div style={{
          padding: 24,
          background: "rgba(8, 31, 92, 0.3)",
          borderRadius: 16,
          border: "1px solid rgba(59, 130, 246, 0.2)"
        }}>
          <ChartBar style={{ width: 24, height: 24, color: "#3B82F6", marginBottom: 12 }} />
          <h3 style={{ color: "white", fontWeight: 600, margin: "0 0 8px" }}>Network Value</h3>
          <p style={{ color: "#7096D1", fontSize: 14, margin: 0 }}>$2.4M protocol revenue</p>
        </div>
      </div>
    </div>
  );
}
