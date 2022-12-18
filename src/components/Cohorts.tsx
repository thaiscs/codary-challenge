import React from "react";
import { exampleCohorts } from "../store";
import { getDayName } from "../helpers/getDayName";

function Cohorts() {
  console.log(exampleCohorts);
  return (
    <div>
      {exampleCohorts.map((cohort) => {
        return (
          <ul key={cohort.id}>
            <li key={cohort.coach}>
              <b>Coach:</b> {cohort.coach}
            </li>
            <li key={cohort.day}>
              <b>Day:</b> {getDayName(cohort.day)}
            </li>
            <li key={cohort.time}>
              <b>Time:</b> {cohort.time}
            </li>
            <li key={cohort.members.length}>
              <b>Members:</b> {cohort.members.length}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Cohorts;
