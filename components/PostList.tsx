import Link from "next/link";
import styles from "../styles/PostList.module.css";
import { PostDatum } from "../types/types";

export default function PostsList({ postData }: { postData: PostDatum[] }) {
  return (
    <section>
      <h2>Here&apos;s what&apos;s on my mind.</h2>
      <ul className={styles.postList}>
        {postData.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.frontmatter.title}</a>
            </Link>
            <br />
            <span className={styles.date}>{post.frontmatter.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
