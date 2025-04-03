import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 👇👇 Polyfill de Web Crypto para evitar errores en Netlify
import { Crypto } from "@peculiar/webcrypto";
globalThis.crypto = new Crypto();

export default defineConfig({
	plugins: [react()],
});
