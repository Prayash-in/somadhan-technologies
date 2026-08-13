export type Member = {
  name: string;
  role: string;
  focus: string;
  initials: string;
};

export const members: Member[] = [
  {
    name: "Aarav Somadhan",
    role: "Founder & Chief Executive",
    focus: "Vision, strategy and partnerships",
    initials: "AS",
  },
  {
    name: "Dr. Meera Krishnan",
    role: "Head of Research",
    focus: "ML research, field protocols",
    initials: "MK",
  },
  {
    name: "Rohan Iyer",
    role: "Lead Machine Learning Engineer",
    focus: "Computer vision systems",
    initials: "RI",
  },
  {
    name: "Dr. Ananya Deshpande",
    role: "Principal Agronomist",
    focus: "Crop science, trial design",
    initials: "AD",
  },
  {
    name: "Kabir Nair",
    role: "Head of Engineering",
    focus: "Platforms, pipelines, infra",
    initials: "KN",
  },
  {
    name: "Sara Fernandes",
    role: "Research Fellow — Climate",
    focus: "Weather modelling, resilience",
    initials: "SF",
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
