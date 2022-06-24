import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>matt muroya</title>
      </Head>

      <div>
        <h1 className="title">Hi! I&apos;m Matt.</h1>
        <p>
          I&apos;m a{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mattmuroya/"
          >
            technical writer
          </a>
          . I like to play guitar, take photos, and occasionally write code.
        </p>
      </div>
    </Layout>
  );
}
