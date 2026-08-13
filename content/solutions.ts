export type Solution = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  approach: string[];
  outcomes: string[];
  tags: string[];
  tone: "green" | "gold" | "sky" | "terra";
};

export const solutions: Solution[] = [
  {
    id: "precision-agriculture",
    index: "01",
    title: "Precision Agriculture",
    tagline: "Fields as measurable systems.",
    description:
      "Computer vision and geospatial intelligence that turn farm fields into measurable systems. We fuse satellite, drone and in-situ imagery into high-resolution maps that guide every field operation.",
    approach: [
      "Multi-spectral satellite and drone imagery pipelines that run continuously through the growing season.",
      "Computer-vision models for field segmentation, crop type mapping and vegetation health scoring.",
      "Variable-rate advisories that turn maps into actionable, field-level prescriptions.",
    ],
    outcomes: [
      "Up to 12% higher input-use efficiency in pilot plots",
      "Field-level, season-long health timelines for every acre under management",
      "Operational across pilot sites in multiple agro-climatic zones",
    ],
    tags: ["Satellite analytics", "Computer vision", "Variable-rate advisory"],
    tone: "green",
  },
  {
    id: "crop-intelligence",
    index: "02",
    title: "Crop Intelligence",
    tagline: "See stress before it spreads.",
    description:
      "Early detection of disease, pests and nutrient stress — built from field trials and validated in real growing conditions, not just on curated datasets.",
    approach: [
      "Detection models for common disease and pest pressure, trained on field-collected imagery.",
      "Forecasting of pest and disease outbreaks using weather and phenology signals.",
      "Growth monitoring that flags deviations from the expected crop development curve.",
    ],
    outcomes: [
      "Early-warning windows of up to 10–14 days before visible symptoms",
      "Fungicide and pesticide use targeted only where pressure is real",
      "Continuous model refresh from live farm feedback loops",
    ],
    tags: ["Disease detection", "Pest forecasting", "Growth monitoring"],
    tone: "gold",
  },
  {
    id: "climate-resilience",
    index: "03",
    title: "Climate & Water Resilience",
    tagline: "Decisions timed to the climate.",
    description:
      "Forecast-driven advisories for irrigation, sowing and harvest timing that help farms absorb weather variability instead of being caught by it.",
    approach: [
      "Downscaled weather forecasting coupled with crop water demand models.",
      "Irrigation advisory that schedules water use against soil moisture and forecast risk.",
      "Sowing and harvest windows computed from phenology, rainfall and temperature projections.",
    ],
    outcomes: [
      "Measurable water savings in pilot irrigated plots",
      "Sowing decisions aligned to predicted rainfall onset",
      "Risk flags for frost, heat stress and dry spells, days in advance",
    ],
    tags: ["Weather modelling", "Irrigation advisory", "Risk forecasting"],
    tone: "sky",
  },
  {
    id: "value-chain-intelligence",
    index: "04",
    title: "Agri Value Chain Intelligence",
    tagline: "From farm gate to fork, with signal.",
    description:
      "Quality assessment, traceability and market intelligence that connect what happens in the field to what happens at the market — reducing loss and unlocking better prices.",
    approach: [
      "Computer-vision quality grading of produce at aggregation points.",
      "Traceability records that follow produce from plot to purchase order.",
      "Market intelligence that surfaces price signals and demand patterns to growers.",
    ],
    outcomes: [
      "Faster, more consistent grading at aggregation points",
      "Reduced post-harvest loss in pilot value chains",
      "Price and demand signals delivered back to the farm",
    ],
    tags: ["Quality grading", "Traceability", "Market intelligence"],
    tone: "terra",
  },
];

export function getSolution(id: string) {
  return solutions.find((s) => s.id === id);
}
