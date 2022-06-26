import Head from "next/head";
import Layout from "../../components/Layout";
import { GetStaticPaths, GetStaticProps } from "next";

import matter from "gray-matter";
import {
  getFileContents,
  getFileNames,
  getPossiblePaths,
} from "../../utils/utils";
import markdownIt from "markdown-it";

import hljs from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.css";

const md: any = markdownIt({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          "</code></pre>"
        );
      } catch (__) {}
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  },
});

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
  const fileNames = getFileNames();
  const paths = getPossiblePaths(fileNames);
  return {
    paths,
    fallback: false,
  };
};

// gets post data based on params.slug, which is returned as props
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fileContents = getFileContents(params);
  // destructure data (as "frontmatter") and content
  const { data: frontmatter, content } = matter(fileContents);
  return {
    props: {
      frontmatter,
      content,
    },
  };
};
