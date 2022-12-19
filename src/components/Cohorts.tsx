import React, { useState, useEffect } from "react";
import { getDayName } from "../helpers/getDayName";
import { db } from "../server";
import { getDatabase, onValue, ref, set } from "firebase/database";

interface Props {
  userId: string;
}

interface Cohort {
  id: string;
  course: string;
  coach: string;
  members: string[];
  time: string;
  day: number;
  server_id: string;
}

const Cohorts: React.FC<Props> = (props: Props) => {
  const [cohorts, setCohorts] = useState<Cohort[]>([]);
  const [selection, setSelection] = useState(false);

  function writeData(
    id: string,
    course: string,
    coach: string,
    members: string[],
    time: string,
    day: number,
    server_id: string
  ) {
    const db = getDatabase();
    set(ref(db, "Cohorts/" + server_id), {
      id: id,
      course: course,
      coach: coach,
      members: members,
      time: time,
      day: day,
    });
  }

  useEffect(() => {
    const query = ref(db, "Cohorts");

    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        const state = Object.values(data).map((cohort: any, index) => {
          cohort.server_id = Object.keys(data)[index];
          return cohort;
        });
        setCohorts(state);
      }
    });
  }, []);

  const selectCohort = (index: number, server_id: string) => {
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

  const submit = () => {
    cohorts.forEach((cohort) => {
      writeData(
        cohort.id,
        cohort.course,
        cohort.coach,
        cohort.members,
        cohort.time,
        cohort.day,
        cohort.server_id
      );
    });
  };

  return (
    <div>
      {cohorts.map((cohort, index) => {
        const selection = cohort.members.some(
          (member) => member === props.userId
        );
        return (
          <button
            key={index}
            onClick={() => selectCohort(index, cohort.server_id)}
          >
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
      <button onClick={submit}>
        <b>BOOK</b>
      </button>
    </div>
  );
};

export default Cohorts;
