import { FormEvent } from "react";
import styles from "./styles.module.scss";

type FormProps = {
  placeholder: string;
  submit: (e: FormEvent<HTMLFormElement>) => null | undefined;
  newItem: string;
  setNewItem: (newItem: string) => void;
};

export default function Form({
  placeholder,
  submit,
  newItem,
  setNewItem,
}: FormProps) {
  return (
    <form onSubmit={submit} className={styles.formContainer}>
      <input
        type="text"
        placeholder={placeholder}
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
}
