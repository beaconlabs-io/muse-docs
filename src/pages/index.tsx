import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

/* ─────────────────────── Hero ─────────────────────── */

function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            <Translate id="homepage.badge">Documentation</Translate>
          </span>

          <Heading as="h1" className={styles.heroTitle}>
            Muse
          </Heading>

          <p className={styles.heroTagline}>
            <Translate id="homepage.tagline">
              Evidence-Based Impact Planning with Theory of Change
            </Translate>
          </p>

          <p className={styles.heroDescription}>
            <Translate id="homepage.description">
              Build logic models grounded in research evidence. MUSE connects
              your program design to curated evidence — powered by AI and
              verified on the blockchain.
            </Translate>
          </p>

          <div className={styles.heroActions}>
            <Link
              className={styles.btnPrimary}
              to="/docs/introduction/getting-started"
            >
              <Translate id="homepage.getStarted">Get Started</Translate>
              <span aria-hidden="true"> →</span>
            </Link>
            <Link
              className={styles.btnSecondary}
              href="https://muse.beaconlabs.io"
            >
              <Translate id="homepage.launchApp">Launch App</Translate>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ─────────────────── Features ─────────────────── */

type FeatureItem = {
  titleId: string;
  titleDefault: string;
  descId: string;
  descDefault: string;
  icon: ReactNode;
};

const features: FeatureItem[] = [
  {
    titleId: "homepage.feature.ai.title",
    titleDefault: "AI-Powered Generation",
    descId: "homepage.feature.ai.description",
    descDefault:
      "Describe your initiative and let AI generate a complete logic model — from activities to impact — in seconds.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L9.47 9.47 2 12l7.47 2.53L12 22l2.53-7.47L22 12l-7.47-2.53L12 2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    titleId: "homepage.feature.evidence.title",
    titleDefault: "Evidence-Linked Design",
    descId: "homepage.feature.evidence.description",
    descDefault:
      "Connect every causal link in your model to curated research evidence — searchable, rated by strength, and clearly explained.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3Zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9ZM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    titleId: "homepage.feature.canvas.title",
    titleDefault: "Visual Logic Model Canvas",
    descId: "homepage.feature.canvas.description",
    descDefault:
      "Drag, connect, and edit nodes on an interactive canvas. See the full causal chain from activities to outcomes to impact.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M3 3h7v7H3V3Zm0 11h7v7H3v-7ZM14 3h7v7h-7V3Zm0 11h7v7h-7v-7Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    titleId: "homepage.feature.blockchain.title",
    titleDefault: "Verified on the Blockchain",
    descId: "homepage.feature.blockchain.description",
    descDefault:
      "Mint Hypercerts to create permanent, tamper-proof impact certificates. Evidence is attested via EAS for independent verification.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4Zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

function FeatureCard({
  titleId,
  titleDefault,
  descId,
  descDefault,
  icon,
}: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIconWrap}>{icon}</div>
      <Heading as="h3" className={styles.featureTitle}>
        <Translate id={titleId}>{titleDefault}</Translate>
      </Heading>
      <p className={styles.featureDesc}>
        <Translate id={descId}>{descDefault}</Translate>
      </p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresSectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="homepage.features.title">
              Everything you need for impact planning
            </Translate>
          </Heading>
          <p className={styles.sectionSubtitle}>
            <Translate id="homepage.features.subtitle">
              From AI-powered model generation to blockchain-verified impact
              certificates — MUSE provides the full toolkit.
            </Translate>
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((f) => (
            <FeatureCard key={f.titleId} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── CTA ─────────────────── */

function CTASection() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaInner}>
          <Heading as="h2" className={styles.ctaTitle}>
            <Translate id="homepage.cta.title">
              Start building your evidence-based logic model
            </Translate>
          </Heading>
          <p className={styles.ctaDesc}>
            <Translate id="homepage.cta.description">
              No account required. Explore the canvas, generate a model with AI,
              and browse research evidence — all for free.
            </Translate>
          </p>
          <div className={styles.heroActions}>
            <Link
              className={styles.btnPrimary}
              href="https://muse.beaconlabs.io"
            >
              <Translate id="homepage.cta.launch">Try Muse Now</Translate>
              <span aria-hidden="true"> →</span>
            </Link>
            <Link
              className={styles.btnSecondary}
              to="/docs/introduction/getting-started"
            >
              <Translate id="homepage.cta.docs">Read the Docs</Translate>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Page ─────────────────── */

export default function Home(): ReactNode {
  return (
    <Layout
      title="Muse Documentation"
      description="Evidence-based impact planning with Theory of Change methodology. Build AI-powered logic models, link to research evidence, and mint blockchain-verified impact claims."
    >
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </Layout>
  );
}
