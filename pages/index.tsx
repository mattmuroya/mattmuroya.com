import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>matt muroya</title>
      </Head>

      <div className={styles.content}>
        <h1>matt muroya</h1>

        <p className={styles.intro}>
          Hi! I&apos;m Matt. I&apos;m a{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mattmuroya/"
          >
            technical writer
          </a>
          . I occasionally take{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/mattmuroya/"
          >
            photos
          </a>{" "}
          and write{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/mattmuroya"
          >
            code
          </a>
          .
        </p>
        <ul className={styles.links}>
          <li>
            <Link href="/writing-samples">
              <a>writing samples</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/resume">
              <a>resume</a>
            </Link>
          </li> */}
        </ul>
      </div>
    </Layout>
  );
}
