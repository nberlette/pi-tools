import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head, Image } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import logo from "../public/img/logo.png";
import config from "../site.config.ts";
import "./global.css";

const { docsRepositoryBase } = config;

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="">
        <meta
          name="description"
          content="Snippets and scripts for overclocking the Raspberry Pi 4B/400 and 5B/500/500+!"
        />
        <meta
          name="og:description"
          content="Snippets and scripts for overclocking the Raspberry Pi 4B/400 and 5B/500/500+!"
        />
        <meta
          name="og:image"
          content="https://pi.berlette.com/img/og.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://pi.berlette.com/img/og.png"
        />
        <meta
          name="twitter:site:domain"
          content="pi.berlette.com"
        />
        <meta name="twitter:url" content="https://pi.berlette.com" />
        <meta name="apple-mobile-web-app-title" content="pi-tools" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/img/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/img/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon-16x16.png"
        />
        <meta
          name="msapplication-TileImage"
          content="/img/ms-icon-144x144.png"
        />
      </Head>
      <body>
        <Layout
          pageMap={await getPageMap()}
          docsRepositoryBase={docsRepositoryBase}
          editLink="Edit on GitHub"
        >
          <Banner storageKey="pi-tools-500plus-announcement">
            <a href="/boards/500plus" target="_blank" rel="noopener">
              🎁 The Pi 500+ has landed &mdash; check it out in the{" "}
              <strong>boards</strong> section!
            </a>
          </Banner>
          <Navbar
            logo={
              <Image
                src={logo}
                alt="pi-tools"
                height={48}
              />
            }
          />
          <main id="main-content">
            {children}
          </main>
          <Footer
            style={{ clear: "both", display: "block", marginTop: "8rem" }}
          >
            <p>
              <strong>
                Copyright © 2020-{new Date().getFullYear()}{" "}
                <a
                  href="https://github.com/nberlette"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  Nicholas Berlette
                </a>. All rights reserved.
              </strong>
            </p>
            <p>
              <small>
                This site and its content are licensed under the{" "}
                <a
                  href="https://nick.mit-license.org/2020"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MIT License
                </a>.
              </small>
            </p>
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
