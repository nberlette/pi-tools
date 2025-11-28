import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents } from "../../mdx-components.tsx";
import type { Metadata } from "next";

export const generateStaticParams = generateStaticParamsFor("path");

const Wrapper = useMDXComponents().wrapper;

export interface MdxPageProps {
  params: Promise<{ path: string[] }>;
  children?: React.ReactNode;

  [key: string]: unknown;
}

export async function generateMetadata(props: MdxPageProps): Promise<Metadata> {
  const params = await props.params;
  const { metadata } = await importPage(params.path);
  return {
    applicationName: metadata.applicationName || "pi-tools",
    authors: [
      {
        name: "Nicholas Berlette",
        url: "https://github.com/nberlette",
      },
      ...[metadata.authors ?? []].flat(),
    ],
    pinterest: { richPin: true },
    metadataBase: "https://pi.berlette.com/",
    assets: "/",
    creator: "nberlette",
    publisher: "Nicholas Berlette",
    title: {
      default: "pi-tools",
      template: "%s · pi-tools",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        "index": true,
        "follow": true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    ...metadata,
  } as const satisfies Metadata;
}

export default async function PiToolsPage(props: MdxPageProps) {
  const params = await props.params;
  const result = await importPage(params.path);
  const { default: MDXContent, toc, metadata, sourceCode } = result;

  const outer = { toc, metadata, sourceCode };
  const inner = { ...props, params };

  return (
    <Wrapper {...outer}>
      <MDXContent {...inner} />
    </Wrapper>
  );
}
