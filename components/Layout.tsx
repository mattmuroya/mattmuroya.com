import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Layout.module.css";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Hi! I'm Matt. I'm a technical writer. I occasionally take photos and write code."
        />
        <meta name="og:title" content="matt muroya" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {!home && (
          <Link href="/">
            <a>&larr; back</a>
          </Link>
        )}
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/mattmuroya/"
        >
          <Image
            className={styles.social}
            src="/linkedin.svg"
            alt="LinkedIn Logo"
            height={28}
            width={28}
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/mattmuroya/"
        >
          <Image
            className={styles.social}
            src="/instagram.svg"
            alt="Instagram Logo"
            height={28}
            width={28}
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mattmuroya"
        >
          <Image
            className={styles.social}
            src="/github.svg"
            alt="GitHub Logo"
            height={28}
            width={28}
          />
        </a>
      </footer>
    </div>
  );
}
