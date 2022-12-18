import { User, Course, Cohort } from "./models";

// TODO: Give this user an id

function generateID(quantity: number) {
  const chars ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const list_of_ids = [];

  for (let i = 0; i <= quantity; i++) {
    let result = '';

    for (var _i = 0; _i < 20; _i++){
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    list_of_ids.push(result);

  }
  return list_of_ids;
}

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
    id: "1",
    course: "8EpIqAtYYDc7KWvxXGqd",
    coach: "Jack Black",
    members: ["np8BNYHomuLEzU5SuKWR", "ilZMax60cgAeBExLRcUN", "tWxhofEOLuhSRQ3K4991"],
    time: "17:00",
    day: 1
  },
  {
    id: "2",
    course: "8EpIqAtYYDc7KWvxXGqd",
    coach: "Ms. DoubtFire",
    members: ["dv9b71LPLDsbQ0p903qQ", "xaSKnf8I5I2DhJ8f227T", "WBeFfiYb7aY0W59nG3RU", "loIkPdWGfFj9UZj0jYZv"],
    time: "16:30",
    day: 3
  },
  {
    id: "3",
    course: "8EpIqAtYYDc7KWvxXGqd",
    coach: "Kody Moser",
    members: ["AVhPlE1G3WIJfd7o4yyr", "MTyWQGqJ6TP8EEhnpKur"],
    time: "10:00",
    day: 6
  },
  {
    id: "4",
    course: "8EpIqAtYYDc7KWvxXGqd",
    coach: "Mutty Duties",
    members: ["ZkWTvPhTpp0TAuPvpduX", "MTyWQGqJ6TP8EEhnpKur", "xaSKnf8I5I2DhJ8f227T"],
    time: "12:00",
    day: 2
  }

];
