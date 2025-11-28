import process from "node:process";
import type { NextraConfig } from "nextra";

const contentDirBasePath = process.env.NEXT_PUBLIC_CONTENT_DIR_BASE_PATH || "/";

const nextraConfig = {
  defaultShowCopyCode: true,
  mdxOptions: {
    format: "mdx",
    rehypePrettyCodeOptions: {
      defaultLang: "bash",
    },
  },
  readingTime: true,
  staticImage: true,
  contentDirBasePath,
  search: true,
} satisfies NextraConfig;

export default nextraConfig;
