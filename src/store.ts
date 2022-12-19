import { User, Course, Cohort } from "./models";
import { getDatabase, ref, set, push } from "firebase/database";

export const exampleUser: User = {
  id: "ZkWTvPhTpp0TAuPvpduX",
  name: "John Doe",
};

export const exampleCourse: Course = {
  id: "8EpIqAtYYDc7KWvxXGqd",
  name: "Python for Kids",
};

export const exampleCohorts: Cohort[] = [
  {
    id: "5",
    course: "8EpIqAtYYDc7KWvxXGqd",
    coach: "Jack Black",
    members: ["np8BNYHomuLEzU5SuKWR", "ilZMax60cgAeBExLRcUN", "tWxhofEOLuhSRQ3K4991"],
    time: "16:00",
    day: 1
  },
  {
    id: "6",
    course: "8EpIqAtYYDc7KWvxXGqd",
    coach: "Ms. DoubtFire",
    members: ["dv9b71LPLDsbQ0p903qQ", "xaSKnf8I5I2DhJ8f227T", "WBeFfiYb7aY0W59nG3RU", "loIkPdWGfFj9UZj0jYZv"],
    time: "17:30",
    day: 2
  },
  {
    id: "7",
    course: "8EpIqAtYYDc7KWvxXGqd",
    coach: "Kody Moser",
    members: ["AVhPlE1G3WIJfd7o4yyr", "MTyWQGqJ6TP8EEhnpKur"],
    time: "10:00",
    day: 3
  },
  {
    id: "8",
    course: "8EpIqAtYYDc7KWvxXGqd",
    coach: "Mutty Duties",
    members: ["ZkWTvPhTpp0TAuPvpduX", "MTyWQGqJ6TP8EEhnpKur", "xaSKnf8I5I2DhJ8f227T"],
    time: "15:00",
    day: 5
  }
];

const db = getDatabase();

// exampleCohorts.forEach((cohort)=> {
//   const cohortsRef = ref(db, 'Cohorts');
//   const newCohortsRef = push(cohortsRef);
//   set(newCohortsRef, {
//     id: cohort.id,
//     course: cohort.course,
//     coach: cohort.coach,
//     members: cohort.members,
//     time: cohort.time,
//     day: cohort.day
//   });
// })

