import React from "react";
import { TPersonProps } from ".";
import styles from "./styles.module.scss";

export const Person: React.FC<TPersonProps> = ({
  age,
  name,
  hobbies,
  id,
}: TPersonProps) => {
  return (
    <div className={styles.person}>
      <p>
        Im a {name} and im {age} years old
      </p>
      {hobbies ? <p>My hobbies are : {hobbies} </p> : null}
      <button id={id} className={styles.btn}>
        Delete Person
      </button>
    </div>
  );
};

export default Person;
