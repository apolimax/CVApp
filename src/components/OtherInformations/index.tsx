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

  const { setMyOtherInformations } = useResumeContext();

  function removeInfo(id: string) {
    const filteredInfos = otherInformations.filter(
      (info) => info.id !== id
    );

    setMyOtherInformations(filteredInfos);
  }

  function submitOtherInfo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!newInfo) {
      return null;
    }

    const nextInfoId = otherInformations.length + 1;
    setMyOtherInformations([
      ...otherInformations,
      { id: `${nextInfoId}`, description: newInfo },
    ]);

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
          <div key={info.id} className={styles.itemList}>
            <h4>{info.description}</h4>
            <button
              type="button"
              onClick={() => removeInfo(info.id)}
            >
              x
            </button>
          </div>
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
