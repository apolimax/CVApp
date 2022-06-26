import { skill, technology } from "../../types";
import styles from "./styles.module.scss";

type SkillsProps = {
  skills: skill[];
  technologies: technology[];
};

export default function Skills({ skills, technologies }: SkillsProps) {
  return (
    <div className={styles.skillsContainer}>
      <h3>SKILLS:</h3>
      {skills.map((skill) => (
        <div className={styles.skill} key={skill.id}>
          <p>{skill.name}</p>
          <div className={styles.border}>
            <div
              className={styles.filler}
              style={{ height: "20px", width: `${skill.proficiency}%` }}
            ></div>
          </div>
        </div>
      ))}

      <div className={styles.techContainer}>
        {technologies.map((tech) => (
          <div className={styles.skill} key={tech.id}>
            <p>{tech.name}</p>
            <div className={styles.border}>
              <div
                className={styles.filler}
                style={{ height: "20px", width: `${tech.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
