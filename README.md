# mattmuroya.com

Personal website statically generated with [Next.js](https://nextjs.org/).

A list of blog posts is fetched from the filesystem and displayed as a list of
titles on the home page:

```ts
// index.tsx

// ...

export const getStaticProps: GetStaticProps = async () => {
  // returns an array of file names.
  const fileNames = getFileNames();
  // transforms the array of filenames to an array of post data.
  // [
  //   {
  //     slug: string,
  //     frontmatter: {title: string, date: string},
  //   };
  // ]
  const postData = getPostsData(fileNames);
  // the array of post data is returned to the index page as props.
  return {
    props: {
      postData,
    },
  };
};
```

An array of dynamic routes is generated from the array of blog posts. An
individual page is generated for each are rendered to a layout component with a
Markdown parser:

```ts
// [slug].tsx

// ...

export const getStaticPaths: GetStaticPaths = async () => {
  // returns an array of file names
  const fileNames = getFileNames();
  // transforms the array of file names to an array of param objects with the path.
  // [
  //   {
  //     params: {
  //       slug: fileName.replace(/\.md$/, ""),
  //     },
  //   };
  // ]
  const paths = getPossiblePaths(fileNames);
  // the array of path param objects is returned inside an object with optional 404 fallback.
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // returns the contents of the blog post file as a string.
  // (fetched based on the param object from getStaticPaths.)
  const fileContents = getFileContents(params);
  // file content is destructured into frontmatter and text content.
  const { data: frontmatter, content } = matter(fileContents);
  // destructured file is returned to the post page as props.
  return {
    props: {
      frontmatter,
      content,
    },
  };
};
```
