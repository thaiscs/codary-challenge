import { useState, useEffect } from "react";
import { db } from "../server";
import { onValue, ref } from "firebase/database";

export default function Course() {
  const [course, setCourse] = useState("");

  useEffect(() => {
    const query = ref(db, "Course");

    return onValue(query, (snapshot) => {
      const course = snapshot.val();
      if (snapshot.exists()) {
        setCourse(course.name);
      }
    });
  }, []);

  return <b>{course}</b>;
}
