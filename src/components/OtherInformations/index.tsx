import { otherInformation } from "../../types";
import styles from "./styles.module.scss";

type OtherInformationsProps = {
  otherInformations: otherInformation[];
};

export default function OtherInformations({
  otherInformations,
}: OtherInformationsProps) {
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
      </div>
    </div>
  );
}
