import { exampleUser } from "../store";
import Cohorts from "./Cohorts";
import Course from "./Course";
export default function UserCohort() {
  return (
    <div>
      {exampleUser.name}, you chose the course <Course />
      <Cohorts userId={exampleUser.id} />
    </div>
  );
}
