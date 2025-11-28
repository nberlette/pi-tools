import path from "node:path";

export const config = {
  author: {
    login: "nberlette",
    name: "Nicolas Berlette",
    email: "nick@berlette.com",
    url: "https://github.com/nberlette",
    image: "https://github.com/nberlette.png?size=400",
  },
  license: {
    spdx: "MIT",
    name: "MIT License",
    url: "https://nick.mit-license.org/2020",
    year: [2020, new Date().getFullYear()],
  },
  source: {
    host: "https://github.com",
    owner: "nberlette",
    repo: "pi-tools",
    branch: "master",
    path: "/",
  },
  themeColor: {
    background: {
      hue: 216,
      saturation: 29,
      lightness: {
        light: 97,
        dark: 7,
      },
    },
    foreground: {
      hue: 211,
      saturation: 29,
      lightness: {
        light: 10,
        dark: 90,
      },
    },
  },
  logo: {
    href: "/",
    src: "./public/img/logo.svg",
    width: 120,
    height: 40,
    alt: "pi-tools logo",
    get component(): typeof import("*.svg") {
      const require = globalThis.process.getBuiltinModule("node:module")
        .createRequire(import.meta.url);
      return require(this.src);
    },
  },
  get footer() {
    const { license, author, source } = config;
    const { spdx, year: [year1, year2] } = license;
    const { host, owner, repo, branch } = source;
    const { name, url, login, image } = author;
    const years = year1 === year2 ? `${year1}` : `${year1}–${year2}`;
    let out = "";
    const copyrightLeft = `Copyright © ${years} `;
    const copyrightRight = ". All rights reserved.";
    const copyrightPlain = `${copyrightLeft}${name}${copyrightRight}`;
    let img = "";
    if (image) {
      const ext = path.extname(image).toLowerCase();
      if (
        ext === ".svg" || ext === ".png" || ext === ".jpg" || ext === ".jpeg" ||
        ext === ".gif" || ext === ".webp"
      ) {
        img =
          `<img src="${image}" alt="${name}" title="Follow the author, ${login}, on GitHub for more projects!" width="40" height="40" /> `;
      }
    }
    const link =
      `<a href="${url}" target="_blank" rel="noopener nofollow" title="Follow the author, ${login}, on GitHub for more projects!">${img}${name}</a>`;
    const copyright = `${copyrightLeft}${link}${copyrightRight}`;
    const copyrightLink =
      `<a href="${license.url}" title="${copyrightPlain}">${spdx}</a>`;
    out += `${copyrightLink} · ${copyright}\n\n`;
    const editLink =
      `<a href="${host}/${owner}/${repo}/edit/${branch}/:path" title="Suggest an edit to this page on GitHub.">Suggest improvements</a>`;
    const ghLink =
      `<a href="${host}/${owner}/${repo}" target="_blank" rel="noopener nofollow" title="View the source repository for this site on GitHub.">GitHub</a>`;
    out += `${editLink} on ${ghLink}.\n`;
    return out;
  },
  metadata: {
    title: "pi-tools",
    description:
      "Performance enhancing drugs for Raspberry Pi single board computers — now supporting the Pi 5B/500/500+ boards!",
    keywords: [
      "pi",
      "raspi",
      "raspberrypi",
      "raspberry pi",
      "raspberry pi overclock",
      "raspberry pi performance",
      "raspberry pi 4",
      "raspberry pi 4b",
      "raspberry pi 400",
      "raspberry pi 5",
      "raspberry pi 500",
      "raspberry pi 500+",
      "Pi 4",
      "Pi 4B",
      "Pi 400",
      "Pi 5",
      "Pi 5B",
      "Pi 500",
      "Pi 500+",
      "pi-tools",
      "nberlette",
      "processor performance",
      "overclocking",
      "broadcom",
      "SBC",
      "single board computer",
      "linux",
      "raspbian",
      "ubuntu",
      "performance",
      "tuning",
      "optimization",
      "open source software",
      "hardware",
      "IoT",
    ],
  },
  get docsRepositoryBase(): `${string}/${string}/${string}` {
    const { host, owner, repo } = config.source;
    return `${host}/${owner}/${repo}`;
  }
} as const;

export default config;
