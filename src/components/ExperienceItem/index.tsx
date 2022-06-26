import { FormEvent, useState } from "react";
import { useResumeContext } from "../../context/context";
import { experience } from "../../types";
import Form from "../Form";
import styles from "./styles.module.scss";

export default function ExperienceItem({ ...experience }: experience) {
  const [newResponsability, setNewResponsability] = useState("");
  const { updateRespExp } = useResumeContext();

  function submitExperience(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!newResponsability) {
      return null;
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
        <Form
          placeholder="Add a responsability ..."
          newItem={newResponsability}
          setNewItem={setNewResponsability}
          submit={submitExperience}
        />
      </ul>
    </div>
  );
}
