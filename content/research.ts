export type Publication = {
  title: string;
  venue: string;
  year: string;
  status: "Peer-reviewed" | "Preprint" | "In review";
  authors: string;
  tags: string[];
};

export const publications: Publication[] = [
  {
    title:
      "Deep Learning for Early Detection of Late Blight in Solanum tuberosum under Field Conditions",
    venue: "Journal of Agronomic Intelligence",
    year: "2025",
    status: "In review",
    authors: "Somadhan Research Team",
    tags: ["Plant pathology", "Computer vision"],
  },
  {
    title:
      "CropMapBench: A Benchmark Suite for Satellite-Based Crop Stress Segmentation in Semi-Arid Regions",
    venue: "arXiv preprint",
    year: "2025",
    status: "Preprint",
    authors: "Somadhan Research Team",
    tags: ["Geospatial ML", "Benchmarking"],
  },
  {
    title:
      "Field-Validated Yield Forecasting for Smallholder Farms Using Multi-Sensor Fusion",
    venue: "ICML Workshop on Climate Change and AI",
    year: "2024",
    status: "Peer-reviewed",
    authors: "Somadhan Research Team",
    tags: ["Yield forecasting", "Sensor fusion"],
  },
  {
    title:
      "A Research Protocol for Ground-Truth Collection in Agricultural Computer Vision",
    venue: "Precision Agriculture (in preparation)",
    year: "2026",
    status: "In review",
    authors: "Somadhan Research Team",
    tags: ["Datasets", "Protocols"],
  },
];

export const researchSteps = [
  {
    number: "01",
    title: "Frame the problem with agronomists",
    body: "Every project starts in the field with a precise question — and with the people who grow the crops. If it does not matter to a farmer, we do not build it.",
  },
  {
    number: "02",
    title: "Collect ground truth, at scale",
    body: "Models are only as honest as the data they learn from. We collect labelled field data through structured protocols, season after season.",
  },
  {
    number: "03",
    title: "Build, measure, iterate",
    body: "We train and benchmark models against real performance targets — not leaderboards — and hold every result to statistical scrutiny.",
  },
  {
    number: "04",
    title: "Deploy with feedback loops",
    body: "Field deployments are experiments with consequences. Every deployment feeds observations back into the research cycle.",
  },
  {
    number: "05",
    title: "Publish and share",
    body: "Science compounds when it is shared. We publish our findings, release datasets where possible, and engage the wider research community.",
  },
];
