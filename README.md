# mattmuroya.com

Personal website statically generated with [Next.js](https://nextjs.org/). Blog
posts are written in Markdown and stored as text documents. Next.js reads the
files from the local file system and generates the URI paths and the individual
pages at build time.

## index.tsx

`getStaticProps` fetches an array of Markdown document file names from the file
system. It then converts the array of file names into an array of objects, each
of which has two properties:

- A URI path string (slug) based on the document's file name.
- A nested `frontmatter` object that contains the document's title and date.

It then returns the data as `props` which Next.js uses to pre-render a list of
blog post links on the home page.

```ts
// index.tsx

// ...

export const getStaticProps: GetStaticProps = async () => {
  // fetches an array of file names from the file system
  const fileNames = getFileNames();
  // converts the array of file names to an array of post data
  // [
  //   {
  //     slug: string,
  //     frontmatter: {title: string, date: string},
  //   };
  // ]
  const postData = getPostData(fileNames);
  // returns the array of post data as props
  return {
    props: {
      postData,
    },
  };
};
```

## [slug].tsx

`getStaticPaths` fetches an array of Markdown document file names from the file
system. It then converts the array of file names to an array of objects, each of
which contains:

- A nested `params` object that contains a URI path string (slug) based on the
  document's file name.

It then returns the array along with an optional 404 fallback.

`getStaticProps` then generates a static blog page for each slug in the array.
It finds the matching document from the file system, reads the document's
contents, and parses it into an object with two properties:

- A nested `frontmatter` object that contains the document's title and date.
- The actual Markdown text.

It then returns the data as `props` which Next.js uses to pre-render each
individual blog post page at build time.

```ts
// [slug].tsx

// ...

export const getStaticPaths: GetStaticPaths = async () => {
  // fetches an array of file names from the file system
  const fileNames = getFileNames();
  // converts the array of file names to an array of param objects with a URI path (slug):
  // [
  //   {
  //     params: {
  //       slug: fileName.replace(/\.md$/, ""),
  //     },
  //   };
  // ]
  const paths = getPossiblePaths(fileNames);
  // returns an object containing the paths array with an optional 404 fallback
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // returns the contents of the blog post document as a string
  // (fetched based on the slug in the params object from getStaticPaths)
  const fileContents = getFileContents(params);
  // destructures document contents into data (frontmatter) and the actual Markdown text
  const { data: frontmatter, content } = matter(fileContents);
  // returns the document frontmatter and text content as props
  return {
    props: {
      frontmatter,
      content,
    },
  };
};
```
