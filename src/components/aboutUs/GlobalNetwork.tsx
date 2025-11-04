import React from "react";
import styles from "./globalnetwork.module.css";

export default function GlobalNetworkPage() {
  return (
    <div id="global-network">
      <div className={styles.redBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Our Global Network</h1>
        </div>
      </div>

      <div className={styles.heroImage}></div>
    </div>
  );
}
