import * as components from "nextra/components";
import * as nextraMdxComponents from "nextra/mdx-components";
import * as docs from "nextra-theme-docs";

export function useMDXComponents() {
  return {
    ...components,
    ...nextraMdxComponents.useMDXComponents(),
    ...docs.useMDXComponents(),
  };
}
