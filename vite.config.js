import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  // 여기서 내 깃헙 레포 이름을 똑같이 적어준다
  base: "/TimeConverter/",
  plugins: [react(), jsconfigPaths()],
});
