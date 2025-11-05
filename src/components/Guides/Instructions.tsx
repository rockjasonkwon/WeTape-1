import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styles from "./instructions.module.css";

export default function Instructions() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftSection}>
            <h1 className={styles.title}>Instructions</h1>
          </div>

          <div className={styles.rightSection}>
            <p className={styles.text}>
              For the best results, please read the
              <br />
              BB TAPE instructions before applying.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.useCaseImageSection}>
        <div className={styles.useCaseGrid}>
          {[
            {
              label: "FACE",
              href: "https://youtube.com/watch?si=aj3WAtiS1_2tfO4F&v=E056-TbIbEQ&feature=youtu.be",
            },
            {
              label: "NECK",
              href: "https://www.youtube.com/watch?v=_xrPEK8IZ9k",
            },
            {
              label: "SHOULDER",
              href: "https://youtube.com/watch?si=71r2giVQi8-LSGae&v=l7_MPCDEah0&feature=youtu.be",
            },
            {
              label: "BACK",
              href: "https://www.youtube.com/watch?v=1QeXVtNPH20",
            },
            {
              label: "WAIST",
              href: "https://youtube.com/watch?si=XeY7KRys42jySsXb&v=eWur_b6YmkA&feature=youtu.be",
            },
            {
              label: "PELVIS / HIP JOINT",
              href: "https://www.youtube.com/watch?si=ucJwnYB_z0_G7wNk&v=ezta1SJpJq4&feature=youtu.be",
            },
            {
              label: "KNEE",
              href: "https://www.youtube.com/watch?v=rCwCTjJ666I",
            },
            {
              label: "ANKLE",
              href: "https://www.youtube.com/watch?v=fQKTvZ-9t3M",
            },
          ].map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.useCaseCard}
              aria-label={item.label}>
              <img
                src={`/assets/guides/parts/${i + 1}.png`}
                alt={item.label}
                className={styles.useCaseItem}
              />
              <span className={styles.useCaseOverlay} />
              <span className={styles.useCaseCaption}>{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      <a
        href="https://www.youtube.com/@bbtape7423"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.furtherButton}>
        Check Out Further Instructions
        <ChevronRightIcon className={styles.arrow} />
      </a>
    </div>
  );
}
