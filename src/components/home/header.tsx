import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            The World&apos;s
            <br className={styles.heroBreak1} />
            Best
            <br className={styles.heroBreak2} />
            Kinesiology
            <br className={styles.heroBreak3} />
            Tape
          </h1>
        </div>
      </div>
    </header>
  );
}
