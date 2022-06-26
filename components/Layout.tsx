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
        <meta
          name="description"
          content="the personal website of matt muroya."
        />
        <meta name="og:title" content="matt muroya" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <nav className={styles.header}>
          {!home && (
            <Link href="/">
              <a>&larr; back</a>
            </Link>
          )}
        </nav>

        <main className={styles.main}>{children}</main>
      </div>
      <footer className={styles.footer}>
        <div className={styles.social}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mattmuroya/"
          >
            <Image
              src="/linkedin-logo.svg"
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
              src="/instagram-logo.svg"
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
              src="/github-logo.svg"
              alt="GitHub Logo"
              height={28}
              width={28}
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
