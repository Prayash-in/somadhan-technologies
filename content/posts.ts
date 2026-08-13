export type PostSection = {
  heading?: string;
  body: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  content: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "why-research-first-matters-in-agri-tech",
    title: "Why research-first matters in agri-tech",
    excerpt:
      "Agriculture is a physical, seasonal system. Models that skip the field tend to fail quietly — here is why we build the other way around.",
    date: "March 18, 2026",
    readTime: "6 min read",
    tag: "Approach",
    content: [
      {
        body: [
          "Agri-tech products live or die by physical reality. A crop is not a click, a field is not a dataset, and a growing season is not a sprint. When software makes a wrong recommendation in agriculture, the cost is measured in harvests — not in latency or conversion.",
          "This is why Somadhan builds research-first: every model, advisory and product decision starts from a testable question about the physical world, and gets validated against that world before it ships.",
        ],
      },
      {
        heading: "The quiet failure of lab-only models",
        body: [
          "Many agricultural models perform beautifully on curated benchmarks and then stumble in the field. Shadows change, sensor noise appears, crop varieties differ, and weather refuses to cooperate with the test set. A model that has never been tested against these conditions does not fail loudly — it fails quietly, in thousands of small decisions.",
          "Research-first is our defence against that. It means structured data collection with agronomists, explicit hypotheses, honest benchmarks and deployments that feed results back into the model lifecycle.",
        ],
      },
      {
        heading: "What research-first looks like in practice",
        body: [
          "It looks like ground-truth protocols written before any code. It looks like measuring false negatives for disease detection because a missed case is costlier than a false alarm. It looks like publishing benchmarks so that our claims can be checked. And it looks like closing the loop: observations from every deployed advisory return to the research team as training signal.",
        ],
      },
      {
        heading: "Patient science, fast shipping",
        body: [
          "Research-first does not mean slow. It means that what ships has already earned its place. We move quickly inside the loop — rapid experiments, tight feedback, short iterations — precisely because the loop is grounded in the field.",
          "In a domain where a wrong answer costs a season, the only fast path is the rigorous one.",
        ],
      },
    ],
  },
  {
    slug: "reading-a-field-like-a-model-does",
    title: "Reading a field like a model does",
    excerpt:
      "What a neural network actually sees when it looks at a crop — and why that changes how we collect training data.",
    date: "February 09, 2026",
    readTime: "5 min read",
    tag: "Research",
    content: [
      {
        body: [
          "When we say a model 'reads' a field, we mean something precise: it converts pixels and spectra into structured signals — vigour, stress, stage, anomaly — and then into decisions. Understanding what the model sees is the difference between a tool farmers trust and a black box they ignore.",
        ],
      },
      {
        heading: "Beyond green pixels",
        body: [
          "The human eye and a computer vision model attend to different things. A model may weigh texture, canopy temperature proxies and spectral indices more heavily than overall colour. In practice this means a stressed canopy can look 'fine' in true colour while the model sees it early — but only if it was trained on that stress.",
        ],
      },
      {
        heading: "Why ground truth is the bottleneck",
        body: [
          "The gap between the field and the model is closed entirely by data. If a training set contains mostly healthy canopies photographed in good light, the model learns a world without problems. Our research protocol exists to prevent that: plots are labelled by agronomists, symptoms are photographed as they appear, and negative examples are collected as carefully as positive ones.",
        ],
      },
      {
        heading: "Trust built from transparency",
        body: [
          "Models earn trust the same way people do — through demonstrated reliability and honest limits. That is why we publish our validation methods, share error analyses and let agronomists audit model behaviour on their own fields.",
        ],
      },
    ],
  },
  {
    slug: "from-satellite-pixels-to-sowing-decisions",
    title: "From satellite pixels to sowing decisions",
    excerpt:
      "How a weather forecast, a soil map and a crop model come together into one timely recommendation.",
    date: "December 04, 2025",
    readTime: "7 min read",
    tag: "Field Notes",
    content: [
      {
        body: [
          "A sowing decision looks simple: plant now, or wait. But getting it right means combining rainfall onset forecasts, soil moisture state, variety-specific phenology and risk tolerance — and delivering the result before the window closes.",
        ],
      },
      {
        heading: "The ingredients",
        body: [
          "Our advisory pipeline fuses three layers. Satellite and in-situ sensing estimate soil moisture and field readiness. Downscaled weather models predict onset and early-season rainfall. A crop model then runs the scenarios: what does this variety need, and what is the risk profile of each sowing window?",
        ],
      },
      {
        heading: "The output is a decision, not a map",
        body: [
          "Farmers do not need more data — they need better decisions. Our output is a recommendation with a confidence level and an alternative: 'Sowing window opens 22 June with moderate risk; waiting 6 days improves emergence odds by 11%.' That sentence carries more value than a hundred maps.",
        ],
      },
      {
        heading: "What the field taught us",
        body: [
          "Early pilots taught us that trust in the recommendation depends on the alternative being explicit, and on the model admitting uncertainty. Farmers already manage risk daily; our job is to make the trade-offs legible.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
