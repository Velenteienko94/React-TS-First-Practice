import Person from "./Person-component";

export type TPersonProps = {
  id: string;
  name: string;
  age: string;
  hobbies?: string;
};

export default Person;
