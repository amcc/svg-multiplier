import * as React from "react";
import { SvgLayout } from "../components/SvgLayout";

// markup
const IndexPage = () => {
  const rows = 100;

  return (
    <main>
      <title>SVG multiplier</title>
      <SvgLayout n={rows} />
    </main>
  );
};

export default IndexPage;
