import React from "react";
import { REMOTION_THEME } from "../theme";

interface PhoneFrameProps {
  children: React.ReactNode;
  scale?: number;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, scale = 1 }) => {
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "center center",
        width: "360px",
        height: "640px",
        backgroundColor: "#0A0F1D",
        borderRadius: "44px",
        border: "6px solid #1E293B",
        boxShadow: "0 25px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.15)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top Dynamic Island / Speaker Pill */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "110px",
          height: "24px",
          backgroundColor: "#000000",
          borderRadius: "20px",
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingRight: "10px",
          gap: "6px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#1E293B",
          }}
        />
        <div
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            backgroundColor: "#0284C7",
          }}
        />
      </div>

      {/* Screen Area */}
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0F172A",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {children}
      </div>

      {/* Bottom Home Indicator Bar */}
      <div
        style={{
          position: "absolute",
          bottom: "8px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "120px",
          height: "4px",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          borderRadius: "2px",
          zIndex: 50,
        }}
      />
    </div>
  );
};
