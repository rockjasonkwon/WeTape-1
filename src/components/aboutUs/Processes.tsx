import React from "react";
import styles from "./process.module.css";

export default function ProcessesPage() {
  return (
    <div id="processes">
      <div className={styles.redBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Processes</h1>
          <p className={styles.bannerSubtitle}>
            We Carry Out All Processes In-House.
          </p>
        </div>
      </div>
      <div className={styles.heroImage}></div>
    </div>
  );
}
