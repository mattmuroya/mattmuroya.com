import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

import { GetStaticProps } from "next";
import { PostDatum } from "../types/types";

import { getFileNames, getPostsData } from "../utils/utils";

export default function Home({ postData }: { postData: PostDatum[] }) {
  return (
    <Layout home>
      <Head>
        <title>matt muroya</title>
      </Head>

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
      <ul
        style={{ marginTop: "2rem", listStyleType: "none", paddingLeft: "0" }}
      >
        {postData.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.frontmatter.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const fileNames = getFileNames();
  const postData = getPostsData(fileNames);
  return {
    props: {
      postData,
    },
  };
};
