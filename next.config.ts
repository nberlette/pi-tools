import nextra from "nextra";
import process from "node:process";
import nextraConfig from "./theme.config.ts";

const env = process.env || {} as never;
const theme = env.NEXT_PUBLIC_NEXTRA_THEME ||= "nextra-theme-docs";
const debug = env.NODE_ENV !== "production";
const assetPrefix = env.NEXT_PUBLIC_ASSET_PREFIX || (debug ? "" : "/");

const withNextra = nextra(nextraConfig);

export default withNextra({
  assetPrefix,
  compiler: {},
  compress: true,
  experimental: {
    ''
  },
  output: "export",
});
