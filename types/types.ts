export interface Frontmatter {
  title: string;
  date: string;
}

export interface PostData {
  slug: string;
  frontmatter: Frontmatter;
}
