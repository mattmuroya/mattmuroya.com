import { PostData } from "../types/types";

import fs from "fs";
import matter from "gray-matter";

export const getFileNames = (): string[] => {
  return fs.readdirSync("posts");
};

export const getPostsData = (fileNames: string[]): PostData[] => {
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

export const getFileContents = (params: any): string => {
  return fs.readFileSync(`posts/${params.slug}.md`, "utf-8");
};
