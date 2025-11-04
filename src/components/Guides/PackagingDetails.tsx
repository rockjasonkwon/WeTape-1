import React from "react";
import styles from "./packagingdetails.module.css";

export default function PackagingDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Packaging Details</h1>
        </div>
      </div>

      <div className={styles.containerInfoSection}>
        <p className={styles.containerText}>
          20ft export container : 38,400 units / 40ft export container : 81,600 units / 40ft HC export container : 98,400 units
        </p>
      </div>

      <div className={styles.packImageSection}>
        <picture>
          <source media="(max-width: 768px)" srcSet="/assets/guides/mobile/pack.png" />
          <img
            src="/assets/guides/pack.png"
            alt="Packaging"
            className={styles.packImage}
          />
        </picture>
      </div>
    </div>
  );
}
