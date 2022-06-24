import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/layout";
import styles from "../../styles/post.module.css";

import { GetStaticPaths, GetStaticProps } from "next";

import fs from "fs";
import matter from "gray-matter";
import markdownIt from "markdown-it";

const md = markdownIt();

export default function Post({
  frontmatter,
  content,
}: {
  frontmatter: {
    title: string;
    date: string;
  };
  content: string;
}) {
  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
    </Layout>
  );
}

// returns obj containing array of all possible paths
export const getStaticPaths: GetStaticPaths = async () => {
  // return format:
  // [
  //   {
  //     params: {
  //       slug: "slug-1",
  //     },
  //   },
  //   {
  //     params: {
  //       slug: "slug-2",
  //     },
  //   },
  // ]
  const fileNames = fs.readdirSync("posts");
  const paths = fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

// gets post data based on params.slug, which is returned as props
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // ! tells typescript the params won't be null
  const fileContents = fs.readFileSync(`posts/${params!.slug}.md`, "utf-8");
  // destructure data (as "frontmatter") and content
  const { data: frontmatter, content } = matter(fileContents);
  return {
    props: {
      frontmatter,
      content,
    },
  };
};
