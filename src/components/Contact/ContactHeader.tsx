import React from "react";
import styles from "./contactheader.module.css";

export default function ContactHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftSection}>
            <h1 className={styles.title}>WETAPE Inc.</h1>
          </div>

          <div className={styles.rightSection}>
            <p className={styles.text}>
              Better life with BB TAPE Premium.
              <br />
              Stay healthy with us.
            </p>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.contactButton}>
            Contact Us
            <span className={styles.arrow}>→</span>
          </button>
        </div>
      </div>

      <div className={styles.contactImageSection}>
        <picture>
          <source media="(max-width: 768px)" srcSet="/assets/contact/mobile/contact.png" />
          <img
            src="/assets/contact/contact.png"
            alt="Contact"
            className={styles.contactImage}
          />
        </picture>
      </div>
    </div>
  );
}
