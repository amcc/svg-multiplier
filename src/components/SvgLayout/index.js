import React from "react";
import { SvgCircle } from "../SvgCircle";
import * as styles from "./SvgLayout.module.scss";

const SvgLayout = ({ n }) => {
  console.log("n is", n);
  const createElements = (n) => {
    var elements = [];
    for (let i = 0; i < n; i++) {
      elements.push(<SvgCircle key={i} n={i} />);
    }
    return elements;
  };

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>{createElements(n)}</div>
    </div>
  );
};

export { SvgLayout };
