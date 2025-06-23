import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync("ssl-localhost/localhost.key"),
      cert: fs.readFileSync("ssl-localhost/localhost.crt"),
    },
    port: 5173,
  },
});
