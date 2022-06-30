import { FormEvent, useState } from "react";
import { useResumeContext } from "../../context/context";
import { experience, responsability } from "../../types";
import Form from "../Form";
import styles from "./styles.module.scss";

export default function ExperienceItem({ ...experience }: experience) {
  const [newResponsability, setNewResponsability] = useState("");
  const { addRespExp, myExperiences, setMyExperiences } = useResumeContext();

  function removeResponsabilty(id: string) {
    /* const filteredExperiences: experience[] = myExperiences
      .map((experienceItem: experience) => {
        if (experienceItem.company === experience.company) {
          return experienceItem.responsabilities.filter(
            (responsability: responsability) => responsability.id !== id
          );
        }
        return experienceItem;
      })
      .flat();
    /* setMyExperiences(filteredExperiences); */

    const filteredResponsabilities: responsability[] =
      experience.responsabilities.filter((resp) => resp.id !== id);
    const newExperiencesArray: experience[] = [];

    myExperiences.forEach((experienceItem) => {
      if (experienceItem.company === experience.company) {
        newExperiencesArray.push({
          ...experienceItem,
          responsabilities: filteredResponsabilities,
        });
      } else {
        newExperiencesArray.push(experienceItem);
      }
    });

    setMyExperiences(newExperiencesArray);
  }

  function submitExperience(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!newResponsability) {
      return null;
    }
    addRespExp(newResponsability, experience.company);
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
        {experience.responsabilities.map((responsability) => (
          <div key={responsability.id} className={styles.itemList}>
            <li>{responsability.description}</li>
            <button
              type="button"
              onClick={() => removeResponsabilty(responsability.id)}
            >
              x
            </button>
          </div>
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
