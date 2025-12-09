import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Muse Documentation Sidebar
 *
 * Three main sections:
 * 1. Introduction - Foundational concepts for all users
 * 2. User Guide - Step-by-step workflows for end users
 * 3. Developer Documentation - Technical deep-dives for contributors
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: "category",
      label: "Introduction",
      collapsed: false,
      items: [
        "introduction/getting-started",
        // "introduction/theory-of-change",
        // "introduction/evidence-methodology",
        // "introduction/blockchain-hypercerts",
      ],
    },
    // {
    //   type: "category",
    //   label: "User Guide",
    //   collapsed: false,
    //   items: [
    //     "user-guide/creating-logic-model",
    //     "user-guide/ai-generation",
    //     "user-guide/working-with-evidence",
    //     "user-guide/browsing-evidence",
    //     "user-guide/contributing-evidence",
    //     "user-guide/saving-sharing",
    //     "user-guide/minting-hypercerts",
    //     "user-guide/viewing-hypercerts",
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "Developer Documentation",
    //   collapsed: true,
    //   items: [
    //     "developers/getting-started",
    //     "developers/architecture",
    //     "developers/canvas-react-flow",
    //     "developers/mastra-ai",
    //     "developers/evidence-system",
    //     "developers/blockchain",
    //     "developers/ui-components",
    //     "developers/mdx-configuration",
    //     "developers/api-routes",
    //     "developers/contributing",
    //     "developers/deployment",
    //     "developers/troubleshooting",
    //   ],
    // },
  ],
};

export default sidebars;
