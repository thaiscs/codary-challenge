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
      Hello {user.name}!
      <p className="p-2">
        How exciting that you've chosen the course <Course /> :)
      </p>
      <p className="italic p-2">Now select a group to join:</p>
      <Cohorts userId={user.id} />
    </div>
  );
}
