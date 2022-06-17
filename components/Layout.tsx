import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Hi! I'm Matt. I'm a technical writer. I also take photos and write code."
        />
        <meta name="og:title" content="matt muroya" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Copyright © Matt Muroya 2022</footer>
    </div>
  );
}
