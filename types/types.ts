export interface PostDatum {
  slug: string;
  frontmatter: Frontmatter;
}

export interface Frontmatter {
  title: string;
  date: string;
}

export interface ProjectCardData {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
}
