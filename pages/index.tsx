import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

import { GetStaticProps } from "next";
import { PostDatum, ProjectCardData } from "../types/types";

import styles from "../styles/Home.module.css";

import { getFileNames, getPostData, getProjects } from "../utils/utils";
import markdownIt from "markdown-it";

const md = markdownIt();

export default function Home({
  postData,
  projects,
}: {
  postData: PostDatum[];
  projects: ProjectCardData[];
}) {
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
      <h2>Here&apos;s what I&apos;ve been working on.</h2>
      <section className={styles.projectGrid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.projectLinks}>
              <a href={project.github}>GitHub &rarr;</a>
              <a href={project.demo}>Demo &rarr;</a>
            </div>
          </article>
        ))}
      </section>
      <h2>Here&apos;s what&apos;s on my mind.</h2>
      <ul
        style={{ marginTop: "2rem", listStyleType: "none", paddingLeft: "0" }}
      >
        {postData.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.frontmatter.title}</a>
            </Link>{" "}
            <span style={{ color: "#999999" }}>{post.frontmatter.date}</span>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const fileNames = getFileNames();
  const postData = getPostData(fileNames);
  const projects = getProjects();
  return {
    props: {
      postData,
      projects,
    },
  };
};
