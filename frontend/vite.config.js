import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { THEMES } from "./src/components/constants";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  themes: { THEMES },
});
