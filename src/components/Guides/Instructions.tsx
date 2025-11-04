import React from "react";
import styles from "./instructions.module.css";

export default function Instructions() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftSection}>
            <h1 className={styles.title}>INSTRUCTIONS</h1>
          </div>

          <div className={styles.rightSection}>
            <p className={styles.text}>
              For the best results, please read the
              <br />
              BB TAPE instructions before applying.
            </p>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.furtherButton}>
            Check Out Further Instructions
            <span className={styles.arrow}>→</span>
          </button>
        </div>
      </div>

      <div className={styles.useCaseImageSection}>
        <picture>
          <source media="(max-width: 768px)" srcSet="/assets/guides/mobile/useCase.png" />
          <img
            src="/assets/guides/useCase.png"
            alt="Use Case"
            className={styles.useCaseImage}
          />
        </picture>
      </div>
    </div>
  );
}
