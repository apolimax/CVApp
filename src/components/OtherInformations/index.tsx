import { FormEvent, useState } from "react";
import { useResumeContext } from "../../context/context";
import { otherInformation } from "../../types";
import Form from "../Form";
import styles from "./styles.module.scss";

type OtherInformationsProps = {
  otherInformations: otherInformation[];
};

export default function OtherInformations({
  otherInformations,
}: OtherInformationsProps) {
  const [newInfo, setNewInfo] = useState("");

  const { updateOtherInfos } = useResumeContext();

  function submitOtherInfo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!newInfo) {
      return null;
    }
    updateOtherInfos(newInfo);
    setNewInfo("");
  }

  return (
    <div className={styles.otherInformationContainer}>
      <h3>
        OTHER
        <br /> INFORMATIONS
      </h3>
      <div className={styles.experienceContainer}>
        {otherInformations.map((info) => (
          <p key={info.id}>{info.description}</p>
        ))}
        <Form
          placeholder="Add a new info ..."
          newItem={newInfo}
          setNewItem={setNewInfo}
          submit={submitOtherInfo}
        />
      </div>
    </div>
  );
}
