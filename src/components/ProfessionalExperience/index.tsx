import { experience } from "../../types";
import ExperienceItem from "../ExperienceItem";
import styles from "./styles.module.scss";

type experiences = {
  experiences: experience[];
};

export default function ProfessionalExperience({ experiences }: experiences) {
  return (
    <div className={styles.professionalExperienceContainer}>
      <h3>
        PROFESSIONAL
        <br /> EXPERIENCE
      </h3>
      <div className={styles.experienceContainer}>
        {experiences.map((experience) => (
          <ExperienceItem key={experience.id} {...experience} />
        ))}
      </div>
    </div>
  );
}
