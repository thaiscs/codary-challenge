import React, { useState } from "react";
import { exampleCohorts } from "../store";
import { getDayName } from "../helpers/getDayName";

export interface Props {
  userId: string;
}

const Cohorts: React.FC<Props> = (props: Props) => {
  const [cohorts, setCohorts] = useState(exampleCohorts);
  const [selection, setSelection] = useState(false);

  const selectCohort = (index: number, id: string) => {
    const members = cohorts[index].members;
    const isSelected = members.some((member) => member === props.userId);
    const selectedAtPosition = (member: string) => member === props.userId;
    const toggleSelection = members.findIndex(selectedAtPosition);
    if (isSelected) {
      members.splice(toggleSelection, 1);
    } else {
      members.splice(0, 0, props.userId);
    }
    setCohorts(cohorts);
    setSelection(!selection);
  };

  return (
    <div>
      {cohorts.map((cohort, index) => {
        const selection = cohort.members.some(
          (member) => member === props.userId
        );
        return (
          <button key={index} onClick={() => selectCohort(index, cohort.id)}>
            <ul className={selection ? "bg-slate-300" : ""} key={cohort.id}>
              <li key={cohort.coach}>
                <b>Coach:</b> {cohort.coach}
              </li>
              <li key={cohort.day}>
                <b>Day:</b> {getDayName(cohort.day)}
              </li>
              <li key={cohort.time}>
                <b>Time:</b> {cohort.time}
              </li>
              <li key={cohort.members[1]}>
                <b>Members:</b> {cohort.members.length}
              </li>
            </ul>
          </button>
        );
      })}
    </div>
  );
};

export default Cohorts;
