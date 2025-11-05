"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/home/footer";
import BackToTop from "@/components/BackToTop/BackToTop";
import Instructions from "@/components/Guides/Instructions";
import PackagingDetails from "@/components/Guides/PackagingDetails";
import { Tabs, Tab, Box } from "@mui/material";
import styles from "./page.module.css";

export default function Guides() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      <main className={styles.mainContent}>
        <div className={styles.headerSection}>
          <h1 className={styles.pageTitle}>GUIDES</h1>
          <Tabs
            value={value}
            onChange={handleChange}
            className={styles.customTabs}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#db2a1ae6",
                height: "3px",
                bottom: 0,
                zIndex: 99,
              },
            }}>
            <Tab
              label="Instructions"
              className={styles.customTab}
              sx={{
                fontFamily: '"Lato", sans-serif',
                fontSize: "24px",
                fontWeight: 700,
                textTransform: "none",
                lineHeight: "35px",
                letterSpacing: "-0.01em",
                color: value === 0 ? "rgb(42, 35, 34)" : "#919191",
                "&.Mui-selected": {
                  color: "rgb(42, 35, 34)",
                  fontWeight: 700,
                },
                minWidth: "auto",
                padding: "0 20px",
                marginRight: "30px",
              }}
            />
            <Tab
              label="Packaging Details"
              className={styles.customTab}
              sx={{
                fontFamily: '"Lato", sans-serif',
                fontSize: "24px",
                fontWeight: 700,
                textTransform: "none",
                lineHeight: "35px",
                letterSpacing: "-0.01em",
                color: value === 1 ? "rgb(42, 35, 34)" : "#919191",
                "&.Mui-selected": {
                  color: "rgb(42, 35, 34)",
                  fontWeight: 700,
                },
                minWidth: "auto",
                padding: "0 20px",
              }}
            />
          </Tabs>
        </div>

        <div className={styles.content}>
          {value === 0 && <Instructions />}
          {value === 1 && <PackagingDetails />}
        </div>
      </main>

      <Footer />
      <BackToTop backgroundColor="rgb(42, 35, 34)" />
    </div>
  );
}
