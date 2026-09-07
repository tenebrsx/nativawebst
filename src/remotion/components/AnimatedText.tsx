import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { REMOTION_THEME } from "../theme";

interface AnimatedTextProps {
  text: string;
  delay?: number;
  fontSize?: number;
  color?: string;
  highlightWords?: string[];
  highlightColor?: string;
  textAlign?: "left" | "center" | "right";
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: string;
  fontFamily?: "head" | "body";
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay = 0,
  fontSize = 42,
  color = REMOTION_THEME.colors.textLight,
  highlightWords = [],
  highlightColor = REMOTION_THEME.colors.sunYellow,
  textAlign = "center",
  fontWeight = 800,
  lineHeight = 1.15,
  letterSpacing = "-0.02em",
  fontFamily = "head",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: REMOTION_THEME.springs.snappy,
  });

  const translateY = (1 - progress) * 24;
  const opacity = progress;

  const words = text.split(" ");

  return (
    <div
      style={{
        transform: `translateY(${translateY}px)`,
        opacity,
        textAlign,
        fontFamily:
          fontFamily === "head"
            ? REMOTION_THEME.fonts.head
            : REMOTION_THEME.fonts.body,
        fontSize: `${fontSize}px`,
        fontWeight,
        lineHeight,
        letterSpacing,
        color,
        zIndex: 5,
      }}
    >
      {words.map((word, idx) => {
        // Strip punctuation for matching
        const cleanWord = word.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]/g, "");
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord.toLowerCase()
        );

        return (
          <span
            key={idx}
            style={{
              color: isHighlighted ? highlightColor : color,
              display: "inline-block",
              marginRight: "0.28em",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
