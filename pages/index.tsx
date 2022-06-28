import Head from "next/head";
import Layout from "../components/Layout";
import ProjectGrid from "../components/ProjectGrid";
import PostList from "../components/PostList";

import { GetStaticProps } from "next";
import { PostDatum, ProjectCardData } from "../types/types";

import { getFileNames, getPostData, getProjects } from "../utils/utils";

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
        I&apos;m a technical writer. I like to play guitar, take photos, and
        occasionally write code.
      </p>
      <h2>Here&apos;s what I&apos;ve been working on.</h2>
      <ProjectGrid projects={projects} />
      <h2>Here&apos;s what&apos;s on my mind.</h2>
      <PostList postData={postData} />
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
