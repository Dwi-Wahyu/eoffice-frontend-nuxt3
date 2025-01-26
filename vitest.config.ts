import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"), // Pastikan path sesuai dengan struktur proyek
      "@": path.resolve(__dirname, "./"), // Tambahkan alias jika menggunakan @
    },
  },
  test: {
    include: ["tests/**/*.test.ts"],
  },
});
