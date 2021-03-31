import React from "react";

import * as styles from "./SvgCircle.module.scss";

const SvgCircle = ({ n }) => {
  return (
    <div className={styles.svgCircle} style={{ "--order": n }}>
      <div className={`${styles.isolate} ${styles.container}`}>
        <svg
          width="500"
          height="500"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ "--order": n }}
        >
          <g id="Frame 1">
            <g className={styles.red}>
              <circle
                className={`${styles.redCircle} ${styles.circle}`}
                cx="285"
                cy="250"
                r="200"
                fill="#FF0000"
                // shapeRendering="crispEdges"
              />
            </g>
            <g className={styles.green}>
              <circle
                className={`${styles.greenCircle} ${styles.circle}`}
                cx="265"
                cy="250"
                r="200"
                fill="#00FF00"
                // shapeRendering="crispEdges"
              />
            </g>
            <g className={styles.blue}>
              <circle
                className={`${styles.blueCircle} ${styles.circle}`}
                cx="295"
                cy="250"
                r="200"
                fill="#0000FF"
                // shapeRendering="crispEdges"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export { SvgCircle };
