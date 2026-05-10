import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const configDir = path.dirname(fileURLToPath(import.meta.url));

/** When Next is launched with cwd above this folder (e.g. `next dev ./mariana-portfolio`), CSS resolves bare imports like `tailwindcss` from the wrong directory unless module roots include this app's node_modules. */
const localNodeModules = path.join(configDir, "node_modules");

const nextConfig: NextConfig = {
  turbopack: {
    root: configDir,
    resolveAlias: {
      tailwindcss: path.join(localNodeModules, "tailwindcss"),
      "@tailwindcss/postcss": path.join(localNodeModules, "@tailwindcss", "postcss"),
    },
  },
  webpack: (config) => {
    config.resolve = config.resolve ?? {};
    const normalizedLocal = path.normalize(localNodeModules);
    const modules = config.resolve.modules;
    const base = Array.isArray(modules) ? [...modules] : ["node_modules"];
    if (
      base[0] &&
      path.normalize(base[0] as string) === normalizedLocal
    ) {
      return config;
    }
    const filtered = base.filter(
      (m) => path.normalize(m as string) !== normalizedLocal,
    );
    config.resolve.modules = [localNodeModules, ...filtered];
    return config;
  },
};

export default nextConfig;
