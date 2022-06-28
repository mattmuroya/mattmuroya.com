import Link from "next/link";
import { PostDatum } from "../types/types";

export default function PostsList({ postData }: { postData: PostDatum[] }) {
  return (
    <section>
      <h2>Here&apos;s what&apos;s on my mind.</h2>
      <ul
        style={{ marginTop: "2rem", listStyleType: "none", paddingLeft: "0" }}
      >
        {postData.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.frontmatter.title}</a>
            </Link>{" "}
            <span style={{ color: "#999999" }}>{post.frontmatter.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
