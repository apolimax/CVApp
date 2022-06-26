import { FormEvent, useState } from "react";
import { useResumeContext } from "../../context/context";
import { experience } from "../../types";
import styles from "./styles.module.scss";

export default function ExperienceItem({ ...experience }: experience) {
  const [newResponsability, setNewResponsability] = useState("");
  const { updateRespExp } = useResumeContext();

  function submitExperience(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!newResponsability) {
      return;
    }
    updateRespExp(newResponsability, experience.company);
    setNewResponsability("");
  }

  return (
    <div className={styles.experienceItemContainer}>
      <h4>
        {new Date(experience.startDate).getMonth() + 1} /{" "}
        {new Date(experience.startDate).getFullYear()}
      </h4>
      <h4>
        {experience.endDate ? new Date(experience.endDate).getMonth() + 1 : "-"}{" "}
        /{" "}
        {experience.endDate ? new Date(experience.endDate).getFullYear() : "-"}
      </h4>
      <h4>
        {experience.jobTitle} - {experience.company}
      </h4>
      <ul>
        {experience.responsabilities.map((responsability, i) => (
          <li key={i}>{responsability}</li>
        ))}
        <form onSubmit={submitExperience}>
          <li>
            <input
              type="text"
              placeholder="Add a responsability ..."
              value={newResponsability}
              onChange={(e) => setNewResponsability(e.target.value)}
            />
            <button type="submit">+</button>
          </li>
        </form>
      </ul>
    </div>
  );
}
