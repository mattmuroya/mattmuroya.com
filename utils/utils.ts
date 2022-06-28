import { PostDatum, ProjectCardData } from "../types/types";

import fs from "fs";
import matter from "gray-matter";

import { projects } from "../frontpage/projects";

// fetches an array of file names from the file system
export const getFileNames = (): string[] => {
  return fs.readdirSync("posts");
};

// converts the array of file names to an array of post data
// [
//   {
//     slug: string,
//     frontmatter: {title: string, date: string},
//   };
// ]
export const getPostData = (fileNames: string[]): PostDatum[] => {
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter }: { data: any } = matter(fileContents);
    return {
      slug,
      frontmatter,
    };
  });
};

// sorts the array of post data by date
export const sortPostData = (postData: PostDatum[]): PostDatum[] => {
  const toDate = (dateStr: string): Date => {
    const [day, month, year] = dateStr.split("-");
    return new Date(Number(year), Number(month) - 1, Number(day));
  };
  return postData.sort((a, b) => {
    return (
      Number(toDate(b.frontmatter.date)) - Number(toDate(a.frontmatter.date))
    );
  });
};

// gets current projects document for the front page
export const getProjects = (): ProjectCardData[] => {
  return projects;
};

// converts the array of file names to an array of param objects with a URI path (slug):
// [
//   {
//     params: {
//       slug: string
//     },
//   };
// ]
export const getPossiblePaths = (
  fileNames: string[]
): { params: { slug: string } }[] => {
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
};

// returns the contents of a blog post document as a string
export const getFileContents = (params: any): string => {
  return fs.readFileSync(`posts/${params.slug}.md`, "utf-8");
};
