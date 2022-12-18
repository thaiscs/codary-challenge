export interface Cohort {
  id: string;
  course: string; // id of the course the cohort is working on
  coach: string; // name of the coach
  members: string[]; // array of user ids
  time: string; // time when the course takes place in format 'hh:mm'
  day: number; // day when the course takes place from 1 to 6
}

export interface User {
  id: string;
  name: string;
}

export interface Course {
  id: string;
  name: string;
}
