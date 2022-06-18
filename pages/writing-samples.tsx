import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

import styles from "../styles/Samples.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>matt muroya | writing samples</title>
      </Head>
      <div className={styles.content}>
        <h1>writing samples</h1>
        <p>
          The three writing samples below center around my{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/mattmuroya/hawaii-state-parks-api"
          >
            {" "}
            Hawaii State Parks RESTful API
          </a>
          , an API built according to the OpenAPI Specification. Each sample
          demonstrates a different type of technical document: a concept, a
          task, and a reference.
        </p>
        <ul>
          <li>
            <div>
              <strong>Concept:</strong>{" "}
              <a>Understanding the OpenAPI Specification in plain language</a>
            </div>
          </li>
          <li>
            <div>
              <strong>Task:</strong>{" "}
              <a>
                Build a State Parks Guide App in React.js with the Hawaii State
                Parks API
              </a>
            </div>
          </li>
          <li>
            <div>
              <strong>Reference:</strong>{" "}
              <a>Hawaii State Parks API Reference Documentation</a>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
