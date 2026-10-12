import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.ecossistemamontanha.hybridtraining",
  appName: "Montanha Hybrid Training",
  webDir: ".output/public",
  backgroundColor: "#0F172A",
  server: {
    url: process.env.CAPACITOR_SERVER_URL || "https://montanha-hybrid-training.vercel.app",
    cleartext: false,
    androidScheme: "https",
  },
  android: {
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: process.env.NODE_ENV !== "production",
  },
};

export default config;
