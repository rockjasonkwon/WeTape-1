import React from "react";
import styles from "./bbtape.module.css";

export default function BBTapePage() {
  return (
    <div id="bb-tape">
      <div className={styles.redBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>BB TAPE</h1>
        </div>
      </div>

      <div className={styles.descriptionSection}>
        <p className={styles.description}>
          BB Tape is a Kinesiology tape made of 97% cotton and 3% nylon.
          <br />
          It provides all-day therapeutic effects while you work, exercise or
          play sports.
        </p>
      </div>

      <div className={styles.featuresSection}>
        <div className={styles.circularDiagram}></div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.textContent}>
          <h2 className={styles.sectionTitle}>
            This is a simple method
            <br />
            for winning the games.
          </h2>
          <p className={styles.sectionText}>
            Taping is simple but provides immediate muscle pain relief and
            injury prevention. In our R&D center, the experts are constantly
            developing how to apply our tape.
          </p>
        </div>

        <div className={styles.imageGrid}>
          <div className={styles.imageWrapper}>
            <img
              src="/assets/about/model.png"
              alt="BB Tape Application"
              className={styles.mainImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
