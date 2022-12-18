import React from "react";
import { exampleCohorts } from "../store";
import { getDayName } from "../helpers/getDayName";

export interface Props {
  userId: string;
}

const Cohorts: React.FC<Props> = (props: Props) => {
  console.log(exampleCohorts, props.userId);
  return (
    <div>
      {exampleCohorts.map((cohort) => {
        const selected = cohort.members.some(
          (member) => member === props.userId
        );
        return (
          <ul className={selected ? "bg-slate-300" : ""} key={cohort.id}>
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
};

export default Cohorts;
