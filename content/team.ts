export type Member = {
  name: string;
  role: string;
  focus?: string;
  initials: string;
  email?: string;
  image?: string;
};

export const members: Member[] = [
  {
    name: "Prayash Bhagawati",
    role: "Chief Technology Officer (CTO) & Director – Projects",
    initials: "PB",
    email: "prayash.cto.somadhantechnologies@gmail.com",
    image: "/team/Prayash.jpeg",
  },
  {
    name: "Hirakjyoti Sarma",
    role: "Head – Operations & Administration",
    initials: "HS",
    email: "hirak.somadhantechnologies@gmail.com",
    image: "/team/Hirak.jpeg",
  },
  {
    name: "Piyush Deka",
    role: "Head – Projects & Business Development",
    initials: "PD",
    email: "piyush.somadhantechnologies@gmail.com",
    image: "/team/Piyush.jpeg",
  },
  {
    name: "Kallul Gogoi",
    role: "Head – Training & Skill Development",
    initials: "KG",
    email: "kallul.somadhantechnologies@gmail.com",
    image: "/team/Kallul.jpeg",
  },
  {
    name: "Dhritiman Bayan",
    role: "Head – Research & Innovation",
    initials: "DB",
    email: "dhritiman.somadhantechnologies@gmail.com",
    image: "/team/Dhritiman.jpeg",
  },
  {
    name: "Manjit Ch. Patowary",
    role: "Head – Finance & Accounts",
    initials: "MP",
    email: "mancivil2@gmail.com",
    image: "/team/Manjit.jpeg",
  },
];

export type Career = {
  title: string;
  team: string;
  type: string;
  location: string;
  description: string;
};

export const careers: Career[] = [
  {
    title: "Research Engineer — Computer Vision",
    team: "Research",
    type: "Full-time",
    location: "Hybrid",
    description:
      "Build and deploy vision models that run from field images to production pipelines. Strong PyTorch and dataset experience expected; agronomy curiosity valued.",
  },
  {
    title: "Applied ML Scientist — Agronomy",
    team: "Research",
    type: "Full-time",
    location: "Hybrid",
    description:
      "Own the science behind crop and climate models, from experimental design to validation and publication. PhD or equivalent research experience preferred.",
  },
  {
    title: "Full-stack Engineer — Data Platforms",
    team: "Engineering",
    type: "Full-time",
    location: "Remote-friendly",
    description:
      "Build the systems that move field data into decisions — APIs, geospatial stores, dashboards and advisory surfaces used by farmers every day.",
  },
  {
    title: "Research Internship — AI for Agriculture",
    team: "Research",
    type: "Internship (6 months)",
    location: "Hybrid",
    description:
      "Work alongside researchers on a focused problem with real field data. Open to graduate students in ML, remote sensing or agronomy.",
  },
];

export type Advisor = {
  name: string;
  role: string;
  qualification: string;
  image: string;
};

export const advisors: Advisor[] = [
  {
    name: "Dr. Utpal Barman",
    role: "Research Advisor",
    qualification: "B.E., M.E., PhD",
    image: "/advisors/Utpal Barman.jpeg",
  },
  {
    name: "Dr. Amarjyoti Pathak",
    role: "Academic Advisor",
    qualification: "B.E., M.Tech., PhD",
    image: "/advisors/Amarjyoti Pathak.png",
  },
  {
    name: "Leena Baishya",
    role: "Legal Advisor",
    qualification: "B.A., L.L.B.",
    image: "/advisors/Leena Baishya.png",
  },
  {
    name: "Sagar Saikia",
    role: "Corporate Relations Advisor",
    qualification: "M.C.A., PhD (Pursuing)",
    image: "/advisors/Sagar Saikia.png",
  },
];

export const values = [
  {
    title: "Research first",
    body: "We measure claims against evidence. Every product decision starts from a testable hypothesis.",
  },
  {
    title: "Field grounded",
    body: "Code that has never seen soil is unproven. We validate in real fields, with real farmers.",
  },
  {
    title: "Open where it counts",
    body: "We publish, benchmark and share data where it accelerates the field without harming partners.",
  },
  {
    title: "Impact over hype",
    body: "We are measured by adoption and yield outcomes — not by announcement cycles.",
  },
];
