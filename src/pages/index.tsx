import type { ReactNode } from "react";
import { Redirect } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

// The site has no landing page: `/` (and `/en/`) open the first doc.
export default function Home(): ReactNode {
  return <Redirect to={useBaseUrl("/docs/introduction/getting-started")} />;
}
