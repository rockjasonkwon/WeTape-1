import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styles from "./scientificevidence.module.css";

export default function ScientificEvidencePage() {
  return (
    <div id="scientific-evidence">
      {/* Red Banner */}
      <div className={styles.redBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Scientific Evidence</h1>
          <p className={styles.bannerSubtitle}>
            Scientific evidence with BB-TAPE
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.mainContent}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <p className={styles.caseReportLabel}>CASE REPORT</p>

            <h2 className={styles.mainTitle}>
              Short-Term Effects of Acute Ankle Sprain Treatment
            </h2>

            <div className={styles.highlightBox}>
              <p className={styles.highlightText}>
                Foot Ankle Outcome Score (*FAOS)
                <br />
                Innovative Improvement With BB TAPE
              </p>
            </div>

            <div className={styles.authorInfo}>
              <p className={styles.authorText}>
                <span className={styles.authorName}>Lee JH.</span> Short-Term
                Effect of Ankle Eversion Taping on Bilateral Acute Ankle
                Inversion Sprains in an Amateur College Football Goalkeeper: A
                Case Report.
              </p>

              <div className={styles.publicationDetails}>
                <p className={styles.detailItem}>
                  - Healthcare (Basel). 2020 Oct 15;8(4):403.
                </p>
                <p className={styles.detailItem}>
                  - doi: 10.3390/healthcare8040403.
                </p>
                <p className={styles.detailItem}>- PMID: 33076421</p>
                <p className={styles.detailItem}>- PMCID: PMC7712549.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Chart */}
          <div className={styles.rightColumn}>
            <img
              src="/assets/about/bar.png"
              alt="FAOS Comparison Chart"
              className={styles.chartImage}
            />
          </div>
        </div>
        <p className={styles.footnote}>
          <span className={styles.footnoteHighlight}>* FAOS :</span> 5 subscales
          to access foot and ankle pain, symptoms, and function in general
          activities, sport, and recreation
        </p>
      </div>

      <div className={styles.contentSection2}>
        <div className={styles.mainContent}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <p className={styles.experimentalLabel}>EXPERIMENTAL STUDY</p>

            <h2 className={styles.mainTitle}>
              Effect of Sports Taping on Muscle Strength
            </h2>

            <div className={styles.highlightBox}>
              <p className={styles.highlightText2}>
                Change Variable After Intervention Of Quadriceps Muscle Peak
                Torque With BB TAPE
              </p>
            </div>

            <div className={styles.authorInfo}>
              <p className={styles.authorText}>
                <span className={styles.authorName}>Choi IR, Lee JH.</span>{" "}
                Effect of kinesiology tape application direction on quadriceps
                strength.
              </p>

              <div className={styles.publicationDetails}>
                <p className={styles.detailItem}>
                  - Medicine (Baltimore). 2018 Jun;97(24):e11038.
                </p>
                <p className={styles.detailItem}>
                  - doi: 10.1097/MD.0000000000011038.
                </p>
                <p className={styles.detailItem}>- PMID: 29901599</p>
                <p className={styles.detailItem}>- PMCID: PMC6023644.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Chart */}
          <div className={styles.rightColumn}>
            <img
              src="/assets/about/bar2.png"
              alt="Muscle Strength Comparison Chart"
              className={styles.chartImage}
            />
          </div>
        </div>
      </div>

      {/* Journal and Publication History Section */}
      <div className={styles.historySection}>
        <h2 className={styles.historyTitle}>JOURNAL AND PUBLICATION HISTORY</h2>
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/assets/about/mobile/journal.png"
          />
          <img
            src="/assets/about/journal.png"
            alt="Journal and Publication History"
            className={styles.journalImage}
          />
        </picture>
        <div className={styles.buttonSection}>
          <a
            href="https://bbtape.com/research.php"
            className={styles.evidenceButton}>
            Check Out Further Evidences
            <ChevronRightIcon className={styles.arrow} />
          </a>
        </div>
      </div>
    </div>
  );
}
