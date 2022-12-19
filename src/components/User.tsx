import { useState, useEffect } from "react";
import { db } from "../server";
import { onValue, ref } from "firebase/database";
import Cohorts from "./Cohorts";
import Course from "./Course";
export default function UserCohort() {
  const [user, setUser] = useState({ name: "", id: "" });

  useEffect(() => {
    const query = ref(db, "User");

    return onValue(query, (snapshot) => {
      const user = snapshot.val();
      if (snapshot.exists()) {
        setUser(user);
      }
    });
  }, []);

  return (
    <div>
      {user.name}, you chose the course <Course />
      <Cohorts userId={user.id} />
    </div>
  );
}
