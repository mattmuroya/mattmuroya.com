import Head from "next/head";
import Layout from "../components/Layout";
// import TwoTruths from "../components/TwoTruths";
import ProjectGrid from "../components/ProjectGrid";
import PostList from "../components/PostList";

import { GetStaticProps } from "next";
import { PostDatum, ProjectCardData } from "../types/types";

import {
  getFileNames,
  getPostData,
  sortPostData,
  getProjects,
} from "../utils/utils";

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
      <h1>Hi! I&apos;m Matt.</h1>
      <p>
        I&apos;m a technical writer. I like to play guitar, take photos, and
        occasionally write code.
      </p>
      {/* <TwoTruths /> */}
      <ProjectGrid projects={projects} />
      <PostList postData={postData} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const fileNames = getFileNames();
  const postData = sortPostData(getPostData(fileNames));
  const projects = getProjects();
  return {
    props: {
      postData,
      projects,
    },
  };
};
