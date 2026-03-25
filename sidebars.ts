import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: "category",
      label: "Introduction",
      collapsed: false,
      items: [
        "introduction/getting-started",
        "introduction/theory-of-change",
        "introduction/evidence-overview",
        "introduction/blockchain-basics",
      ],
    },
    {
      type: "category",
      label: "User Guide",
      collapsed: false,
      items: [
        "user-guide/canvas-overview",
        "user-guide/ai-generation",
        "user-guide/manual-editing",
        "user-guide/evidence-search",
        "user-guide/evidence-detail",
        "user-guide/saving-sharing",
        "user-guide/hypercerts",
        "user-guide/wallet-connection",
        "user-guide/best-practices",
      ],
    },
    {
      type: "category",
      label: "Reference",
      collapsed: true,
      items: [
        "reference/effect-categories",
        "reference/strength-of-evidence",
        "reference/glossary",
      ],
    },
  ],
};

export default sidebars;
