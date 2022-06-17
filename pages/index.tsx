import Head from "next/head";
import Layout from "../components/Layout";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>matt muroya</title>
      </Head>

      <div className={styles.content}>
        <p className={styles.intro}>
          Hi! I&apos;m Matt. I&apos;m a{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mattmuroya/"
          >
            technical writer
          </a>
          . I also take{" "}
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

        <div className={styles.links}></div>
      </div>
    </Layout>
  );
}
