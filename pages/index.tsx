import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/home.module.css";

import { GetStaticProps } from "next";

import fs from "fs";
import matter from "gray-matter";

interface Frontmatter {
  title: string;
  date: string;
}

interface Post {
  slug: string;
  frontmatter: Frontmatter;
}

interface Props {
  posts: Post[];
}

export default function Home({ posts }: Props) {
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
      <ul className={styles.links}>
        {posts.map((post) => (
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
  const fileNames = fs.readdirSync("posts");
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
    // destructure "data" from matter() return obj as "frontmatter"
    const { data: frontmatter } = matter(fileContents);
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
};
