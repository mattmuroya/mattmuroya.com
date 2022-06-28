import styles from "../styles/ProjectGrid.module.css";
import { ProjectCardData } from "../types/types";

export default function ProjectGrid({
  projects,
}: {
  projects: ProjectCardData[];
}) {
  return (
    <section className={styles.projectGrid}>
      {projects.map((project: ProjectCardData) => (
        <article key={project.title} className={styles.projectCard}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className={styles.projectLinks}>
            <a href={project.github}>GitHub &rarr;</a>
            <a href={project.demo}>Demo &rarr;</a>
          </div>
        </article>
      ))}
    </section>
  );
}
