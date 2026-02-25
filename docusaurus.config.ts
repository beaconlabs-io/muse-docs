import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Muse Documentation",
  tagline: "Evidence-Based Impact Planning with Theory of Change",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://docs.muse.beaconlabs.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "beaconlabs-io",
  projectName: "muse",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    localeConfigs: {
      en: {
        label: "English",
        htmlLang: "en-US",
      },
      ja: {
        label: "日本語",
        htmlLang: "ja",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/beaconlabs-io/docs-muse/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    async function tailwindPlugin(_context, _options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/canvas-og.png",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Muse",
      logo: {
        alt: "Beacon Labs Logo",
        src: "img/beaconlabs.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "mainSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://muse.beaconlabs.io",
          label: "Launch App",
          position: "right",
        },
        {
          href: "https://github.com/beaconlabs-io/muse",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "/docs/introduction/getting-started",
            },
            {
              label: "User Guide",
              to: "/docs/user-guide/canvas-overview",
            },
          ],
        },
        {
          title: "Application",
          items: [
            {
              label: "Muse App",
              href: "https://muse.beaconlabs.io",
            },
            {
              label: "Dev App",
              href: "https://dev.muse.beaconlabs.io",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "X",
              href: "https://x.com/beaconlabs_io",
            },
            {
              label: "GitHub",
              href: "https://github.com/beaconlabs-io/muse",
            },
            {
              label: "Beacon Labs",
              href: "https://beaconlabs.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Beacon Labs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
