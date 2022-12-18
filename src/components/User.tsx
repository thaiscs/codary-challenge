import React from "react";
import { exampleUser } from "../store";
import Course from "./Course";
export default function UserCohort() {
  return (
    <div>
      {exampleUser.name}, you chose the course <Course />
    </div>
  );
}
