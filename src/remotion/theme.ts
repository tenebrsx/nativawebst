import { loadFont as loadMontserrat } from "@remotion/google-fonts/Montserrat";
import { loadFont as loadOpenSans } from "@remotion/google-fonts/OpenSans";

// Load Google Fonts for Remotion Canvas
const { fontFamily: fontHead } = loadMontserrat("normal", {
  weights: ["700", "900"],
  subsets: ["latin"],
  ignoreTooManyRequestsWarning: true,
});

const { fontFamily: fontBody } = loadOpenSans("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
  ignoreTooManyRequestsWarning: true,
});

export const REMOTION_THEME = {
  colors: {
    sand: "#FAF7F2",
    surface: "#FFFFFF",
    foam: "#F3EDE2",
    border: "#EAE4D8",
    trenchNavy: "#0A1128",
    navyMid: "#1C2541",
    grayMuted: "#6B7280",
    textLight: "#F8FAFC",
    sunYellow: "#FFB703",
    sunDark: "#FB8500",
    coralBlue: "#0EA5E9",
    coralLight: "#E0F2FE",
    leadPing: "#25D366",
    whatsappDark: "#005C4B",
    whatsappShell: "#111B21",
    whatsappHeader: "#202C33",
    badRed: "#EF4444",
    goodGreen: "#10B981",
  },
  fonts: {
    head: fontHead || "Montserrat, system-ui, sans-serif",
    body: fontBody || "Open Sans, system-ui, sans-serif",
  },
  springs: {
    snappy: { damping: 14, stiffness: 140, mass: 0.8 },
    smooth: { damping: 18, stiffness: 90, mass: 1 },
    bouncy: { damping: 10, stiffness: 120, mass: 0.9 },
    gentle: { damping: 20, stiffness: 60, mass: 1.2 },
  },
};
