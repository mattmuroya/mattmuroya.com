import { PostDatum } from "../types/types";

import fs from "fs";
import matter from "gray-matter";

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
