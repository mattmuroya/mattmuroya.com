import Image from "next/image";
import styles from "../styles/ProjectGrid.module.css";
import { ProjectCardData } from "../types/types";

export default function ProjectGrid({
  projects,
}: {
  projects: ProjectCardData[];
}) {
  return (
    <section>
      <h2>Here&apos;s what I&apos;ve been working on.</h2>
      <div className={styles.projectGrid}>
        {projects.map((project: ProjectCardData) => (
          <a
            key={project.title}
            className={styles.projectCard}
            href={project.github}
          >
            <h3>{project.title} &rarr;</h3>
            <div className={styles.image}>
              <Image
                src={project.image}
                alt={project.title}
                width={1920}
                height={1080}
                layout="responsive"
              />
            </div>
            <p>{project.description}</p>
            {/* <div className={styles.projectLinks}>
              <a href={project.github}>GitHub &rarr;</a>
              <a href={project.demo}>Demo &rarr;</a>
            </div> */}
          </a>
        ))}
      </div>
    </section>
  );
}
